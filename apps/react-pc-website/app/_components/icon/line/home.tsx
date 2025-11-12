import React from 'react';
import { createIcon } from '@t-headless-ui/react';

export const IconHome = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z" fill="none" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 44V34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

IconHome.displayName = 'IconHome';
