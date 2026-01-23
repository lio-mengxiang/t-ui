'use client';

import { cs } from '@/_utils';

export function Paragraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cs('break-all whitespace-normal my-4 text-[14px] text-color-500 leading-8', className)}>{children}</p>;
}
