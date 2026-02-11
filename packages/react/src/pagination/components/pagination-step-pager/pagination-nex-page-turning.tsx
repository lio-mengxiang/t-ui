import React from 'react';
import { PaginationPageTurning } from './pagination-page-turning';
import { NEXT } from '../../constants';
import type { PaginationPageTurningProps } from '../../interface';

export function PaginationNext(props: PaginationPageTurningProps) {
  return <PaginationPageTurning {...props} type={NEXT} />;
}
