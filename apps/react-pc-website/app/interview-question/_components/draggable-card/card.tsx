'use client';

import { DraggableItem } from './item';
import { cs } from '../../_utils';
import { CardContent, CardTitle } from '../card';

export function DraggableCard({
  children,
  className,
  defaultPosition,
  title = 'Title',
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  defaultPosition?: { x: number; y: number };
}) {
  return (
    <DraggableItem
      className={cs('border border-[var(--color-border-grey)] p-1 pt-0 bg-[var(--color-black)]', className)}
      defaultPosition={defaultPosition}
      {...rest}
    >
      <CardTitle title={title} />
      <CardContent>{children}</CardContent>
    </DraggableItem>
  );
}
