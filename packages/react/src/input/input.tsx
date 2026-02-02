'use client';

import React, { useImperativeHandle } from 'react';
import { useMergeValue, useResizeObserver } from '../hooks';
import { useInputElementStore } from './store';
import { fillNBSP } from '../utils';
import type { InputProps } from './interface';
import { formatValue } from './utils';

export const InputComponent = (props: InputProps) => {
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
    ref: externRef,
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
  const { inputProps, refInput, refInputMirror, handleClear, mirrorValue, inputComputeStyle, updateInputWidth } = useInputElementStore({
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
    ...rest,
  });

  useImperativeHandle(externRef, () => {
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
  }, [refInput]);

  //监听 popupRef 节点或内容变化动
  useResizeObserver(refInputMirror?.current, () => {
    updateInputWidth();
  });

  return (
    <>
      <input aria-disabled={disabled} aria-readonly={readOnly} {...inputProps} ref={refInput} />
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
};
