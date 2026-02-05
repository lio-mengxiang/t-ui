'use client';
import React from 'react';
import { handleTokenSeparators, tryAddInputValueToTag } from '../utils';
import { useInputInnerTagContext } from '../inner-context';
import { InputComponent } from '../../input';
import { mergeRefs } from '../../hooks';
import type { InputTagInputProps } from '../interface';

export function InputTagInput(props: InputTagInputProps) {
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
    labelInValue,
    onChange,
    validate,
    tokenSeparators,
    disableInput,
  } = useInputInnerTagContext();

  const { placeholder, saveOnBlur, onInputChange, onKeyDown, onPaste, onFocus, onBlur, onPressEnter, className, style, ref } = props;
  const mergedDisabled = disabled || disableInput;

  return (
    <InputComponent
      className={className}
      style={{
        outline: 'none',
        backgroundColor: 'transparent',
        ...style,
      }}
      autoComplete="off"
      disabled={mergedDisabled}
      readOnly={readOnly}
      ref={mergeRefs(refInput, ref)}
      placeholder={!value.length ? placeholder : ''}
      autoFitWidth={true}
      onPressEnter={async (_, e) => {
        if (inputValue) {
          e.preventDefault();
        }
        onPressEnter?.(e as React.KeyboardEvent<HTMLInputElement>);
        await tryAddInputValueToTag({
          validate,
          inputValue,
          value,
          setInputValue,
          disabled: mergedDisabled,
          readOnly,
          setValue,
          onChange,
          labelInValue,
        });
      }}
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        if (!mergedDisabled && !readOnly) {
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
            disabled: mergedDisabled,
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
            disabled: mergedDisabled,
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
          disabled: mergedDisabled,
          readOnly,
          setValue,
          onChange,
          labelInValue,
        });
      }}
    />
  );
}
