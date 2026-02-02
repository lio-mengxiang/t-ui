import React from 'react';
import { isFunction } from '../../utils';
import { ADD } from '../constants';
import { valueChangeHandler } from './valueChangeHandler';
import type { InputTagRootProps, ObjectValueType } from '../interface';

interface TryAddInputValueToTagProps {
  validate: InputTagRootProps['validate'];
  inputValue: string;
  value: ObjectValueType[];
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: InputTagRootProps['disabled'];
  readOnly: InputTagRootProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
}

export async function tryAddInputValueToTag({
  validate,
  inputValue,
  value,
  setInputValue,
  disabled,
  readOnly,
  setValue,
  onChange,
  labelInValue,
}: TryAddInputValueToTagProps) {
  try {
    const validateResult = isFunction(validate) ? await validate(inputValue, value) : true;
    if (validateResult) {
      valueChangeHandler({
        disabled,
        readOnly,
        setValue,
        value: value.concat({
          value: validateResult === true ? inputValue : validateResult,
          label: inputValue,
        }),
        onChange,
        labelInValue,
        reason: ADD,
      });
      setInputValue('');
    }
  } catch (error) {
    console?.error(error);
  }
}
