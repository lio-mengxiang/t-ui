'use client';

import { type ComponentState, type PropsWithoutRef, useEffect, useRef } from 'react';

export function usePrevious<T>(value: PropsWithoutRef<T> | ComponentState) {
  const ref = useRef(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
