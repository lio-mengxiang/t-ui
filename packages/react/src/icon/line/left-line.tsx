import React from 'react';
import { createIcon } from '../createIcon';

export const IconLeftLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M31 36L19 24L31 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
