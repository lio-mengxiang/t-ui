import React from 'react';
import { createIcon } from '../createIcon';

export const IconPlusLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M24.0605 10L24.0239 38" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 24L38 24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
