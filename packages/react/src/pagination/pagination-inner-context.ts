'use client';

import { createContext, useContext } from 'react';
import type { PaginationRootProps } from './interface';

interface PaginationInnerContextValue {
  allPages: number;
  current: PaginationRootProps['current'];
  total: PaginationRootProps['total'];
  bufferSize: PaginationRootProps['bufferSize'];
  disabled: PaginationRootProps['disabled'];
  onPageNumberChange: (pageNumber: number) => void;
  pageSize: PaginationRootProps['pageSize'];
  onPageSizeChange: PaginationRootProps['onPageSizeChange'];
  pageSizeChangeResetCurrent: PaginationRootProps['pageSizeChangeResetCurrent'];
  pages: number[];
  shouldShowFirst: boolean;
  shouldShowPrevEllipsis: boolean;
  shouldShowNextEllipsis: boolean;
  shouldShowLast: boolean;
  sizeOptions: PaginationRootProps['sizeOptions'];
}

export const PaginationInnerContext = createContext<PaginationInnerContextValue | null>(null);

export const usePaginationInnerContext = (): PaginationInnerContextValue => {
  const context = useContext(PaginationInnerContext);
  if (!context) {
    throw new Error('Pagination components must be used within <Pagination.Root>');
  }
  return context;
};
