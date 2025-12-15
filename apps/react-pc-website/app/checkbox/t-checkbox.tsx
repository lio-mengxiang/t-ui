import React, { useContext } from 'react';
import { Checkbox, CheckboxProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
  return (
    <Checkbox.Root
      className={cs(
        'relative flex cursor-pointer items-center text-base group',
        '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0 [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
        '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400',
        '[&[aria-readonly="true"]]:cursor-default',
        className,
      )}
      {...rest}
    >
      <Indicator />
      <div className="ml-2">{children}</div>
    </Checkbox.Root>
  );
};

function Indicator() {
  const { checked, disabled, readonly, indeterminate } = useContext(Checkbox.CheckboxContext);

  return (
    <div
      className={cs(
        'relative border border-color border-solid rounded-md w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300 flex justify-center items-center',
        'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:h-[16px] after:w-[16px] after:rounded-md after:bg-none',
        'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[3px] before:w-[8px] before:rounded-[1px] before:bg-none',
        {
          'after:bg-color-reverse': checked && !disabled,
          'after:bg-color-100': checked && disabled,
          'before:bg-color-reverse': indeterminate && !disabled,
          'before:bg-zinc-300': indeterminate && disabled,
          'cursor-not-allowed': disabled,
          'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
          'cursor-default': readonly,
        },
      )}
    >
      <Checkbox.IconCheck
        className={cs('text-transparent relative scale-90 origin-center transition-all duration-300 w-3 h-3 z-[1]', {
          'text-color-reverse': checked && !disabled,
          'text-zinc-300': checked && disabled,
        })}
      />
    </div>
  );
}
