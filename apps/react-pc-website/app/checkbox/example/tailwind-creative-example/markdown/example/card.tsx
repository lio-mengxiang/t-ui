import { cs } from '@/_utils';
import { CheckboxProps, Checkbox } from '@t-headless-ui/react';
import React from 'react';

export function CardExample() {
  return (
    <Checkbox.Group defaultValue={['1', '2']} className="flex gap-4 flex-wrap ml-2">
      <TCardCheckbox value="1" className="flex flex-col justify-center">
        <span>😡</span>
        <span className="text-[10px] font-medium">Angry</span>
      </TCardCheckbox>
      <TCardCheckbox value="2" className="flex flex-col justify-center">
        <span>😐</span>
        <span className="text-[10px] font-medium">Neutral</span>
      </TCardCheckbox>
      <TCardCheckbox value="3" className="flex flex-col justify-center">
        <span>😊</span>
        <span className="text-[10px] font-medium">Happy</span>
      </TCardCheckbox>
      <TCardCheckbox value="4" className="flex flex-col justify-center">
        <span>😍</span>
        <span className="text-[10px] font-medium">Love it</span>
      </TCardCheckbox>
    </Checkbox.Group>
  );
}
const TCardCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
  return (
    <Checkbox.Root
      className={cs(
        'relative flex cursor-pointer items-center text-base group size-14 shadow-sm border border-color rounded-lg transition-all duration-200',
        '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
        'hover:scale-105',
        '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-50',
        '[&[aria-readonly="true"]]:cursor-default',
        '[&[aria-checked="true"]]:border-color-800 [&[aria-checked="true"]]:bg-color-50',
        className,
      )}
      {...rest}
    >
      {children}
    </Checkbox.Root>
  );
};
