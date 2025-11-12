import type { ToastStates } from '../interface';

export function findToast(state: ToastStates, id: string) {
  const index = state.findIndex((toast) => toast.id === id);

  return {
    index,
  };
}
