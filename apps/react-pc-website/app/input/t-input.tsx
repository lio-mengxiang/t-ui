import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { cs } from '@/_utils';
import { useInputGroup, InputComponent, type InputProps, IconCloseLine } from '@t-headless-ui/react';

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
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  showWordLimit?: boolean;
  onWrapperMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function SuffixElement(props: { trueMaxLength: number; valueLength: number; hasLengthError: boolean }) {
  const { trueMaxLength, valueLength, hasLengthError } = props;

  return (
    <span
      className={cs({
        'text-error-color': hasLengthError,
      })}
    >
      {valueLength}/{trueMaxLength}
    </span>
  );
}

export const TInput = forwardRef<RefInputType, TInputProps>((props, ref) => {
  const {
    clearIcon = (
      <IconCloseLine className="group-hover:visible invisible transition-all duration-150 ease-linear cursor-pointer hover:rounded-full hover:bg-color-100" />
    ),
    prefixElement,
    suffixElement,
    showWordLimit,
    className,
    inputClassName,
    style,
    inputStyle,
    onWrapperMouseDown,
    ...rest
  } = props;
  const { status, inputRef, inputWrapperRef, hasLengthError, value, onChange, onMouseDown, onClick } = useInputGroup(props);
  const [isFocused, setIsFocused] = useState(false);

  const valueLength = value?.length;
  const trueMaxLength = props?.maxLength?.length;

  useImperativeHandle(ref, () => {
    return {
      focus: inputRef.current?.focus,
      blur: inputRef.current?.blur,
      inputDom: inputRef.current?.inputDom,
      // 暴露这个属性给 popover 组件使用
      dom: inputWrapperRef.current,
    };
  }, []);

  return (
    <div
      className={cs(
        'relative inline-flex h-9 text-sm items-center box-border border border-[var(--border-color)] text-[var(--text-color)] rounded-md px-2 transition-all duration-150 ease-linear hover:border-color-200 focus:border-color-200 [--tw-tap-highlight-color:transparent] placeholder:text-[var(--text-color-placeholder)] group',
        {
          'bg-color-100 cursor-not-allowed hover:border-[var(--border-color)] focus:border-[var(--border-color)] text-color-500 placeholder:text-color-500':
            props.disabled,
          'cursor-pointer': props.readOnly,
          'border-color-200': isFocused,
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
      {prefixElement && (
        <span className="inline-flex items-center h-full select-none whitespace-nowrap text-color-500 mr-1">{prefixElement}</span>
      )}
      <InputComponent
        ref={inputRef}
        {...rest}
        value={value}
        onChange={onChange}
        className={cs(
          'w-full h-9 border-none outline-none p-0 whitespace-nowrap bg-transparent box-border [word-wrap:normal] px-1',
          {
            'cursor-not-allowed': props.disabled,
            'cursor-pointer': props.readOnly,
          },
          inputClassName,
        )}
        style={inputStyle}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(value, e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(value, e);
        }}
        clearIcon={clearIcon}
      />
      {trueMaxLength !== undefined && showWordLimit && (
        <SuffixElement trueMaxLength={trueMaxLength} valueLength={valueLength} hasLengthError={hasLengthError} />
      )}
      {suffixElement && (
        <span className="inline-flex items-center h-full select-none whitespace-nowrap text-color-500 ml-1">{suffixElement}</span>
      )}
    </div>
  );
});
