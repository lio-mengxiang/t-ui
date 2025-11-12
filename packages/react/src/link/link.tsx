'use client';

import React, { type PropsWithChildren, forwardRef, MouseEventHandler } from 'react';

import type { LinkProps } from './interface';

function _Link(props: PropsWithChildren<LinkProps>, ref: React.Ref<HTMLAnchorElement> | undefined) {
  const { children, disabled, onClick, ...restProps } = props;

  const handleClick: MouseEventHandler = (event): void => {
    if (disabled) {
      event?.preventDefault?.();
      return;
    }

    onClick?.(event);
  };

  return (
    <a {...restProps} ref={ref} onClick={handleClick}>
      {children}
    </a>
  );
}

const ForwardRefLink = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(_Link);

export const Link = ForwardRefLink as typeof ForwardRefLink;
