'use client';

import { cs } from '@/_utils';

export function Block({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cs('my-6 rounded-md border-l-4 border-color-300 bg-color-50 px-4 py-3 text-[14px] text-color-600 leading-8', className)}
    >
      {children}
    </div>
  );
}
