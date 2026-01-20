'use client';

import { cs } from '../../_utils';
import { CardContent, CardTitle } from '../card';
import { DraggableItemProps } from './interface';
import { DraggableItem2 } from './item2';

export function DraggableCard2({ children, className, title = 'Title', ...rest }: DraggableItemProps & { title?: string }) {
  return (
    <DraggableItem2
      className={cs('border border-[var(--color-border-grey)] p-1 pt-0 bg-[var(--color-black-70)] overflow-hidden', className)}
      {...rest}
    >
      <CardTitle title={title} />
      <CardContent>{children}</CardContent>
    </DraggableItem2>
  );
}
