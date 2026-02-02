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
  } = useInputInnerTagContext();

  const { placeholder, saveOnBlur, onInputChange, onKeyDown, onPaste, onFocus, onBlur, onPressEnter, className, style, ref } = props;

  return (
    <InputComponent
      className={className}
      style={style}
      autoComplete="off"
      disabled={disabled}
      readOnly={readOnly}
      ref={mergeRefs(refInput, ref)}
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
  );
}

// const mergedArrowIcon =
//   'arrowIcon' in props ? (
//     arrowIcon === null ? null : (
//       <div className={`${prefixCls}-arrow-icon`}>{arrowIcon}</div>
//     )
//   ) : (
//     <div className={`${prefixCls}-arrow-icon`}>
//       <IconDown />
//     </div>
//   );

// const mergedSuffixIcon = loading ? (
//   <span className={`${prefixCls}-loading-icon`}>
//     <IconLoading />
//   </span>
// ) : suffixIcon ? (
//   <span className={`${prefixCls}-suffix-icon`}>{suffixIcon}</span>
// ) : props.showSearch && popupVisible ? (
//   <div className={`${prefixCls}-search-icon`}>
//     <IconSearch />
//   </div>
// ) : (
//   mergedArrowIcon
// );
