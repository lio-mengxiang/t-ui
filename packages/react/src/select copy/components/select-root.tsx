'use client';
import React, { type ReactNode, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useMergeValue } from '../../hooks';
import { isArray, isFunction, isObject } from '../../utils';
import { getHotkeyHandler } from '../../utils/getHotkeyHandler';
import { Esc, Enter, Tab } from '../../utils/keycode';
import { isEmptyValue, getValidValue } from '../utils';
import { flatChildren } from '../utils/flat-children';
import { SelectInnerContext } from '../inner-context';
import { Popover, type PopupVisibleChangeContext } from '../../popover';
import type { InputValueChangeReason, LabeledValue, SelectHandle, OptionData, SelectRootProps } from '../interface';
import type { SelectViewHandle } from '../../select-input/select-input-root';

type SelectInnerStateValue = string | number | string[] | number[];

export function SelectRoot(props: SelectRootProps) {
  const {
    children,
    renderFormat,
    disabled,
    readOnly,
    showSearch,
    tokenSeparators,
    options,
    labelInValue,
    // trigger = 'click',
    filterOption = true,
    onChange,
    onSelect,
    onDeselect,
    onClear,
    onSearch,
    onFocus,
    onBlur,
    onVisibleChange,
    onInputValueChange,
    onPaste,
    onKeyDown,
    isMultiple,
    offsetDistance = 4,
    offsetSkidding,
    destroyOnClose = true,
    ref,
  } = props;

  const isMultipleMode = isMultiple;

  const [value, setValue] = useMergeValue(isMultipleMode ? [] : undefined, {
    value: 'value' in props ? getValidValue(props.value, isMultipleMode, labelInValue) : undefined,
    defaultValue: 'defaultValue' in props ? getValidValue(props.defaultValue, isMultipleMode, labelInValue) : undefined,
  });

  const [inputValue, setInputValue, stateInputValue] = useMergeValue('', {
    value: 'inputValue' in props ? props.inputValue || '' : undefined,
  });

  const [popupVisible, setPopupVisible] = useMergeValue(false, {
    defaultValue: props.defaultPopupVisible,
    value: props.popupVisible,
  });

  // 具有选中态或者 hover 态的 option 的 value
  // const [valueActive] = useState<OptionData['value']>(isArray(value) ? value[0] : value);

  // 缓存较为耗时的 flatChildren 的结果
  const { childrenList, optionInfoMap } = useMemo(() => {
    return flatChildren(
      { options, filterOption },
      {
        inputValue,
      },
    );
  }, [options, filterOption, inputValue]);

  // ref
  const refSelectView = useRef<SelectViewHandle>(null);
  // 用来保存 value 和选中项的映射
  const refValueMap = useRef<Array<{ value: OptionData['value']; option: OptionData }>>([]);
  // 触发 onInputValueChange 回调的值
  const refOnInputChangeCallbackValue = useRef(inputValue);
  // 触发 onInputValueChange 回调的原因
  const refOnInputChangeCallbackReason = useRef<InputValueChangeReason>(null);
  // 上次成功触发自动分词的时间
  const refTSLastSeparateTriggered = useRef(0);

  const isNoOptionSelected = isEmptyValue(value, isMultipleMode);

  // Try to update inputValue and trigger onInputValueChange callback
  const tryUpdateInputValue = (value: string, reason: InputValueChangeReason) => {
    // 语义重复的副作用被多次触发
    if (value !== refOnInputChangeCallbackValue.current || reason !== refOnInputChangeCallbackReason.current) {
      setInputValue(value);
      refOnInputChangeCallbackValue.current = value;
      refOnInputChangeCallbackReason.current = reason;
      onInputValueChange?.(value, reason);
    }
  };

  // 尝试更新 popupVisible，触发 onVisibleChange
  const tryUpdatePopupVisible = (value: boolean, context?: PopupVisibleChangeContext) => {
    if (context?.trigger === 'trigger-element-click' && popupVisible && value === false && showSearch) {
      // 搜索态下，忽略 click 触发的 close
      return;
    }
    if (popupVisible !== value) {
      setPopupVisible(value);
      onVisibleChange?.(value);
    }
  };

  // 处理模式切换时 value 格式的校正
  useEffect(() => {
    if (isMultipleMode) {
      if (!Array.isArray(value)) {
        setValue(value === undefined ? [] : [value]);
      }
    } else if (Array.isArray(value)) {
      setValue(value.length === 0 ? undefined : value[0]);
    }
  }, [isMultipleMode, value]);

  // 更新 refValueMap，避免数组规模无节制扩大
  useEffect(() => {
    refValueMap.current = refValueMap.current.filter((x) => {
      return isMultipleMode ? isArray(value) && value.indexOf(x.value) > -1 : x.value === value;
    });
  }, [value, isMultipleMode]);

  // 在 inputValue 变化时，适时触发 onSearch
  useEffect(() => {
    const { current: reason } = refOnInputChangeCallbackReason;
    if (stateInputValue === inputValue && (reason === 'manual' || reason === 'optionListHide')) {
      onSearch?.(inputValue, reason);
    }
  }, [inputValue]);

  /**
   * 返回 option
   */
  const getOptionInfoByValue = useCallback(
    (value: OptionData['value']): OptionData => {
      const option = optionInfoMap.get(value);
      if (option) {
        const index = refValueMap.current.findIndex((item) => item.value === value);
        if (index > -1) {
          refValueMap.current.splice(index, 1, { value, option });
        } else {
          refValueMap.current.push({ value, option });
        }
        return option;
      }

      const item = refValueMap.current.find((x) => x.value === value);
      return item && item.option;
    },
    [optionInfoMap],
  );

  /**
   * 组件内部状态 value 通常只是 ID（如 'beijing'）。但用户在 onChange 中往往希望拿到这一项的完整信息（OptionInfo）。
   * 因此，在 onChange 中，我们需要根据 value 来获取对应的 OptionInfo。这个函数就是来取 value 对应的 OptionInfo。
   *
   */
  const getValueAndOptionForCallback = (
    stateValue: SelectInnerStateValue, // 要更新的新的值
    isEmpty = isEmptyValue(stateValue, isMultipleMode),
  ): {
    value: SelectRootProps['value'];
    option: OptionData | OptionData[];
  } => {
    let value: SelectRootProps['value'] = stateValue;

    // 如果新的值是 undefined，那么 option 也应该是 undefined, value 也是 undefined, 也就是清空选中项
    // 如果新的值是数组，意味着是多选，转成数组，getOptionInfoByValue 可以根据值得到 option
    // 当 value 是 undefined 时，我们希望 option 也变成 undefined，以表示没有选中项。
    const option =
      stateValue === undefined
        ? undefined
        : Array.isArray(stateValue)
          ? stateValue.map(getOptionInfoByValue)
          : getOptionInfoByValue(stateValue);

    // 有时候异步获取 options 数据，如果现有 value，那么就不知道 value 对应的 label 是多少，只能用 value 自己
    // 所以如果 labelInValue 为 true，就尝试是否能在 value 中找到对应的 label
    // 否则页面会显示 value 自己，等 option 加载完成后再显示 label
    if (labelInValue && !isEmpty) {
      const getOptionLabel = (optionValue: OptionData['value'], optionInfo: OptionData) => {
        if (optionInfo) {
          return optionInfo.label;
        }

        // Make sure parameter value has valid label if props.value is already set
        const propValue = 'value' in props ? props.value : 'defaultValue' in props ? props.defaultValue : null;

        // Multiple mode
        if (Array.isArray(propValue)) {
          for (const item of propValue) {
            if (isObject(item) && item.value === optionValue) {
              return item.label;
            }
          }
        }
        // Single mode
        else if (isObject(propValue) && propValue.value === optionValue) {
          return propValue.label;
        }
      };

      if (Array.isArray(stateValue)) {
        // { value: string | number; label: string | number; }[]
        value = stateValue.map((optionValue: OptionData['value'], index) => ({
          value: optionValue,
          label: getOptionLabel(optionValue, (option as OptionData[])[index]),
        }));
      } else {
        // { value: string | number; label: string | number; }
        value = { value: stateValue, label: getOptionLabel(stateValue, option as OptionData) };
      }
    }

    return { option, value };
  };

  /**
   * 尝试更新 select 的 value 状态。
   */
  const tryUpdateSelectValue = (value: SelectInnerStateValue) => {
    setValue(value);
    if (onChange) {
      const paramsForCallback = getValueAndOptionForCallback(value);
      onChange(paramsForCallback.value, paramsForCallback.option);
    }
  };

  // 多选时，选择/取消选择一个选项
  const checkOption = (optionValue: OptionData['value'], operation: 'add' | 'remove') => {
    // 如果是 remove：不需要检查该选项是否在当前的 optionInfoMap 中。因为用户可能正在搜索，或者该选项已经从列表中消失了（比如在 Tag 上点删除），我们只需要无脑从当前的 value 状态数组中过滤掉它即可。
    // 如果是 add：必须确保 optionValue 在当前的 optionInfoMap 中存在。这是为了防止通过非法途径选中了不存在或未加载的项。
    if (operation === 'remove' || (operation === 'add' && optionInfoMap.get(optionValue))) {
      const newValue =
        operation === 'add'
          ? (value as string[] | number[]).concat(optionValue)
          : (value as string[] | number[]).filter((v) => v !== optionValue);
      const callbackToTrigger = operation === 'add' ? onSelect : onDeselect;

      tryUpdateSelectValue(newValue as string[] | number[]);

      if (typeof callbackToTrigger === 'function') {
        const paramsForCallback = getValueAndOptionForCallback(optionValue, false);
        callbackToTrigger(paramsForCallback.value as LabeledValue, paramsForCallback.option as OptionData);
      }
    }
  };

  const handleOptionClick = (optionValue: OptionData['value'], disabled: boolean) => {
    if (disabled) {
      return;
    }

    if (isMultipleMode) {
      checkOption(optionValue, (value as Array<OptionData['value']>).indexOf(optionValue) === -1 ? 'add' : 'remove');

      // 点击一个选项时，清空输入框内容
      tryUpdateInputValue('', 'optionChecked');
    } else {
      if (optionValue !== value) {
        tryUpdateSelectValue(optionValue);
      }
      tryUpdateInputValue('', 'optionChecked');
      setTimeout(() => {
        tryUpdatePopupVisible(false);
      });
    }
  };

  // 注册快捷键
  const hotkeyHandler = getHotkeyHandler(
    new Map([
      [Esc.code, () => tryUpdatePopupVisible(false)],
      [
        Enter.code,
        () => {
          if (popupVisible) {
            // const option = optionInfoMap.get(valueActive);
            // if (option) {
            //   handleOptionClick(valueActive, option.disabled);
            // }
          } else {
            tryUpdatePopupVisible(true);
          }
        },
      ],
      [
        Tab.code,
        // 按tab键切换，关闭开启的弹出框
        () => tryUpdatePopupVisible(false),
      ],
    ]),
  );

  /**
   * 处理输入字符串中的分隔符，将其切分成多个值
   * @param str 输入的字符串，可能包含分隔符（如逗号、分号等）
   * @returns 如果成功切分，返回 true；否则返回 false
   */
  const handleTokenSeparators = (str: string): boolean => {
    // 1. 初始化标记：重置“上次触发分词”的时间戳
    refTSLastSeparateTriggered.current = null;

    // 2. 准入检查：必须是多选模式，且配置了分隔符（如 [',', ';']）
    if (isMultipleMode && isArray(tokenSeparators) && tokenSeparators.length) {
      // 3. 正则切割：利用分隔符将字符串切开
      // 例如：str = "A,B;C" -> rawValues = ["A", "B", "C"]
      const rawValues = str.split(new RegExp(`[${tokenSeparators.join('')}]`));

      // 4. 判断是否真的触发了切割
      if (rawValues.length > 1) {
        // 记录触发时间，这样外面就知道刚才成功分词了，需要清空输入框
        refTSLastSeparateTriggered.current = Date.now();

        // 5. 数据清洗：去重、过滤掉空字符串
        const splitValues = rawValues.filter((v, index) => v && rawValues.indexOf(v) === index);

        const newValue = (value as any[]).slice(0); // 复制一份当前的 value 数组
        let needUpdate = false;

        // 6. 核心循环：处理切出来的每一个值
        splitValues.forEach((v) => {
          // 如果这个值还没被选中
          // 并且（在 options 列表里能找到， 并且不在当前选中列表里）
          if (newValue.indexOf(v) === -1 && optionInfoMap.get(v)) {
            newValue.push(v);
            needUpdate = true;
          }
        });

        // 7. 批量更新：如果有新值加入，一次性更新状态
        if (needUpdate) {
          tryUpdateSelectValue(newValue);
        }
      }
    }

    // 返回 true/false 告诉调用者刚才是否成功分词了
    return !!refTSLastSeparateTriggered.current;
  };

  // SelectView组件事件处理
  const selectViewEventHandlers = {
    onFocus,
    onBlur: (event) => {
      onBlur?.(event);
      // 关闭下拉列表时，清空输入框，否则会造成 select 组件异常显示
      if (!popupVisible) {
        tryUpdateInputValue('', 'optionListHide');
      }
    },
    onKeyDown: (event) => {
      // 处理快捷键
      hotkeyHandler(event);
      onKeyDown?.(event);
    },

    onChangeInputValue: (value: string, { nativeEvent: { inputType } }) => {
      // 在现代浏览器中，用户粘贴内容时，会先触发 onPaste 事件，紧接着触发 input 事件（即此处的 onChangeInputValue）。
      // 因此，在 onPaste 事件中已经处理了分词，这里就不需要再处理了。
      // Do NOT use await, need to update input value right away

      if (inputType !== 'insertFromPaste') {
        handleTokenSeparators(value);
      }

      // 根据分词是否成功来决定输入框显示什么
      if (refTSLastSeparateTriggered.current) {
        // 分词成功：清空输入框
        tryUpdateInputValue('', 'tokenSeparator');
      } else {
        // 分词未触发：保留用户输入的字符
        tryUpdateInputValue(value, 'manual');
      }

      if (!popupVisible && value) {
        tryUpdatePopupVisible(true);
      }
    },

    onPaste: (e) => {
      handleTokenSeparators(e.clipboardData.getData('text'));
      onPaste?.(e);
    },

    // Option Items
    onRemoveCheckedItem: (_, index, event) => {
      event.stopPropagation();
      checkOption(value[index], 'remove');
    },
  };

  const handleClearClick = (event) => {
    event.stopPropagation();
    if (isMultipleMode) {
      // 保留已经被选中但被disabled的选项值
      const newValue = (value as []).filter((v) => {
        const item = optionInfoMap.get(v);
        return item && item.disabled;
      });
      tryUpdateSelectValue(newValue);
    } else {
      tryUpdateSelectValue(undefined);
    }
    tryUpdateInputValue('', 'manual');
    onClear?.(popupVisible);
  };

  useImperativeHandle<any, SelectHandle>(
    ref,
    () => ({
      dom: refSelectView.current?.dom,
      focus() {
        refSelectView.current?.focus?.();
      },
      blur() {
        refSelectView.current?.blur?.();
      },
    }),
    [],
  );

  const renderText = (value: number | string) => {
    const option = getOptionInfoByValue(value);
    let text: ReactNode;
    if (isFunction(renderFormat)) {
      const paramsForCallback = getValueAndOptionForCallback(value, false);
      text = renderFormat((paramsForCallback.option as OptionData) || null, paramsForCallback.value as LabeledValue);
    } else {
      let foundLabelFromProps = false;
      // 如果异步加载还没完成，option 档案库是空的。这时候必须从用户传进来的初始对象里提取 label，否则界面会显示 ID。
      if (labelInValue) {
        const propValue = props.value || props.defaultValue;
        // 多选
        if (Array.isArray(propValue)) {
          const targetLabeledValue = (propValue as LabeledValue[]).find((item) => isObject(item) && item.value === value);
          if (targetLabeledValue) {
            text = targetLabeledValue.label;
            foundLabelFromProps = true;
          }
          // 单选
        } else if (isObject(propValue)) {
          text = (propValue as LabeledValue).label;
          foundLabelFromProps = true;
        }
      }

      if (!foundLabelFromProps && option && 'label' in option) {
        text = option.label;
      }
    }
    return {
      text,
      disabled: option?.disabled,
    };
  };

  const headlessProps = {
    childrenList, // 这是经过 filterOption 筛选后的列表
    selectedValue: value, // 当前选中的值
    isMultipleMode,
    handleClearClick,
    handleOptionClick,
  };

  return (
    <SelectInnerContext.Provider
      value={{
        // trigger,
        disabled,
        readOnly,
        popupVisible,
        onVisibleChange,
        tryUpdatePopupVisible,
        selectViewEventHandlers,
        refSelectView,
        value,
        inputValue,
        isNoOptionSelected,
        isMultipleMode,
        renderText,
        hotkeyHandler,
        showSearch,
        isMultiple,
        ...headlessProps,
      }}
    >
      <Popover.Root
        trigger="click"
        disabled={disabled}
        readOnly={readOnly}
        offsetDistance={offsetDistance}
        offsetSkidding={offsetSkidding}
        visible={popupVisible}
        onVisibleChange={tryUpdatePopupVisible}
        placement="bottom-start"
        destroyOnClose={destroyOnClose}
      >
        {children}
      </Popover.Root>
    </SelectInnerContext.Provider>
  );
}
