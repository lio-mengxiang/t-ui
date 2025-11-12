import React from 'react';
import { createIcon } from '../createIcon';

export const IconMessageLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21H25.0025" strokeWidth="4" strokeLinecap="round" />
      <path d="M33.001 21H34.9999" strokeWidth="4" strokeLinecap="round" />
      <path d="M13.001 21H14.9999" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
});
