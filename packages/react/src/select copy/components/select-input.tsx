'use client';
import React from 'react';
import { SelectSingleInput, SelectMultiRoot } from '../../select-input';
import { useSelectInnerContext } from '../inner-context';
import type { SelectInputProps } from '../interface';

export const SelectInputComponent = ({ className, children }: SelectInputProps) => {
  const { isMultipleMode, popupVisible } = useSelectInnerContext();

  return isMultipleMode ? (
    <SelectMultiRoot className={className} dataVisible={popupVisible}>
      {children}
    </SelectMultiRoot>
  ) : (
    <SelectSingleInput className={className} />
  );
};
