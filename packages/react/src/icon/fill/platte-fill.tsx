import React from 'react';
import { createIcon } from '../createIcon';

export const IconPlatteFill = createIcon({
  iconProps: { useFillCurrentColor: true },
  viewBox: '0 0 24 24',
  paths: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 3.542-2.869 3.968-5.512 4.36-1.461.216-2.854.423-3.655 1.14-.846.757-.523 1.895-.227 2.94C13.991 21.8 14.332 23 12 23 5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-2.292-.688a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zM14.98 7.876a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zm-4.354-2.063a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zm-5.73 7.563a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125z"
      ></path>
    </>
  ),
});
