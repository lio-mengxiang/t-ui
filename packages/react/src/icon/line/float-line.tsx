import React from 'react';
import { createIcon } from '../createIcon';

export const IconFloatLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path
        d="M24 40C35.0457 40 44 32.8366 44 24C44 15.1634 35.0457 8 24 8C12.9543 8 4 15.1634 4 24C4 32.8366 12.9543 40 24 40Z"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M24 28C29.5228 28 34 25.3137 34 22C34 18.6863 29.5228 16 24 16C18.4772 16 14 18.6863 14 22C14 25.3137 18.4772 28 24 28Z"
        fill="none"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M24 16V8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 18C32 18 34.625 14 39 14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 18C16 18 14 14 9 14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 27C18 27 12 29 11 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 27C30 27 36.5 29 37 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
