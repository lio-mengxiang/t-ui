'use client';

import React, { type ReactNode } from 'react';
import { useSelectInnerContext } from '../inner-context';
import type { OptionData } from '../interface';

export function SelectList({ children }: { className?: string; children?: (props: OptionData, index: number) => ReactNode }) {
  const {
    childrenList, // 这是经过 filterOption 筛选后的列表
  } = useSelectInnerContext();

  return (
    <>
      {childrenList.length > 0
        ? childrenList.map((item: OptionData, index: number) => (typeof children === 'function' ? children(item, index) : children))
        : null}
    </>
  );
}
