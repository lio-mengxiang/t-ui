'use client';
import React, { CSSProperties, ReactNode } from 'react';
import { usePaginationInnerContext } from '../../pagination-inner-context';

export interface PaginationInnerEllipsisProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  jumpPage: number;
}

export function PaginationEllipsis(props: PaginationInnerEllipsisProps) {
  const { onPageNumberChange, allPages, current, disabled } = usePaginationInnerContext();
  const { jumpPage, style, className, children } = props;

  const onClick = () => {
    // newPage don't cross the boundary
    if (!disabled) {
      onPageNumberChange?.(Math.min(allPages, Math.max(1, current + jumpPage)));
    }
  };

  return (
    <div style={style} className={className} onClick={onClick} aria-disabled={disabled}>
      {children}
    </div>
  );
}
