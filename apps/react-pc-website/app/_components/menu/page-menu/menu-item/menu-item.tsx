'use client';

import { cs } from '@/_utils';
import { VerticalMenu } from '@t-headless-ui/react';
import React, { useContext } from 'react';

export function MenuItem({ children, className }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const { level } = useContext(VerticalMenu.SubMenuContext);

  return (
    <span className={cs('flex items-center', className)}>
      <div style={{ width: `${(level as number) + 2.4}em` }}></div>
      {children}
    </span>
  );
}
