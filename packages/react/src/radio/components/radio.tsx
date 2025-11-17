import React, { useContext, useRef } from 'react';
import { RadioGroupContext } from '../radioContext';
import { useMergeValue } from '../../hooks';
import { isFunction } from '../../utils';
import { getMergeProps } from '../utils';

// types
import type { RadioGroupContextProps, RadioProps } from '../interface';

const handleInputClick = (e) => {
  // 阻止事件冒泡，确保点击 label 时不会触发 input 的点击事件
  e.stopPropagation();
};

export function Radio(props: RadioProps) {
  // context
  const context = useContext<RadioGroupContextProps>(RadioGroupContext);
  const mergeProps = getMergeProps({ props, context });
  const { disabled, children, value, checked: propsChecked, onChange: propsOnChange, ...rest } = mergeProps;

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
    if (context.group) {
      context?.onChangeValue?.(value, e);
    } else if (!('checked' in props) && !checked) {
      setChecked(true);
    }
    if (!checked) {
      // 因为 html 标准就是只有 checked 为 true 时，才会触发 onChange 事件
      propsOnChange?.(true, e);
    }
  };

  // 当点击 label 时触发：
  // 1. 如果 children 是函数（render prop），则阻止默认行为并手动触发隐藏 input 的点击，确保原生 radio 状态更新
  // 2. 无论是否 render prop，都继续调用外部传入的 onClick
  const onLabelClick = function (e) {
    if (isFunction(mergeProps.children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
    rest?.onClick?.(e);
  };
  return (
    <label {...rest} onClick={onLabelClick}>
      {/* 为什么没有 readonly 状态， 标准里本来也没有 */}
      <input
        ref={inputRef}
        disabled={!!disabled}
        value={value}
        type="radio"
        checked={!!checked}
        onChange={onChange}
        onClick={handleInputClick}
      />
      {isFunction(children) ? (
        children({ checked })
      ) : context.type === 'radio' ? (
        <>
          children
          {/* <div className={maskCls} />
          {children && <span className={textCls}>{children}</span>} */}
        </>
      ) : (
        context.type === 'button' && children
      )}
    </label>
  );
}
