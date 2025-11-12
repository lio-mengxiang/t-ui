import React from 'react';
import { createIcon } from '../createIcon';

export const IconUpLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M13 30L25 18L37 30" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
