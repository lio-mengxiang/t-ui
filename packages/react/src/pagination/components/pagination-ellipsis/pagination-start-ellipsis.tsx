'use client';
import React from 'react';
import { PaginationEllipsis } from './pagination-ellipsis';
import { usePaginationInnerContext } from '../../pagination-inner-context';
import type { PaginationEllipsisProps } from '../../interface';

export function PaginationStartEllipsis(props: PaginationEllipsisProps) {
  const { bufferSize, shouldShowPrevEllipsis } = usePaginationInnerContext();
  const jumpStep = bufferSize * 2 + 1;
  return <>{shouldShowPrevEllipsis && <PaginationEllipsis {...props} jumpPage={-jumpStep} />}</>;
}
