import React from 'react';
import { createIcon } from '@t-headless-ui/react';

export const IconCode = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M16 13L4 25.4322L16 37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 13L44 25.4322L32 37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 4L21 44" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
});

IconCode.displayName = 'IconCode';
