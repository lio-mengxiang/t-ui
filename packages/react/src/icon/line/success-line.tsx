import React from 'react';
import { createIcon } from '../createIcon';

export const IconSuccessLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  viewBox: '0 0 24 24',
  paths: (
    <>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="m9 11 3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </>
  ),
});
