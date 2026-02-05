'use client';

import { createContext, useContext } from 'react';
import type { SelectViewCommonProps } from './interface';

interface SelectInputInnerContext {
  inputValue: SelectViewCommonProps['inputValue'];
  isEmptyValue: SelectViewCommonProps['isEmptyValue'];
  onRemoveCheckedItem: SelectViewCommonProps['onRemoveCheckedItem'];
  placeholder: SelectViewCommonProps['placeholder'];
  readOnly: SelectViewCommonProps['readOnly'];
  disabled: SelectViewCommonProps['disabled'];
  maxTagCount: SelectViewCommonProps['maxTagCount'];
  renderTag: SelectViewCommonProps['renderTag'];
  searchStatus: number;
  mergedFocused: boolean;
  canFocusInput: boolean;
  inputEventHandlers: {
    onPaste: (e: any) => void;
    onKeyDown: (event: any) => void;
    onFocus: (event: any) => void;
    onBlur: (event: any) => void;
    onChange: (newValue: any, event: any) => void;
  };
  refInput: React.RefObject<HTMLInputElement>;
  showSearch: boolean;
  focused: boolean;
  renderText: SelectViewCommonProps['renderText'];
  value: SelectViewCommonProps['value'];
  popupVisible: SelectViewCommonProps['popupVisible'];
}

export const SelectInputInnerContext = createContext<SelectInputInnerContext | null>(null);

export const useSelectInnerContext = (): SelectInputInnerContext => {
  const context = useContext(SelectInputInnerContext);
  if (!context) {
    throw new Error('Select components must be used within <Select.Root>');
  }
  return context;
};
