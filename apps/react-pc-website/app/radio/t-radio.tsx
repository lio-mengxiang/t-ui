import React, { useContext } from 'react';
import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TRadio = ({ children, className, ...rest }: RadioProps) => {
  return (
    <Radio.Root
      className={cs(
        'relative flex cursor-pointer items-center text-base group',
        '[&_>input[type="radio"]]:absolute [&_>input[type="radio"]]:left-0 [&_>input[type="radio"]]:top-0 [&_>input[type="radio"]]:opacity-0, [&_>input[type="radio"]]:w-0 [&_>input[type="radio"]]:h-0',
        '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400',
        '[&[aria-readonly="true"]]:cursor-default',
        className,
      )}
      {...rest}
    >
      <Indicator />
      <div className="ml-2">{children}</div>
    </Radio.Root>
  );
};

function Indicator() {
  const { checked, disabled, readonly } = useContext(Radio.RadioContext);

  return (
    <div
      className={cs(
        'relative border border-color border-solid rounded-full w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300',
        'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:bg-none',
        {
          'after:bg-color-800': checked && !disabled,
          'after:bg-color-200': checked && disabled,
          'cursor-not-allowed': disabled,
          'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
          'cursor-default': readonly,
        },
      )}
    ></div>
  );
}
