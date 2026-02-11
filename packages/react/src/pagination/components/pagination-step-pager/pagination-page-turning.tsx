'use client';
import React, { CSSProperties, ReactNode } from 'react';
import { Enter } from '../../../utils/keycode';
import { PREV } from '../../constants';
import { usePaginationInnerContext } from '../../pagination-inner-context';

export interface PaginationStepPagerProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  type: 'prev' | 'next';
}

export function PaginationPageTurning(props: PaginationStepPagerProps) {
  const { allPages, disabled, current, onPageNumberChange } = usePaginationInnerContext();
  const { type, children, className, style } = props;

  let _disabled = false;
  if (allPages === 0) {
    _disabled = true;
  } else if (type === PREV) {
    _disabled = current <= 1; // current ===0 || current===1
  } else {
    _disabled = current === allPages;
  }
  const innerDisabled = disabled || _disabled;
  let nextPage = current + (type === PREV ? -1 : 1);
  nextPage = Math.max(0, Math.min(allPages, nextPage));

  const onClick = () => {
    if (innerDisabled) {
      return;
    }
    onPageNumberChange?.(nextPage);
  };

  return (
    <div
      onClick={onClick}
      tabIndex={innerDisabled ? -1 : 0}
      onKeyDown={(e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === Enter.code) onClick();
      }}
      aria-disabled={innerDisabled}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
