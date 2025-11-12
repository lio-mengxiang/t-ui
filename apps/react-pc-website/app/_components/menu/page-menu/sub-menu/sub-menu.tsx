'use client';

import React, { useContext } from 'react';
import { IconDownLine, IconUpLine, VerticalMenu } from '@t-headless-ui/react';

export function SubMenu({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(VerticalMenu.SubMenuContext);

  return (
    <>
      <span className="flex items-center gap-x-2">{children}</span>
      {isOpen ? <IconDownLine /> : <IconUpLine />}
    </>
  );
}
