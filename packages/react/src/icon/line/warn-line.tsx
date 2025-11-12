import React from 'react';
import { createIcon } from '../createIcon';

export const IconWarningLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  viewBox: '0 0 24 24',
  paths: (
    <>
      <path
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M12 9v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </>
  ),
});
