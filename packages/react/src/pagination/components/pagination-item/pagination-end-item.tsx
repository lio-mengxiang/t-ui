'use client';
import React from 'react';
import type { PaginationItemProps } from '../../interface';
import { PaginationItem } from './pagination-item';
import { usePaginationInnerContext } from '../../pagination-inner-context';

export function PaginationEndItem(props: PaginationItemProps) {
  const { allPages, shouldShowLast } = usePaginationInnerContext();
  return <>{shouldShowLast && <PaginationItem pageNum={allPages} {...props} />}</>;
}
