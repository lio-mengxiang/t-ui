// input-tag-context.ts
'use client';
import React, { createContext, useContext } from 'react';
import type { ObjectValueType, InputTagRootProps } from './interface';
import type { RefInputType } from '../input/input';

export interface InputTagContextValue {
  refInput: React.RefObject<RefInputType | null>;
  refTSLastSeparateTriggered: React.RefObject<number | null>;
  focused: boolean;
  setFocused: (focused: boolean) => void;
  value: ObjectValueType[];
  setValue: (value: ObjectValueType[]) => void;
  inputValue: InputTagRootProps['inputValue'];
  setInputValue: (value: InputTagRootProps['inputValue']) => void;
  hotkeyHandler: (event: KeyboardEvent) => void;
  readOnly: InputTagRootProps['readOnly'];
  disabled: InputTagRootProps['disabled'];
  onRemove: InputTagRootProps['onRemove'];
  labelInValue: InputTagRootProps['labelInValue'];
  maxTagCount: InputTagRootProps['maxTagCount'];
  handleClearClick: (e: React.MouseEvent) => void;
  onChange?: InputTagRootProps['onChange'];
}

export const InputTagContext = createContext<InputTagContextValue | null>(null);

export const useInputTagContext = (): InputTagContextValue => {
  const context = useContext(InputTagContext);
  if (!context) {
    throw new Error('InputTag components must be used within <InputTag.Root>');
  }
  return context;
};
