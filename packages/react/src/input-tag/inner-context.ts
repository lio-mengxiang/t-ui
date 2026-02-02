// input-tag-context.ts
'use client';
import React, { createContext, useContext, type KeyboardEvent } from 'react';
import type { ObjectValueType, InputTagRootProps } from './interface';
import type { RefInputType } from '../input/interface';

export interface InputTagInnerContextProps {
  refInput: React.RefObject<RefInputType>;
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
  validate?: InputTagRootProps['validate'];
  tokenSeparators?: InputTagRootProps['tokenSeparators'];
}

export const InputTagInnerContext = createContext<InputTagInnerContextProps | null>(null);

export const useInputInnerTagContext = (): InputTagInnerContextProps => {
  const context = useContext(InputTagInnerContext);
  if (!context) {
    throw new Error('InputTag components must be used within <InputTag.Root>');
  }
  return context;
};
