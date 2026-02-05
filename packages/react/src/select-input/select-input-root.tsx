'use client';

import React, { useState, useImperativeHandle, useRef, useEffect, forwardRef } from 'react';
import { Enter } from '../utils/keycode';
import { SelectInputInnerContext } from './inner-context';
import type { SelectViewCommonProps } from './interface';

export type SelectViewHandle = {
  dom: HTMLDivElement;
  getRootDOMNode: () => HTMLDivElement;
  focus: () => void;
  blur: () => void;
};

export const SearchStatusEnum = {
  SEARCHING: 1,
  NONE: 2,
};

export const SelectInputRoot = forwardRef((props: SelectViewCommonProps, ref) => {
  const {
    id,
    style,
    className,
    inputValue,
    value,
    popupVisible,
    isEmptyValue,
    renderText,
    onRemoveCheckedItem,
    onChangeInputValue,
    onPaste,
    onFocus,
    onBlur,
    isMultiple,
    placeholder,
    showSearch: propsShowSearch,
    readOnly,
    disabled,
    maxTagCount,
    renderTag,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    children,
  } = props;

  // refs
  const refInput = useRef(null);
  const refWrapper = useRef(null);

  // state
  const [focused, setFocused] = useState(false);
  const [searchStatus, setSearchStatus] = useState(SearchStatusEnum.NONE);

  const showSearch = propsShowSearch;

  const canFocusInput = showSearch || isMultiple;

  const mergedFocused = focused || popupVisible;

  // make input element focusable or not
  const handleFocus = (action: 'focus' | 'blur') => {
    const element = canFocusInput ? refInput.current : refWrapper.current;
    if (element) {
      if (action === 'focus') {
        element.focus();
      } else {
        element.blur();
      }
    }
  };

  // input focus to Synchronize focused state to whole component
  const tryTriggerFocusChange = (action: 'focus' | 'blur', event) => {
    if (canFocusInput && event.target === refWrapper.current) {
      return;
    }
    if (action === 'focus') {
      setFocused(true);
      onFocus?.(event);
    } else {
      setFocused(false);
      onBlur?.(event);
    }
  };

  const tryTriggerKeyDown = (event) => {
    if (canFocusInput && event.currentTarget === refWrapper.current) {
      return;
    }
    // Prevent the default behavior of the browser when pressing Enter, to avoid submit event in <form>
    const keyCode = event.keyCode || event.which;
    if (keyCode === Enter.code) {
      event.preventDefault();
    }

    onKeyDown?.(event);
  };

  useEffect(() => {
    handleFocus(popupVisible ? 'focus' : 'blur');
    if (canFocusInput) {
      setSearchStatus(popupVisible ? SearchStatusEnum.SEARCHING : SearchStatusEnum.NONE);
    }
  }, [popupVisible]);

  useImperativeHandle<any, SelectViewHandle>(ref, () => ({
    dom: refWrapper.current,
    getRootDOMNode: () => refWrapper.current,
    focus: handleFocus.bind(null, 'focus'),
    blur: handleFocus.bind(null, 'blur'),
  }));

  // event handling of input box
  const inputEventHandlers = {
    onPaste: onPaste,
    onKeyDown: tryTriggerKeyDown,
    onFocus: (event) => {
      event.stopPropagation();
      tryTriggerFocusChange('focus', event);
    },
    onBlur: (event) => {
      event.stopPropagation();
      tryTriggerFocusChange('blur', event);
    },
    onChange: (newValue, event) => {
      setSearchStatus(SearchStatusEnum.SEARCHING);
      onChangeInputValue?.(newValue, event);
    },
  };

  return (
    <SelectInputInnerContext.Provider
      value={{
        inputValue,
        isEmptyValue,
        onRemoveCheckedItem,
        placeholder,
        readOnly,
        disabled,
        maxTagCount,
        renderTag,
        searchStatus,
        mergedFocused,
        canFocusInput,
        inputEventHandlers,
        refInput,
        showSearch,
        focused,
        renderText,
        value,
        popupVisible,
      }}
    >
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-autocomplete="list"
        aria-expanded={!!popupVisible}
        aria-disabled={!!disabled}
        onClick={(e) => {
          if (popupVisible && canFocusInput) {
            e.stopPropagation();
          }
          onClick?.(e);
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={(e) => {
          e?.stopPropagation();
        }}
        ref={refWrapper}
        tabIndex={disabled ? -1 : 0}
        id={id}
        style={style}
        // When there is an input box, the keyboard events are handled inside the input box to avoid triggering redundant events in the Chinese input method
        onKeyDown={tryTriggerKeyDown}
        onFocus={(event) => {
          if (!disabled) {
            // Focus on the input, otherwise you need to press the Tab key twice to focus on the input box
            if (canFocusInput) {
              refInput.current?.focus();
            } else {
              tryTriggerFocusChange('focus', event);
            }
          }
        }}
        onBlur={(event) => tryTriggerFocusChange('blur', event)}
        className={className}
        data-visible={!!popupVisible}
        data-focused={!!mergedFocused}
      >
        {children}
      </div>
    </SelectInputInnerContext.Provider>
  );
});
