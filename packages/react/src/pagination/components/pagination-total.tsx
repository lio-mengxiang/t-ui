'use client';
import React from 'react';
import type { PaginationTotalProps } from '../interface';
import { usePaginationInnerContext } from '../pagination-inner-context';

export function PaginationTotal({ children, ...rest }: PaginationTotalProps) {
  const { total, current, pageSize, allPages } = usePaginationInnerContext();
  return (
    <div {...rest}>
      {typeof children === 'function' ? children(total, [(current - 1) * pageSize + 1, current * pageSize], allPages) : total}
    </div>
  );
}
