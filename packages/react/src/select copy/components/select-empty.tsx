'use client';

import React from 'react';
import { useSelectInnerContext } from '../inner-context';
import type { SelectEmptyProps } from '../interface';

export function SelectEmpty({ children, ...rest }: SelectEmptyProps) {
  const {
    childrenList, // 这是经过 filterOption 筛选后的列表
  } = useSelectInnerContext();

  return <>{childrenList.length > 0 ? null : <div {...rest}>{children}</div>}</>;
}
