import React from 'react';
import { createIcon } from '../createIcon';

export const IconNineGridLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <rect x="5" y="5" width="38" height="38" rx="2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18H43" strokeWidth="4" strokeLinecap="round" />
      <path d="M5 30H43" strokeWidth="4" strokeLinecap="round" />
      <path d="M17 5V43" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 5V43" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
});
