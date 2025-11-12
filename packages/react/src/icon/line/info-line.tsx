import React from 'react';
import { createIcon } from '../createIcon';

export const IconInfoLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  viewBox: '0 0 24 24',
  paths: (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
      <path d="M12 16v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 8h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </>
  ),
});
