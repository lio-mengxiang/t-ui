import React from 'react';

/** 坐标位置 */
export interface Position {
  x: number;
  y: number;
}

/** 元素尺寸 */
export interface Size {
  width: number | string;
  height: number | string;
}

/** 8 个拉伸方向：n(北), s(南), w(西), e(东), 以及四个角 */
export type ResizeDirection = 'n' | 's' | 'w' | 'e' | 'ne' | 'nw' | 'se' | 'sw';

/** 组件 Props 定义 */
export interface DraggableItemProps {
  /** 子节点 */
  children: React.ReactNode;
  /** 初始位置 */
  defaultPosition?: Position;
  /** 初始尺寸 */
  defaultSize?: Size;
  /** 最小宽度限制，默认 50 */
  minWidth?: number;
  /** 最小高度限制，默认 50 */
  minHeight?: number;
  /** 网格吸附步长 (预留) */
  grid?: number;
  /** 容器类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: React.CSSProperties;
  /** 拖拽时的类名 */
  onDragClassName?: string;
  /** 默认非拖拽状态类名 */
  defaultDragClassName?: string;
  /** 拖拽中的回调 */
  onDrag?: (pos: Position) => void;
  /** 缩放中的回调 */
  onResize?: (size: Size, pos: Position) => void;
  /** 外部传入的 ref */
  ref?: React.Ref<HTMLDivElement>;
}
