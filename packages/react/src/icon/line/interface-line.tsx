import React from 'react';
import { createIcon } from '../createIcon';

export const IconInterfaceLine = createIcon({
  iconProps: { useStrokeCurrentColor: true, useFillCurrentColor: true },
  paths: (
    <>
      <path
        d="M42 18V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V18"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 8C6 6.89543 6.89543 6 8 6H40C41.1046 6 42 6.89543 42 8V18H6V8Z" fill="none" strokeWidth="4" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      />
    </>
  ),
});
