'use client';
import React from 'react';
import { keepFocus } from '../utils';
import { InputTagRootProps } from '../interface';
import { useInputTagStore } from '../store';
import { InputTagContext } from '../context';

export function InputTagRoot(props: InputTagRootProps) {
  const {
    defaultValue,
    value: propsValue,
    inputValue: propsInputValue,
    readOnly,
    disabled,
    onRemove,
    onChange,
    labelInValue,
    onClick,
    children,
    maxTagCount,
    ...rest
  } = props;

  const {
    refInput,
    refTSLastSeparateTriggered,
    focused,
    setFocused,
    value,
    setValue,
    inputValue,
    setInputValue,
    hotkeyHandler,
    handleClearClick,
  } = useInputTagStore({
    defaultValue,
    propsValue,
    propsInputValue,
    readOnly,
    disabled,
    onRemove,
    onChange,
    labelInValue,
  });

  return (
    <InputTagContext.Provider
      value={{
        refInput,
        refTSLastSeparateTriggered,
        focused,
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
        handleClearClick,
        onChange,
      }}
    >
      <div
        {...rest}
        onMouseDown={(event) => {
          // prevent losing input focus
          if (focused) keepFocus(event);
          rest?.onMouseDown?.(event);
        }}
        onClick={(e) => {
          if (!focused) {
            refInput.current?.focus();
          }
          onClick?.(e);
        }}
      >
        {children}
      </div>
    </InputTagContext.Provider>
  );
}
