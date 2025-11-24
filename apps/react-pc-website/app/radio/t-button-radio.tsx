import React, { useContext } from 'react';
import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TButtonRadio = ({ children, className, ...rest }: RadioProps) => {
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
      <Indicator>{children}</Indicator>
    </Radio.Root>
  );
};

function Indicator({ children }: { children?: React.ReactNode }) {
  const { checked, disabled, readonly } = useContext(Radio.RadioContext);

  return (
    <div
      className={cs('relative z-1 rounded-md transition-all duration-300 px-4 py-1 text-color-600', {
        'bg-color': checked,
        'text-color-500': checked && disabled,
        'cursor-not-allowed text-color-400': disabled,
        'cursor-default': readonly,
      })}
    >
      {children}
      {/* 选中时渲染共享 layoutId 的指示器，平移到新选项 */}
      {/* {checked && <motion.div layoutId="t-radio-indicator" className="absolute inset-0 rounded-md pointer-events-none bg-color" />} */}
    </div>
  );
}
