import React, { useCallback } from 'react';

type PossibleRefs<T> = React.Ref<T> | undefined;

/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
export function useComposedRefs<T>(...refs: PossibleRefs<T>[]) {
  return useCallback((node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.RefObject<T>).current = node;
      }
    });
  }, refs);
}
