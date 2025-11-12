import { findById } from './findById';
import type { ToastStates } from '../interface';

export function getToastId(state: ToastStates, id: string) {
  return findById(state, id)?.id;
}
