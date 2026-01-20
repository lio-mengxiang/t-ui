'use client';

import { cs } from '@/_utils';

export function Link(props: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      className={cs(
        'text-blue-600 underline underline-offset-2 hover:text-blue-800 hover:underline transition-colors duration-200 cursor-pointer',
        props.className,
      )}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
