import React from 'react';
import { createIcon } from '../createIcon';

export const IconRightLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M19 12L31 24L19 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
