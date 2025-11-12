import React from 'react';
import { createIcon } from '../createIcon';

export const IconArrowLeftLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path d="M5.79889 24H41.7989" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.7988 36L5.79883 24L17.7988 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
