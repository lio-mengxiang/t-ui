import { cs } from '@/_utils';
import { RadioProps, Radio } from '@t-headless-ui/react';
import React from 'react';

export function CardExample() {
  return (
    <Radio.Group defaultValue="3" className="flex gap-4 flex-wrap ml-2">
      <TCardRadio value="1" className="flex flex-col justify-center">
        <span>😡</span>
        <span className="text-[10px] font-medium">Angry</span>
      </TCardRadio>
      <TCardRadio value="2" className="flex flex-col justify-center">
        <span>😐</span>
        <span className="text-[10px] font-medium">Neutral</span>
      </TCardRadio>
      <TCardRadio value="3" className="flex flex-col justify-center">
        <span>😊</span>
        <span className="text-[10px] font-medium">Happy</span>
      </TCardRadio>
      <TCardRadio value="4" className="flex flex-col justify-center">
        <span>😍</span>
        <span className="text-[10px] font-medium">Love it</span>
      </TCardRadio>
    </Radio.Group>
  );
}
const TCardRadio = ({ children, className, ...rest }: RadioProps) => {
  return (
    <Radio.Root
      className={cs(
        'relative flex cursor-pointer items-center text-base group size-14 shadow-sm border border-color rounded-lg transition-all duration-200',
        '[&_>input[type="radio"]]:absolute [&_>input[type="radio"]]:left-0 [&_>input[type="radio"]]:top-0 [&_>input[type="radio"]]:opacity-0, [&_>input[type="radio"]]:w-0 [&_>input[type="radio"]]:h-0',
        'hover:scale-105',
        '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-50',
        '[&[aria-readonly="true"]]:cursor-default',
        '[&[aria-checked="true"]]:border-color-800 [&[aria-checked="true"]]:bg-color-50',
        className,
      )}
      {...rest}
    >
      {children}
    </Radio.Root>
  );
};
