import React from 'react';
import { createIcon } from '../createIcon';

export const IconErrorLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  viewBox: '0 0 24 24',
  paths: (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
      <line x1="12" x2="12" y1="8" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
      <line x1="12" x2="12.01" y1="16" y2="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
    </>
  ),
});
