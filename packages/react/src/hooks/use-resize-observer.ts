'use client';

import { useEffect } from 'react';

export function useResizeObserver<T extends HTMLElement>(element, callback: (target: T, entry: ResizeObserverEntry) => void) {
  useEffect(() => {
    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);
}
