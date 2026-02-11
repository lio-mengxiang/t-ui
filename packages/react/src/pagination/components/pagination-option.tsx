import React from 'react';
import { usePaginationInnerContext } from '../pagination-inner-context';
import type { PaginationOptionProps } from '../interface';

export function PaginationOption({ children, ...rest }: PaginationOptionProps) {
  const { disabled, pageSize, sizeOptions, onPageSizeChange } = usePaginationInnerContext();

  return <div {...rest}>{typeof children === 'function' ? children({ sizeOptions, pageSize, disabled, onPageSizeChange }) : children}</div>;
}
