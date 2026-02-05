'use client';

import { createContext, useContext, type KeyboardEvent } from 'react';
import type { OptionData, SelectRootProps } from './interface';
import type { SelectViewHandle } from '../select-input/select-input-root';

interface SelectContextValue {
  // trigger: SelectRootProps['trigger'];
  disabled: SelectRootProps['disabled'];
  readOnly: SelectRootProps['readOnly'];
  popupVisible: SelectRootProps['popupVisible'];
  isMultiple: SelectRootProps['isMultiple'];
  onVisibleChange: SelectRootProps['onVisibleChange'];
  tryUpdatePopupVisible: (visible: boolean) => void;
  selectViewEventHandlers: {
    onFocus: (e: any) => void;
    onBlur: (event: any) => void;
    onKeyDown: (event: any) => void;
    onChangeInputValue: (
      value: string,
      {
        nativeEvent: { inputType },
      }: {
        nativeEvent: {
          inputType: any;
        };
      },
    ) => void;
    onPaste: (e: any) => void;
    onRemoveCheckedItem: (_: any, index: any, event: any) => void;
  };
  refSelectView: React.RefObject<SelectViewHandle>;
  value: string | number | (string | number)[];
  inputValue: SelectRootProps['inputValue'];
  isNoOptionSelected: boolean;
  isMultipleMode: boolean;
  renderText: (value: any) => {
    text: any;
    disabled: boolean;
  };
  hotkeyHandler: (event: KeyboardEvent) => void;
  showSearch: SelectRootProps['showSearch'];
  childrenList: OptionData[]; // 这是经过 filterOption 筛选后的列表
  selectedValue: any; // 当前选中的值
  handleClearClick: (event: React.MouseEvent) => void;
  handleOptionClick: (value: OptionData['value'], disabled: boolean) => void;
}

export const SelectInnerContext = createContext<SelectContextValue | null>(null);

export const useSelectInnerContext = (): SelectContextValue => {
  const context = useContext(SelectInnerContext);
  if (!context) {
    throw new Error('Select components must be used within <Select.Root>');
  }
  return context;
};
