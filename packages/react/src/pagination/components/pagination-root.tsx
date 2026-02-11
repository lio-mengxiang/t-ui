'use client';
import React from 'react';
import { PaginationRootProps } from '../interface';
import { PaginationInnerContext } from '../pagination-inner-context';
import { usePaginationStore } from '../store';
import { usePagination } from '../hooks';

export const PaginationRoot = (props: PaginationRootProps) => {
  const {
    current: propCurrent,
    pageSize: propPageSize,
    total: propTotal = 0,
    defaultCurrent,
    defaultPageSize,
    disabled: propDisabled,
    hideOnSinglePage,
    sizeOptions: propSizeOptions = [10, 20, 50],
    bufferSize: propBufferSize = 2,
    onChange,
    onPageSizeChange: propsOnPageSizeChange,
    pageSizeChangeResetCurrent = true,
    children,
    ...rest
  } = props;

  const { allPages, current, bufferSize, disabled, onPageNumberChange, pageSize, onPageSizeChange } = usePaginationStore(
    {
      total: propTotal,
      pageSize: propPageSize,
      current: propCurrent,
      sizeOptions: propSizeOptions,
      defaultCurrent,
      defaultPageSize,
      disabled: propDisabled,
      bufferSize: propBufferSize,
      onChange,
      pageSizeChangeResetCurrent,
      onPageSizeChange: propsOnPageSizeChange,
    },
    props,
  );

  const { pages, shouldShowFirst, shouldShowPrevEllipsis, shouldShowNextEllipsis, shouldShowLast } = usePagination({
    allPages,
    current,
    bufferSize,
  });

  if (hideOnSinglePage && allPages <= 1) {
    return null;
  }

  return (
    <PaginationInnerContext.Provider
      value={{
        allPages,
        current,
        bufferSize,
        disabled,
        onPageNumberChange,
        pageSize,
        onPageSizeChange,
        pageSizeChangeResetCurrent,
        total: propTotal,
        pages,
        shouldShowFirst,
        shouldShowPrevEllipsis,
        shouldShowNextEllipsis,
        shouldShowLast,
        sizeOptions: propSizeOptions,
      }}
    >
      <div aria-label="pagination" aria-disabled={disabled} role="navigation" {...rest}>
        {children}
      </div>
    </PaginationInnerContext.Provider>
  );
};
