'use client';

import React, { PropsWithChildren, forwardRef, MouseEventHandler } from 'react';

import type { ButtonProps } from './interface';

function _Button(props: PropsWithChildren<ButtonProps>, ref: React.Ref<HTMLButtonElement> | undefined) {
  const { children, htmlType = 'button', disabled, loading, onClick, ...restProps } = props;

  const handleClick: MouseEventHandler = (event): void => {
    if (loading || disabled) {
      event?.preventDefault?.();
      return;
    }
    onClick?.(event);
  };

  return (
    <button {...restProps} ref={ref} type={htmlType} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
}

const ForwardRefButton = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(_Button);

export const Button = ForwardRefButton as typeof ForwardRefButton;
