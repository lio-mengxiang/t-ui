'use client';

import React from 'react';
import { Popover } from '../../popover';
import type { SelectContentProps } from '../interface';
import { useSelectInnerContext } from '../inner-context';

export function SelectContent({ className, attach, children, style, wrapperClassName }: SelectContentProps) {
  const { hotkeyHandler, refSelectView, setValueActive } = useSelectInnerContext();

  return (
    <Popover.Content
      attach={attach}
      getStyle={() => ({ width: refSelectView?.current?.dom?.offsetWidth, boxSizing: 'border-box' })}
      wrapperClassName={wrapperClassName}
    >
      <div
        className={className}
        style={style}
        onKeyDown={hotkeyHandler} // 防止点击列表导致 input 失焦
        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
        }} // 防止点击列表导致 input 失焦
        onMouseLeave={() => setValueActive(undefined)}
      >
        {children}
      </div>
    </Popover.Content>
  );
}
