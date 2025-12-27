'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { CheckboxGroupContext } from '../checkboxGroupContext';
import { getMergeProps } from '../utils';

// type
import type { CheckboxProps } from '../interface';
import type { CheckboxGroupContextProps } from '../checkboxGroupContext';
import { CheckboxContext } from './context';
import { useMergeValue } from '../../hooks';

export function Checkbox<T extends string | number>(props: CheckboxProps<T>) {
  // CheckboxGroupContext
  const context = useContext<CheckboxGroupContextProps>(CheckboxGroupContext);
  const { onGroupChange } = context;

  const mergeProps = getMergeProps({ props, context });
  const { disabled, children, readonly, value, checked: propsChecked, onChange: propsOnChange, indeterminate, ...rest } = mergeProps;

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [checked, setChecked] = useMergeValue(false, {
    value: propsChecked,
    defaultValue: mergeProps.defaultChecked,
  });

  useEffect(() => {
    context.registerValue(value);
    return () => {
      context.unRegisterValue(value);
    };
  }, [value]);

  // function
  const onChange = function (e) {
    e.persist();
    e.stopPropagation();

    // 禁用或只读都不改变状态，不触发外部 onChange
    if (disabled || readonly) return;

    if (context.isCheckboxGroup) {
      onGroupChange?.(mergeProps.value, e.target.checked, e);
    } else {
      setChecked(e.target.checked);
    }
    propsOnChange?.(e.target.checked, e);
  };

  const onLabelClick = function (e) {
    // 只读或禁用时，阻止点击产生任何行为
    if (disabled || readonly) {
      e.preventDefault();
      return;
    }
    rest?.onClick?.(e);
  };

  return (
    <CheckboxContext.Provider value={{ checked, disabled, indeterminate, readonly }}>
      <label {...rest} onClick={onLabelClick} aria-disabled={!!disabled} aria-readonly={!!readonly} aria-checked={!!checked}>
        <input
          value={value}
          disabled={!!disabled}
          ref={inputRef}
          checked={!!checked}
          onChange={onChange}
          // To avoid triggering onChange twice in Select if it's used in Select option.
          onClick={(e) => e.stopPropagation()}
          type="checkbox"
          aria-readonly={!!readonly}
        />

        {children}
      </label>
    </CheckboxContext.Provider>
  );
}
