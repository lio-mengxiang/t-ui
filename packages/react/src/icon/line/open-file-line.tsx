import React from 'react';
import { createIcon } from '../createIcon';

export const IconOpenFileLine = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  paths: (
    <>
      <path
        d="M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 41L44 21H8.8125L4 41H40Z" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
