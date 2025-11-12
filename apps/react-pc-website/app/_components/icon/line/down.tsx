import React from 'react';
import { createIcon } from '@t-headless-ui/react';

export const IconDown = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M36 18L24 30L12 18" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

IconDown.displayName = 'IconDown';
