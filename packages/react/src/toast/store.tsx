import { getId, findToast, getToastId } from './utils';
// types
import type { ToastStates, ToastProps } from './interface';
// state
export function createToastStore({ maxCount = 6 }: { maxCount?: number } = {}) {
  let state: ToastStates = [];
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: ToastStates) => ToastStates) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };

  return {
    getState: () => state,

    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => []);
        listeners.delete(listener);
      };
    },

    add: (noticeProps: ToastProps) => {
      const id = getId(noticeProps);
      setState((preState: ToastStates) => {
        if (noticeProps?.id) {
          const isExist = getToastId(preState, noticeProps.id);
          if (isExist) return preState;
        }

        const toasts = [{ ...noticeProps, id }, ...(preState ?? [])];

        if (maxCount > 0 && toasts.length > maxCount) {
          return toasts.slice(0, maxCount);
        }

        return toasts;
      });
      return noticeProps?.id ? noticeProps?.id : id;
    },

    update: (id: ToastProps['id'], options: ToastProps) => {
      if (!id) return;

      setState((preState) => {
        const nextState = [...preState];
        const { index } = findToast(nextState, id);

        if (index !== -1) {
          nextState[index] = {
            ...nextState[index],
            ...options,
          };
        }

        return nextState;
      });
    },

    clearAll: () => {
      setState(() => []);
    },

    remove: (id: string) => {
      setState((prevState) => {
        const isExist = getToastId(prevState, id);
        if (!isExist) return prevState;
        return prevState.filter((notice) => notice.id !== id);
      });
    },
    maxCount,
  };
}
