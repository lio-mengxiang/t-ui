import React from 'react';
import { createIcon } from '../createIcon';

export const IconClickLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M24 4V12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.1421 9.85789L32.4853 15.5147" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.85787 38.1421L15.5147 32.4853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 24H12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.85795 9.85787L15.5148 15.5147" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
