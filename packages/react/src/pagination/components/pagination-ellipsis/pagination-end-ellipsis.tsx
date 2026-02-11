'use client';
import React from 'react';
import { PaginationEllipsis } from './pagination-ellipsis';
import { usePaginationInnerContext } from '../../pagination-inner-context';
import type { PaginationEllipsisProps } from '../../interface';

export function PaginationEndEllipsis(props: PaginationEllipsisProps) {
  const { bufferSize, shouldShowNextEllipsis } = usePaginationInnerContext();
  const jumpStep = bufferSize * 2 + 1;
  return <>{shouldShowNextEllipsis && <PaginationEllipsis {...props} jumpPage={jumpStep} />}</>;
}
