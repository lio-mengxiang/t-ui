'use client';
import React, { useContext, useRef } from 'react';
import { RadioGroupContext } from '../radioContext';
import { useMergeValue } from '../../hooks';
import { getMergeProps } from '../utils';

// types
import type { RadioGroupContextProps, RadioProps } from '../interface';
import { RadioContext } from './context';

export function Radio(props: RadioProps) {
  // context
  const context = useContext<RadioGroupContextProps>(RadioGroupContext);
  const mergeProps = getMergeProps({ props, context });
  const { disabled, readonly, children, value, checked: propsChecked, onChange: propsOnChange, ...rest } = mergeProps;

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [checked, setChecked] = useMergeValue(false, {
    value: propsChecked,
    defaultValue: mergeProps.defaultChecked,
  });

  // function
  const onChange = (e) => {
    e.persist();
    e.stopPropagation();

    // 禁用或只读都不改变状态，不触发外部 onChange
    if (disabled || readonly) return;

    if (context.group) {
      context?.onChangeValue?.(value, e);
    } else if (!('checked' in props) && !checked) {
      setChecked(true);
    }
    if (!checked) {
      propsOnChange?.(true, e);
    }
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
    <RadioContext.Provider value={{ checked, disabled, readonly }}>
      <label {...rest} onClick={onLabelClick} aria-disabled={!!disabled} aria-readonly={!!readonly} aria-checked={!!checked}>
        {/* 为什么没有 readonly 状态， 标准里本来也没有 */}
        <input
          ref={inputRef}
          disabled={!!disabled}
          value={value}
          type="radio"
          checked={!!checked}
          onChange={onChange}
          onClick={(e) => {
            // 阻止 input 的点击事件冒泡，避免重复处理
            e.stopPropagation();
          }}
          aria-readonly={!!readonly}
        />
        {children}
      </label>
    </RadioContext.Provider>
  );
}
