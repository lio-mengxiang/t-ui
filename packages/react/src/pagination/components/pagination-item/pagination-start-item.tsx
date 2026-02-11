'use client';
import React from 'react';
import type { PaginationItemProps } from '../../interface';
import { PaginationItem } from './pagination-item';
import { usePaginationInnerContext } from '../../pagination-inner-context';

export function PaginationStartItem(props: PaginationItemProps) {
  const { shouldShowFirst } = usePaginationInnerContext();
  return <>{shouldShowFirst && <PaginationItem pageNum={1} {...props} />}</>;
}
