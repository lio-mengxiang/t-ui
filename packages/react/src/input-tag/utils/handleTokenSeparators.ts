import React from 'react';

import { valueChangeHandler } from './valueChangeHandler';
import { ADD } from '../constants';
// type
import type { InputTagProps, InputTagRootProps, ObjectValueType } from '../interface';
import { isArray, isFunction } from '../../utils';

interface HandleTokenSeparatorsProps {
  str: string;
  refTSLastSeparateTriggered: React.RefObject<number>;
  tokenSeparators: InputTagProps['tokenSeparators'];
  validate: InputTagProps['validate'];
  value: ObjectValueType[];
  disabled: InputTagRootProps['disabled'];
  readOnly: InputTagRootProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
}

export async function handleTokenSeparators({
  str,
  refTSLastSeparateTriggered,
  tokenSeparators,
  validate,
  value,
  disabled,
  readOnly,
  setValue,
  onChange,
  labelInValue,
}: HandleTokenSeparatorsProps) {
  // clear the timestamp, and then we can judge whether tokenSeparators has been triggered
  refTSLastSeparateTriggered.current = null;

  if (isArray(tokenSeparators) && tokenSeparators.length) {
    const splitTextList = str.split(new RegExp(`[${tokenSeparators.join('')}]`));

    if (splitTextList.length > 1) {
      refTSLastSeparateTriggered.current = Date.now();

      const validatedValueList: ObjectValueType[] = [];

      await Promise.all(
        splitTextList.map(async (text) => {
          // filter empty string and validate it
          const validateResult = text ? (isFunction(validate) ? await validate(text, value) : true) : false;
          if (validateResult) {
            validatedValueList.push({
              value: validateResult === true ? text : validateResult,
              label: text,
            });
          }
        }),
      );

      if (validatedValueList.length) {
        valueChangeHandler({ disabled, readOnly, setValue, value: value.concat(validatedValueList), onChange, labelInValue, reason: ADD });
      }
    }
  }
}
