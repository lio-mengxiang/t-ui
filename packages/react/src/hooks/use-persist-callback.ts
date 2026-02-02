'use client';

import { useRef, useCallback } from 'react';

export function usePersistCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef<T>(fn);

  // 每次渲染时更新 ref.current，确保拿到的是包含最新 state/props 的函数
  ref.current = fn;

  // 1. 依赖项必须为空数组 []，这样返回的函数引用就永远不会变
  // 2. 使用 as T 进行类型断言，解决参数透传的类型匹配问题
  return useCallback(
    ((...args: Parameters<T>) => {
      return ref.current(...args);
    }) as T,
    [],
  );
}
