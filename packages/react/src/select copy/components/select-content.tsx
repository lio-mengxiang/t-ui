'use client';

import React from 'react';
import { Popover } from '../../popover';
import type { SelectContentProps } from '../interface';
import { useSelectInnerContext } from '../inner-context';

export function SelectContent({ className, attach, children, style }: SelectContentProps) {
  const { hotkeyHandler, refSelectView } = useSelectInnerContext();

  return (
    <Popover.Content attach={attach} getStyle={() => ({ width: refSelectView?.current?.dom?.offsetWidth, boxSizing: 'border-box' })}>
      <div
        className={className}
        style={style}
        onKeyDown={hotkeyHandler} // 防止点击列表导致 input 失焦
        onMouseDown={(e) => e?.stopPropagation()} // 防止点击列表导致 input 失焦
      >
        {children}
      </div>
    </Popover.Content>
  );
}
