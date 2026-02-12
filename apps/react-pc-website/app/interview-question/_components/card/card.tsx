import { cs } from '@/_utils';
import { ReactNode } from 'react';

export function CardContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cs('border border-[var(--color-border-grey)] bg-[var(--color-black-70)]', className)}>{children}</div>;
}

export function CardTitle({ title }: { title: ReactNode }) {
  return (
    <div className="flex h-8 items-center justify-between gap-4 px-3">
      <div className="truncate font-mono flex">
        <h2>{title}</h2>
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cs(
        'relative flex h-[calc(100%-32px)] flex-col gap-2 rounded-sm p-2 mx-2 border border-[var(--color-border-grey)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
