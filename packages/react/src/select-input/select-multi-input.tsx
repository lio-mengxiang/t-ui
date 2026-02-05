'use client';

import React from 'react';
import { InputTag } from '../input-tag';
import { useSelectInnerContext } from './inner-context';
import { useInputInnerTagContext } from '../input-tag/inner-context';

export const SelectMultiInput = ({ className }: { className?: string }) => {
  const { inputEventHandlers, placeholder, mergedFocused, canFocusInput, isEmptyValue } = useSelectInnerContext();
  const { disableInput } = useInputInnerTagContext();

  const eventHandlers = {
    onPaste: inputEventHandlers.onPaste,
    onKeyDown: inputEventHandlers.onKeyDown,
    onFocus: inputEventHandlers.onFocus,
    onBlur: inputEventHandlers.onBlur,
    onInputChange: inputEventHandlers.onChange,
  };

  const needShowInput = !!((mergedFocused && canFocusInput) || isEmptyValue);

  return (
    <InputTag.Input
      placeholder={placeholder}
      {...eventHandlers}
      className={className}
      style={{
        pointerEvents: disableInput ? 'none' : 'auto',
        outline: 'none',
        backgroundColor: 'transparent',
        ...(needShowInput ? {} : { position: 'absolute', opacity: 0, zIndex: -1 }),
      }}
    />
  );
};
