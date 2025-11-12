import React from 'react';
import { createIcon } from '../createIcon';

export const IconHorizontalGapLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <rect x="7" y="8" width="6" height="32" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="21" y="8" width="6" height="32" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="35" y="8" width="6" height="32" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
