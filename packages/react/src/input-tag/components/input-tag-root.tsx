'use client';

import React, { useImperativeHandle } from 'react';
import { keepFocus } from '../utils';
import type { InputTagHandle, InputTagRootProps } from '../interface';
import { useInputTagStore } from '../store';
import { InputTagInnerContext } from '../inner-context';

const defaultProps: InputTagRootProps = {
  validate: (inputValue, values) => inputValue && values.every((item) => item.value !== inputValue),
};

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
    focused: propsFocused,
    disableInput,
    ref,
    validate = defaultProps.validate,
    tokenSeparators,
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
    propsFocused,
  });

  useImperativeHandle<any, InputTagHandle>(ref, () => {
    return {
      blur: () => refInput.current?.blur(),
      focus: () => refInput.current?.focus(),
      dom: refInput.current?.dom,
      inputDom: refInput.current?.inputDom,
    };
  }, []);

  return (
    <InputTagInnerContext.Provider
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
        disabled: disabled || disableInput,
        onRemove,
        labelInValue,
        maxTagCount,
        handleClearClick,
        onChange,
        validate,
        tokenSeparators,
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
        aria-disabled={!!disabled}
        aria-readonly={!!readOnly}
        data-focused={!!focused}
      >
        {children}
      </div>
    </InputTagInnerContext.Provider>
  );
}
