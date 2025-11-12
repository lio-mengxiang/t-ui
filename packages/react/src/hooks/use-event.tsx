// copied from
'use client';

// https://github.com/react-component/util/blob/master/src/hooks/useEvent.ts
import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function useEvent<T extends Function>(callback?: T): T {
  const fnRef = useRef<any>(null);
  fnRef.current = callback;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoFn = useCallback<T>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((...args: any) => fnRef.current?.(...args)) as any,
    [],
  );

  return memoFn;
}
