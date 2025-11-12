import { MouseEvent, KeyboardEvent, FocusEvent } from 'react';

export interface PopoverProps {
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?:
    | 'left'
    | 'right'
    | 'bottom'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  strategy?: 'absolute' | 'fixed';
  /**
   * 偏移量
   */
  offsetSkidding?: number;
  offsetDistance?: number;
  /**
   * 触发浮层出现的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus' | 'mousedown' | 'context-menu';
  /**
   * 是否显示浮层
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发
   */
  onVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export interface PopupVisibleChangeContext {
  e?: PopupTriggerEvent;
  trigger?: PopupTriggerSource;
}

export type PopupTriggerEvent = MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;

export type PopupTriggerSource =
  | 'document'
  | 'trigger-element-click'
  | 'trigger-element-hover'
  | 'trigger-element-blur'
  | 'trigger-element-focus'
  | 'trigger-element-mousedown'
  | 'context-menu'
  | 'keydown-esc';
