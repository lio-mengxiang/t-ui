'use client';
import React from 'react';
import { useSelectInnerContext } from '../inner-context';
import { Popover } from '../../popover';
import { SelectInputRoot } from '../../select-input';
import type { SelectViewProps } from '../interface';

export const SelectView = ({ id, style, className, placeholder, maxTagCount, children }: SelectViewProps) => {
  const {
    selectViewEventHandlers,
    refSelectView,
    value,
    inputValue,
    popupVisible,
    isNoOptionSelected,
    renderText,
    showSearch,
    readOnly,
    disabled,
    isMultiple,
  } = useSelectInnerContext();

  return (
    <Popover.Trigger>
      <SelectInputRoot
        id={id}
        showSearch={!!showSearch}
        className={className}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        style={style}
        isMultiple={isMultiple}
        {...selectViewEventHandlers}
        ref={refSelectView}
        // state
        value={value}
        inputValue={inputValue}
        popupVisible={popupVisible}
        isEmptyValue={isNoOptionSelected}
        maxTagCount={maxTagCount}
        // how to render selected value
        renderText={renderText}
      >
        {children}
      </SelectInputRoot>
    </Popover.Trigger>
  );
};
