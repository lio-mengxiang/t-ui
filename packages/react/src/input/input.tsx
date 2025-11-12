'use client';

import React, { useImperativeHandle, forwardRef } from 'react';
import { useMergeValue, useResizeObserver } from '../hooks';
import { useInputElementStore } from './store';
import { fillNBSP } from '../utils';
import type { InputProps } from './interface';
import { formatValue } from './utils';

export type RefInputType = {
  /** 使输入框失去焦点 */
  blur?: () => void;
  /** 使输入框获取焦点 */
  focus?: () => void;
  /** input dom元素 */
  inputDom?: HTMLInputElement;
};

export const InputComponent = forwardRef<RefInputType, InputProps>((props, ref) => {
  const {
    allowClear,
    disabled,
    placeholder,
    autoFitWidth,
    onClear,
    readOnly,
    onKeyDown,
    onPressEnter,
    maxLength: propMaxLength,
    clearIcon,
    normalize,
    normalizeTrigger = ['onBlur'],
    defaultValue,
    onChange: propsOnChange,
    ...rest
  } = props;

  const trueMaxLength = propMaxLength?.length;
  const mergedMaxLength = propMaxLength?.errorOnly ? undefined : trueMaxLength;

  const [value, setValue] = useMergeValue('', {
    defaultValue: 'defaultValue' in props ? formatValue(props.defaultValue, mergedMaxLength) : undefined,
    value: 'value' in props ? formatValue(props.value, mergedMaxLength) : undefined,
  });

  const onChange = (value, e) => {
    if (!('value' in props)) {
      setValue(value);
    }
    props.onChange?.(value, e);
  };

  // store
  const { inputProps, refInput, refInputMirror, refPrevInputWidth, handleClear, mirrorValue, inputComputeStyle, updateInputWidth } =
    useInputElementStore({
      rest,
      placeholder,
      disabled,
      value,
      autoFitWidth,
      readOnly,
      onChange: propsOnChange || onChange,
      onKeyDown,
      onPressEnter,
      onClear,
      maxLength: propMaxLength,
      normalizeTrigger,
      normalize,
      defaultValue,
    });

  useImperativeHandle(ref, () => {
    return {
      dom: refInput.current,
      inputDom: refInput.current,
      focus: () => {
        refInput.current?.focus?.();
      },
      blur: () => {
        refInput.current?.blur?.();
      },
    };
  }, []);

  //监听 popupRef 节点或内容变化动
  useResizeObserver(refInputMirror?.current, (target) => {
    const inputWidth = target.offsetWidth;
    updateInputWidth();
    refPrevInputWidth.current = inputWidth;
  });

  return (
    <>
      <input ref={refInput} {...inputProps} />
      {!readOnly && !disabled && allowClear && value ? (
        clearIcon !== undefined ? (
          <span
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleClear(e);
            }}
          >
            {clearIcon}
          </span>
        ) : null
      ) : null}

      {autoFitWidth && (
        <span style={inputComputeStyle} ref={refInputMirror}>
          {fillNBSP(mirrorValue)}
        </span>
      )}
    </>
  );
});
