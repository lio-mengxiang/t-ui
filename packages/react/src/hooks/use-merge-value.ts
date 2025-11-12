'use client';
// thx arco.design
import React, { useState, useEffect, useRef } from 'react';
import { isUndefined } from '../utils';
import { usePrevious } from './use-previous';

export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  },
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);
  const prevPropsValue = usePrevious(props?.value);

  const [stateValue, setStateValue] = useState<T>(
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue,
  );

  // 受控转为非受控的时候，需要做转换处理
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (value === undefined && prevPropsValue !== value) {
      setStateValue(value);
    }
  }, [value]);

  const mergedValue = isUndefined(value) ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
}
