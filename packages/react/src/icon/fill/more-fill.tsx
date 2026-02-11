import React from 'react';
import { createIcon } from '../createIcon';

export const IconMoreFill = createIcon({
  iconProps: { useFillCurrentColor: true },
  paths: (
    <>
      <circle cx="12" cy="24" r="3" />
      <circle cx="24" cy="24" r="3" />
      <circle cx="36" cy="24" r="3" />
    </>
  ),
});
