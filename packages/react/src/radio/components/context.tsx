'use client';
import { createContext } from 'react';

export interface RadioContextValue {
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

export const RadioContext = createContext<RadioContextValue>({
  // 默认值便于消费端做兜底 UI
  checked: false,
});
