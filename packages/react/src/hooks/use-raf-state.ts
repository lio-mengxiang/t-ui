import { useCallback, useEffect, useRef, useState } from 'react';

function useRafState<S>(initialState?: S | (() => S)) {
  const ref = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(ref.current);

    ref.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useEffect(() => {
    cancelAnimationFrame(ref.current);
  }, []);

  return [state, setRafState] as const;
}

export { useRafState };
