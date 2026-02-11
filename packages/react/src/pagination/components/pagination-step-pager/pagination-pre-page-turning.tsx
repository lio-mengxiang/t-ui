import React from 'react';
import { PaginationPageTurning } from './pagination-page-turning';
import { PREV } from '../../constants';
import type { PaginationPageTurningProps } from '../../interface';

export function PaginationPrevious(props: PaginationPageTurningProps) {
  return <PaginationPageTurning {...props} type={PREV} />;
}
