'use client';

import React, { useMemo } from 'react';

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

export function assignRef<T = any>(ref: ReactRef<T> | null | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    ref.current = value;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function mergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  return useMemo(() => mergeRefs(...refs), refs);
}
