'use client';

import { useEffect, useState } from 'react';

export function useStateWithPromise<T>(defaultVal: T): [T, (updater: T) => Promise<T>] {
  const [state, setState] = useState({
    value: defaultVal,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve: (value: T) => {},
  });

  useEffect(() => {
    state.resolve(state.value);
  }, [state]);

  return [
    state.value,
    (updater: T) =>
      new Promise((resolve) => {
        setState((prevState) => {
          let nextVal = updater;
          if (typeof updater === 'function') {
            nextVal = updater(prevState.value);
          }
          return {
            value: nextVal,
            resolve,
          };
        });
      }),
  ];
}
