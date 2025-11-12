'use client';

import React, { useContext } from 'react';
import { IconRightLine, IconDownLine, VerticalMenu } from '@t-headless-ui/react';

export function CollapseSubMenu({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(VerticalMenu.SubMenuContext);

  return (
    <div className="flex items-center w-full">
      <span className="mr-2">{isOpen ? <IconDownLine /> : <IconRightLine />}</span>
      <span className="flex items-center gap-x-2">{children}</span>
    </div>
  );
}
