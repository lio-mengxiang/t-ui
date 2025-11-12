import React from 'react';
import { createIcon } from '../createIcon';

export const IconCloseLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M14 14L34 34" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 34L34 14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
