import { useCallback } from "react";

type PossibleRef<T> =
  | ((instance: T | null) => void)
  | { current: T | null }
  | null
  | undefined;

// 把多个 ref 合并成一个 callback ref
export function useMergeRefs<T>(...refs: PossibleRef<T>[]) {
  return useCallback(
    (node: T | null) => {
      for (const ref of refs) {
        if (!ref) continue;
        if (typeof ref === "function") {
          ref(node);
        } else {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...refs] // ref 本身变化时更新
  );
}
