import { ToastProps } from '../interface';

let counter = 0;
export function getId(noticeProps: ToastProps) {
  if (noticeProps.id) {
    return noticeProps.id;
  }
  // 循环计数器 0-100
  counter = (counter + 1) % 1001;
  return Date.now().toString(36) + Math.random().toString(36).slice(2) + counter;
}
