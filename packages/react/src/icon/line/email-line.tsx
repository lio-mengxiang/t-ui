import React from 'react';
import { createIcon } from '../createIcon';

export const IconEmailLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M4 39H44V24V9H24H4V24V39Z" fill="none" strokeWidth="4" strokeLinejoin="round" />
      <path d="M4 9L24 24L44 9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 9H4V24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 24V9H24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
