import { type JSX } from 'react';
export type Direction = 'top-to-bottom' | 'bottom-to-top';
/**
 * @title Toast
 */
export interface ToastProps {
  /**
   * @zh 自动关闭的时间，单位为 `ms`
   * @en Automatic shutdown time, the unit is `ms`
   * @defaultValue 3
   */
  duration?: number | null;
  /**
   * @zh 当前通知的唯一标识，可以用来更新消息
   * @en The unique identifier of the current notification, which can be used to update the message
   */
  id?: string;
  component: JSX.Element;
  isHovering?: boolean;
  showProgress?: boolean;
}

export interface StoreInstance {
  getState: () => ToastStates;
  subscribe: (listener: any) => () => void;
  add: (noticeProps: ToastProps) => string;
  update: (id: ToastProps['id'], options: ToastProps) => void;
  clearAll: () => void;
  remove: (id: string) => void;
  maxCount: number;
}

export interface ToastStore {
  add: (noticeProps: ToastProps) => string;
  update: (id: ToastProps['id'], options: ToastProps) => void;
  remove: (id: string) => void;
  clearAll: () => void;
}

export interface ToastManagerProps {
  duration?: number;
  /**
   * document.querySelector 选择器，用于指定通知容器的挂载位置
   */
  attach?: string;
  store: StoreInstance;
  direction?: Direction;
  containerProps?: Record<string, any>;
  /**
   * @zh 是否启用堆叠效果
   * @en Whether to enable stack effect
   * @defaultValue false
   */
  stack?: boolean;
}

export type ToastStates = ToastProps[];
