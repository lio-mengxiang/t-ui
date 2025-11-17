import React from 'react';

import { Radio } from './radio';
import { useMergeValue } from '../../hooks';
import { RadioGroupContext } from '../radioContext';
import { isArray, isObject } from '../../utils';
// types
import type { RadioGroupProps } from '../interface';

export function Group(props: RadioGroupProps) {
  // props
  const { name, children, type = 'radio', options, disabled, onChange: propsOnchange, ...rest } = props;

  // state
  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  });

  // functions
  const onChangeValue = (v: any, event): void => {
    if (v === value) return;

    if (!('value' in props)) {
      setValue(v);
    }
    propsOnchange?.(v, event);
  };

  return (
    <div role="radiogroup" {...rest}>
      <RadioGroupContext.Provider
        value={{
          onChangeValue,
          type,
          value,
          disabled,
          group: true,
          name,
        }}
      >
        {isArray(options)
          ? options.map((option, index) => {
              if (isObject(option)) {
                return (
                  <Radio key={option.value} disabled={disabled || option.disabled} value={option.value}>
                    {option.label}
                  </Radio>
                );
              }
              return (
                <Radio key={index} value={option} disabled={disabled}>
                  {option}
                </Radio>
              );
            })
          : children}
      </RadioGroupContext.Provider>
    </div>
  );
}
