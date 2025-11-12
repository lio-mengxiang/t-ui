'use client';

import React from 'react';

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-normal inline-block whitespace-nowrap bg-color-100 text-color-500 rounded-sm px-2 py-0.5 text-xs">
      {children}
    </code>
  );
}
