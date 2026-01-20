'use client';

import { cs } from '@/_utils';

export function Paragraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cs('leading-8 break-all whitespace-normal mb-8 mt-8', className)}>{children}</p>;
}
