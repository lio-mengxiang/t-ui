import React from 'react';
import { createIcon } from '../createIcon';

export const IconLoadingLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
