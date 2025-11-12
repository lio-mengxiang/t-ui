import type { ToastProps } from '../interface';

export const findById = (arr: ToastProps[], id: string) => arr.find((item) => item.id === id);
