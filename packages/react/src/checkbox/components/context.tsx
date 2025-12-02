'use client';
import { createContext } from 'react';

export interface CheckboxContextValue {
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

export const CheckboxContext = createContext<CheckboxContextValue>({
  // 默认值便于消费端做兜底 UI
  checked: false,
});
