import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { cs } from '@/_utils';
import { useInputGroup, InputComponent, type InputProps, IconCloseLine } from '@t-headless-ui/react';
import { motion } from 'motion/react';

export type RefInputType = {
  /** 使输入框失去焦点 */
  blur?: () => void;
  /** 使输入框获取焦点 */
  focus?: () => void;
  /** input dom元素 */
  inputDom?: HTMLInputElement;
  /** 输入框 dom 元素 */
  dom?: HTMLDivElement;
};

export interface TInputProps extends InputProps {
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  onWrapperMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const TMotionInput = forwardRef<RefInputType, TInputProps>((props, ref) => {
  const {
    clearIcon = (
      <IconCloseLine className="group-hover:visible invisible transition-all duration-150 ease-linear cursor-pointer hover:rounded-full hover:bg-color-100" />
    ),
    className,
    inputClassName,
    style,
    inputStyle,
    placeholder,
    onWrapperMouseDown,
    ...rest
  } = props;
  const { status, inputRef, inputWrapperRef, value, onChange, onMouseDown, onClick } = useInputGroup(props);
  const [isFocused, setIsFocused] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      ...inputRef.current,
      // 暴露这个属性给 popover 组件使用
      dom: inputWrapperRef.current,
    };
  }, []);

  const isActive = isFocused || value;

  return (
    <div
      className={cs(
        'relative inline-flex h-9 text-sm items-center box-border border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-2 transition-all duration-150 ease-linear hover:border-color-200 [--tw-tap-highlight-color:transparent] placeholder:text-[var(--text-color-placeholder)] group',
        {
          'bg-color-100 cursor-not-allowed hover:border-[var(--border-color)] focus:border-[var(--border-color)] text-color-500 placeholder:text-color-500':
            props.disabled,
          'border-color-200': isFocused,
          'cursor-pointer': props.readOnly,
          'border-error-color hover:border-error-color focus:border-error-color': status === 'error' && !props.disabled,
          'border-warning-color hover:border-warning-color focus:border-warning-color': status === 'warning' && !props.disabled,
          'w-[fit-content]': props.autoFitWidth,
        },
        className,
      )}
      ref={inputWrapperRef}
      style={style}
      onMouseDown={(e) => {
        onWrapperMouseDown?.(e);
        onMouseDown(e);
      }}
      onClick={onClick}
    >
      <div className="relative h-12 inline-flex items-end">
        {placeholder && (
          <motion.span
            animate={{
              y: isActive ? -12 : 0,
              scale: isActive ? 0.9 : 1,
            }}
            layoutId="placeholder"
            className="inline-flex items-center h-full select-none whitespace-nowrap text-color-500 mr-1 absolute left-1"
          >
            {placeholder}
          </motion.span>
        )}
        <div className="flex items-center">
          <InputComponent
            ref={inputRef}
            {...rest}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(value, e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(value, e);
            }}
            value={value}
            onChange={onChange}
            className={cs(
              'w-full h-7 border-none outline-none p-0 whitespace-nowrap bg-transparent box-border [word-wrap:normal] px-1',
              {
                'cursor-not-allowed': props.disabled,
                'cursor-pointer': props.readOnly,
              },
              inputClassName,
            )}
            style={inputStyle}
            clearIcon={clearIcon}
          />
        </div>
      </div>
    </div>
  );
});
