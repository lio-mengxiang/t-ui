'use client';
import React, { type CSSProperties, type ReactNode } from 'react';
import { Enter } from '../../../utils/keycode';
import { usePaginationInnerContext } from '../../pagination-inner-context';

export interface PaginationInnerItemProps {
  className?: string;
  style?: CSSProperties;
  pageNum: number;
  children?: ReactNode | ((page: number, { isActive, disabled }: { isActive: boolean; disabled: boolean }) => ReactNode);
}

export function PaginationItem(props: PaginationInnerItemProps) {
  const { current, disabled, onPageNumberChange } = usePaginationInnerContext();
  const { className, style, children, pageNum } = props;

  const isActive = current === pageNum;

  // event
  const onClick = (e) => {
    e.stopPropagation();
    if (!disabled) onPageNumberChange?.(pageNum);
  };

  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === Enter.code) onClick(e);
      }}
      aria-disabled={disabled}
      aria-current={isActive}
    >
      {typeof children === 'function' ? children(pageNum, { isActive, disabled }) : children}
    </div>
  );
}
