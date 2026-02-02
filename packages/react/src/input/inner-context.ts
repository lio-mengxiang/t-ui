// input-tag-context.ts
'use client';
import { createContext, useContext } from 'react';
import type { InputProps } from './interface';

export interface InputGroupContextProps {
  readOnly: InputProps['readOnly'];
  disabled: InputProps['disabled'];
  allowClear: InputProps['allowClear'];
  value: InputProps['value'];
  autoFitWidth: InputProps['autoFitWidth'];
}

export const InputGroupContext = createContext<InputGroupContextProps | null>(null);

export const useInputGroupContext = (): InputGroupContextProps => {
  const context = useContext(InputGroupContext);
  if (!context) {
    throw new Error('Input components must be used within <Input.Root>');
  }
  return context;
};
