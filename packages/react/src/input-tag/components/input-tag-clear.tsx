'use client';

import React from 'react';
import { useInputInnerTagContext } from '../inner-context';
import type { InputClearProps } from '../interface';

export function InputTagClear({ children, onClick, ...rest }: InputClearProps) {
  const { value, disabled, readOnly, focused, handleClearClick } = useInputInnerTagContext();

  // Do not render if disabled, read-only, or no value
  if (disabled || readOnly || !value?.length) return null;

  return (
    <div
      {...rest}
      onClick={(e) => {
        e.stopPropagation();
        handleClearClick(e);
        onClick?.(e);
      }}
      aria-disabled={!!disabled}
      aria-readonly={!!readOnly}
      data-focused={!!focused}
    >
      {children}
    </div>
  );
}
