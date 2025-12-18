import React from 'react';
import { createIcon } from '../createIcon';

export const IconSearchFileLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path
        d="M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 12L31 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 20L31 20" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 28H23" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z"
        fill="none"
      />
      <path
        d="M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
