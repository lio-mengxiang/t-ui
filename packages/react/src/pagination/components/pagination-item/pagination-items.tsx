'use client';
import React from 'react';
import { PaginationItem } from './pagination-item';
import { usePaginationInnerContext } from '../../pagination-inner-context';
import type { PaginationItemProps } from '../../interface';

export function PaginationItems(props: PaginationItemProps) {
  const { pages } = usePaginationInnerContext();
  return (
    <>
      {pages.map((pageNumber) => (
        <PaginationItem key={pageNumber} pageNum={pageNumber} {...props}>
          {(pageNumber) => <span>{pageNumber}</span>}
        </PaginationItem>
      ))}
    </>
  );
}
