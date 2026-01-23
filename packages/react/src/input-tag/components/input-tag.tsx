'use client';
import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { handleTokenSeparators, mergedRenderTag, tryAddInputValueToTag } from '../utils';
import { useInputTagContext } from '../context';
import { InputComponent } from '../../input';
import type { InputTagHandle, InputTagProps, ObjectValueType } from '../interface';

const defaultProps: InputTagProps = {
  validate: (inputValue, values) => inputValue && values.every((item) => item.value !== inputValue),
};

function InputTag(props: InputTagProps, ref) {
  const validate = props.validate || defaultProps.validate;

  const {
    refInput,
    refTSLastSeparateTriggered,
    setFocused,
    value,
    setValue,
    inputValue,
    setInputValue,
    hotkeyHandler,
    readOnly,
    disabled,
    onRemove,
    labelInValue,
    maxTagCount,
    onChange,
  } = useInputTagContext();

  const {
    placeholder,
    saveOnBlur,
    tokenSeparators,
    renderTag = ({ label, closable, onClose }, index) => (
      <span key={index}>
        {label} {closable && <span onClick={onClose}>&times;</span>}
      </span>
    ),
    onInputChange,
    onKeyDown,
    onPaste,

    onFocus,
    onBlur,
    onPressEnter,
    className,
    style,
  } = props;

  useImperativeHandle<any, InputTagHandle>(ref, () => {
    return {
      blur: refInput.current?.blur,
      focus: refInput.current?.focus,
    };
  }, []);

  // 处理 maxTagCount 参数
  const maxTagCountValue = useMemo(() => {
    if (typeof maxTagCount === 'object') {
      return maxTagCount.count;
    }
    return maxTagCount;
  }, [maxTagCount]);

  // 计算可见标签列表和隐藏数量
  const { visibleList, hiddenList } = useMemo(() => {
    let visibleList = value;
    let hiddenList: ObjectValueType[] = [];

    // 只有当 maxTagCountValue 是有效数字且小于 value 长度时才进行切片
    if (typeof maxTagCountValue === 'number' && maxTagCountValue >= 0 && maxTagCountValue < value.length) {
      visibleList = value.slice(0, maxTagCountValue);
      hiddenList = value.slice(maxTagCountValue);
    }

    return { visibleList, hiddenList };
  }, [value, maxTagCountValue]);

  const renderEllipsisNode = (hiddenList: ObjectValueType[]) => {
    if (typeof maxTagCount === 'object' && maxTagCount.render) {
      return maxTagCount.render(hiddenList);
    }
    return <>+{hiddenList.length}</>;
  };

  return (
    <>
      {/* 只遍历可见的标签 */}
      {visibleList.map((item, index) => {
        return mergedRenderTag({
          readOnly,
          item,
          disabled,
          index,
          renderTag,
          value,
          onRemove,
          setValue,
          onChange,
          labelInValue,
        });
      })}

      {/* 省略的标签 */}
      {hiddenList?.length > 0 && renderEllipsisNode(hiddenList)}

      <InputComponent
        className={className}
        style={style}
        autoComplete="off"
        disabled={disabled}
        readOnly={readOnly}
        ref={refInput}
        placeholder={!value.length ? placeholder : ''}
        autoFitWidth={true}
        onPressEnter={async (_, e) => {
          if (inputValue) {
            e.preventDefault();
          }
          onPressEnter?.(e as React.KeyboardEvent<HTMLInputElement>);
          await tryAddInputValueToTag({ validate, inputValue, value, setInputValue, disabled, readOnly, setValue, onChange, labelInValue });
        }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          if (!disabled && !readOnly) {
            setFocused(true);
            onFocus?.(e);
          }
        }}
        onBlur={async (e: React.FocusEvent<HTMLInputElement>) => {
          setFocused(false);
          onBlur?.(e as React.FocusEvent<HTMLInputElement>);
          if (saveOnBlur) {
            await tryAddInputValueToTag({
              validate,
              inputValue,
              value,
              setInputValue,
              disabled,
              readOnly,
              setValue,
              onChange,
              labelInValue,
            });
          }
          setInputValue('');
        }}
        value={inputValue}
        onChange={(str, event) => {
          // Only fire callback on user input to ensure parent component can get real input value on controlled mode.
          onInputChange?.(str, event as React.ChangeEvent<HTMLInputElement>);
          // Pasting event also trigger onChange event, and onChange event is triggered later than onPaste event
          if (event.nativeEvent.inputType !== 'insertFromPaste') {
            handleTokenSeparators({
              str,
              refTSLastSeparateTriggered,
              tokenSeparators,
              validate,
              value,
              disabled,
              readOnly,
              setValue,
              onChange,
              labelInValue,
            });
          }

          // if refTSLastSeparateTriggered.current exist, it represent value will be separated
          if (refTSLastSeparateTriggered.current) {
            setInputValue('');
          } else {
            setInputValue(str);
          }
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          hotkeyHandler(event as any);
          onKeyDown?.(event);
        }}
        onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => {
          onPaste?.(event);
          handleTokenSeparators({
            str: event.clipboardData.getData('text'),
            refTSLastSeparateTriggered,
            tokenSeparators,
            validate,
            value,
            disabled,
            readOnly,
            setValue,
            onChange,
            labelInValue,
          });
        }}
      />
    </>
  );
}

export const InputTagComponent = forwardRef<InputTagHandle, InputTagProps>(InputTag);
