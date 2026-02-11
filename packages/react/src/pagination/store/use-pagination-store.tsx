'use client';
import { useEffect } from 'react';
import { useMergeValue } from '../../hooks';
import { DEFAULT_CURRENT } from '../constants';
import { getAdjustPageSize, getAdjustedCurrent, getAllPages, getBufferSize } from '../utils';
import type { PaginationRootProps } from '../interface';

export function usePaginationStore(
  props: Pick<
    PaginationRootProps,
    | 'total'
    | 'pageSize'
    | 'current'
    | 'sizeOptions'
    | 'defaultCurrent'
    | 'defaultPageSize'
    | 'disabled'
    | 'bufferSize'
    | 'onChange'
    | 'pageSizeChangeResetCurrent'
    | 'onPageSizeChange'
  >,
  allProps: PaginationRootProps,
) {
  const {
    total: propTotal,
    pageSize: propPageSize,
    sizeOptions: propSizeOptions,
    defaultPageSize,
    disabled,
    onChange,
    bufferSize: propBufferSize,
    pageSizeChangeResetCurrent,
    onPageSizeChange: propsOnPageSizeChange,
  } = props;

  const [current, setCurrent] = useMergeValue(DEFAULT_CURRENT, {
    defaultValue: props.defaultCurrent,
    value: props.current,
  });

  const [pageSize, setPageSize] = useMergeValue(getAdjustPageSize(propSizeOptions), {
    defaultValue: defaultPageSize,
    value: propPageSize,
  });

  const total = propTotal;
  // 获取所有页码，并且限制如果传入负数，强制返回 0
  const allPages = getAllPages(pageSize, total);
  // current 页与 ... 之间的页码个数(单侧)
  const bufferSize = getBufferSize(propBufferSize, allPages);

  // 如果 pageSize 不在 sizeOptions 中，调整为 sizeOptions 中的第一个
  useEffect(() => {
    const needAdjust = Array.isArray(propSizeOptions) && !propSizeOptions.includes(pageSize);
    if (needAdjust && !('pageSize' in props)) {
      setPageSize(getAdjustPageSize(propSizeOptions));
    }
  }, [propSizeOptions]);

  // if total and pageSize changes, current page will change
  // if current transcend boundary, it will be corrected
  useEffect(() => {
    const newCurrent = getAdjustedCurrent(pageSize, total, current);
    if (newCurrent !== current && !('current' in props)) {
      setCurrent(newCurrent);
    }
  }, [total, current, pageSize]);

  const onPageNumberChange = (pageNumber: number) => {
    if (!('current' in allProps)) {
      setCurrent(pageNumber);
    }
    onChange?.(pageNumber, pageSize);
  };

  const onPageSizeChange = (pageSize) => {
    const allPages = getAllPages(pageSize, total);
    const newState = {
      pageSize,
    } as any;
    if (pageSizeChangeResetCurrent) {
      newState.current = 1;
    } else {
      newState.current = current > allPages ? allPages : current;
    }
    console.log('d ', !('pageSize' in allProps), !('current' in allProps));

    if (!('pageSize' in allProps)) {
      setPageSize(newState.pageSize);
    }

    if (!('current' in allProps) && current !== newState.current) {
      setCurrent(newState.current);
    }

    propsOnPageSizeChange?.(pageSize, newState.current);
    onChange?.(pageSizeChangeResetCurrent ? 1 : newState.current, pageSize);
  };

  return { allPages, current, setCurrent, disabled, bufferSize, onPageNumberChange, pageSize, onPageSizeChange };
}
