'use client';

import React, { useState } from 'react';
import { useMergeValue } from '../../hooks';

import { CheckboxGroupContext } from '../checkboxGroupContext';
// type
import type { CheckboxGroupProps } from '../interface';

export function Group(props: CheckboxGroupProps) {
  // props
  const { disabled, children, readonly, onChange: propsOnchange, ...rest } = props;

  // state
  const [value, setValue] = useMergeValue([], {
    defaultValue: props.defaultValue,
    value: props.value,
  });
  const [allOptionValues, setAllOptionValues] = useState([]);

  // function
  const onChange = function (optionValue, checked: boolean, e: Event) {
    if (!Array.isArray(value)) {
      console.error('Checkbox.Group value must be an array');
      return;
    }
    const newVal = value?.slice() || [];
    if (checked) {
      newVal.push(optionValue);
    } else {
      newVal.splice(value.indexOf(optionValue), 1);
    }
    setValue(newVal);
    propsOnchange?.(
      newVal.filter((v) => allOptionValues.indexOf(v) > -1),
      e,
    );
  };

  return (
    <div role="checkboxgroup" {...rest}>
      <CheckboxGroupContext.Provider
        value={{
          isCheckboxGroup: true,
          checkboxGroupValue: value,
          onGroupChange: onChange,
          disabled,
          readonly,
          registerValue: (value) => {
            setAllOptionValues((allOptionValues) => Array.from(new Set([...allOptionValues, value])));
          },
          unRegisterValue: (value) => {
            setAllOptionValues((allOptionValues) => allOptionValues.filter((x) => x !== value));
          },
        }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
}
