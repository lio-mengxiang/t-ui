'use client';

import React from 'react';
import { useMergeValue } from '../../hooks';
import { RadioGroupContext } from '../radioContext';

// types
import type { RadioGroupProps } from '../interface';

export function RadioGroup(props: RadioGroupProps) {
  // props
  const { name, children, type = 'radio', disabled, readonly, onChange: propsOnchange, ...rest } = props;

  // state
  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  });

  // functions
  const onChangeValue = (v: any, event): void => {
    if (v === value) return;

    // value 不在 props 中，说明是非受控组件，需要更新 state，因为本质上内部把非受控也用 setValue 去更新的
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
          readonly,
          group: true,
          name,
        }}
      >
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}
