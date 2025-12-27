import { useRef, useEffect, DependencyList } from 'react';

export function useUpdate(fn: () => void, deps: DependencyList = []) {
  const isDidMount = useRef(false);

  useEffect(() => {
    if (isDidMount.current) {
      fn();
    } else {
      isDidMount.current = true;
    }
  }, deps);
}
