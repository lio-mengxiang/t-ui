'use client';

import { createContext, useContext } from 'react';
import type { OptionData } from './interface';

interface SelectContextValue {
  childrenList: OptionData[]; // 这是经过 filterOption 筛选后的列表
  selectedValue: any; // 当前选中的值
  isMultipleMode: boolean;
  handleClearClick: (event: React.MouseEvent) => void;
  handleOptionClick: (value: OptionData['value'], disabled: boolean) => void;
}

export const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelectContext = (): SelectContextValue => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within <Select.Root>');
  }
  return context;
};
