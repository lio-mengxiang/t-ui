'use client';

import { useEffect } from 'react';

export function useMutationObserver<T extends HTMLElement>(
  element: T | null,
  callback: (target: T, mutations: MutationRecord[]) => void,
  options: MutationObserverInit = {
    childList: true,
    attributes: true,
    subtree: true,
  },
) {
  useEffect(() => {
    if (!element) return;

    const observer = new MutationObserver((mutations) => {
      callback(element, mutations);
    });

    observer.observe(element, options);

    return () => {
      observer.disconnect();
    };
  }, [element, callback, options]);
}
