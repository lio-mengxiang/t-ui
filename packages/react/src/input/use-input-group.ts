'use client';

import React, { useRef, useState } from 'react';
import { useMergeValue } from '../hooks';
import { contains } from '../mini-floating-ui/utils';
import { RefInputType } from './input';
import type { InputProps } from './interface';
import { formatValue, isLengthExceeds } from './utils';

export function useInputGroup(props: InputProps) {
  const { maxLength } = props;
  const trueMaxLength = maxLength?.length;
  const mergedMaxLength = maxLength?.errorOnly ? undefined : trueMaxLength;

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<RefInputType>({});
  const inputWrapperRef = useRef<HTMLDivElement>(null);
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

  const valueLength = value?.length;
  const hasLengthError = isLengthExceeds({ mergedMaxLength, valueLength, trueMaxLength });
  const status = props.status || (hasLengthError ? 'error' : undefined);

  const onMouseDown = (e: React.MouseEvent) => {
    // 当点击 Addon 时，阻止默认行为，避免输入框失去焦点
    if ((e.target as HTMLElement).tagName !== 'INPUT') {
      if (inputWrapperRef.current && contains(inputWrapperRef?.current, e?.target as Element)) {
        e.preventDefault();
      }
    }
  };

  const onClick = (e: React.MouseEvent) => {
    // 当 tooltip 弹出框出现时，点击弹出框不应让输入框重新获得焦点
    if (inputWrapperRef.current && contains(inputWrapperRef.current, e?.target as Element)) {
      inputRef.current?.focus();
    }
  };

  return {
    status,
    setFocus,
    focus,
    inputRef,
    inputWrapperRef,
    hasLengthError,
    value,
    setValue,
    onMouseDown,
    onClick,
    onChange,
  };
}
