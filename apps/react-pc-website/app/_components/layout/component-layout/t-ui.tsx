'use client';
import React from 'react';
import { IconTLogo } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';
import { cs } from '@/_utils';

export function TUI({ logoClassName, textClassName }: { logoClassName?: string; textClassName?: string }) {
  const router = useRouter();
  return (
    <div className="text-sm flex cursor-pointer items-center" onClick={() => router.push('/')}>
      <IconTLogo className={cs('text-4xl', logoClassName)} />
      <span className={cs('text-xl mt-[6px] text-nowrap', textClassName)}>
        headless <span className="text-primary-hover dark:text-[#4cc3fa]">ui</span>
      </span>
    </div>
  );
}
