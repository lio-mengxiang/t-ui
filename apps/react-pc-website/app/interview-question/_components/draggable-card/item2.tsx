'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMergeRefs } from '../../_hooks';
import { cs } from '../../_utils';
import { DraggableItemProps } from './interface';

type ResizeDirection = 'n' | 's' | 'w' | 'e' | 'ne' | 'nw' | 'se' | 'sw';
type SizeState = { width: number | string; height: number | string };

export const DraggableItem2: React.FC<DraggableItemProps> = ({
  children,
  defaultPosition = { x: 0, y: 0 },
  minWidth = 50,
  minHeight = 50,
  className,
  style,
  onDrag,
  onResize,
  onDragClassName,
  defaultDragClassName,
  ref: itemRef,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(defaultPosition);
  const [size, setSize] = useState<Partial<SizeState>>({});
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    setPos(defaultPosition);
  }, [defaultPosition.x, defaultPosition.y]);

  // ===== 拖拽逻辑 =====
  function startDrag(clientX: number, clientY: number) {
    setDragging(true);
    const originX = pos.x;
    const originY = pos.y;
    const startX = clientX;
    const startY = clientY;

    const handleMove = (e: MouseEvent) => {
      const nextPos = {
        x: originX + (e.clientX - startX),
        y: originY + (e.clientY - startY),
      };
      setPos(nextPos);
      onDrag?.(nextPos);
    };

    const handleUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }

  function startResize(e: React.MouseEvent, direction: ResizeDirection) {
    e.stopPropagation();
    e.preventDefault();

    const element = ref.current;
    if (!element) return;

    const parentElement = element.offsetParent as HTMLElement;
    if (!parentElement) return;

    const bounds = element.getBoundingClientRect();

    setResizing(true);

    const startMouseX = e.clientX;
    const startMouseY = e.clientY;

    // 记录初始的像素尺寸和位置快照
    const startWidth = bounds.width;
    const startHeight = bounds.height;
    const startPosX = pos.x;
    const startPosY = pos.y;

    const isNorth = direction.includes('n');
    const isSouth = direction.includes('s');
    const isWest = direction.includes('w');
    const isEast = direction.includes('e');

    const handleMove = (ev: MouseEvent) => {
      ev.preventDefault();

      const deltaX = ev.clientX - startMouseX;
      const deltaY = ev.clientY - startMouseY;

      let newWidthPx = startWidth;
      let newHeightPx = startHeight;
      let newX = startPosX;
      let newY = startPosY;

      // 垂直方向计算
      if (isNorth) {
        const proposedHeight = startHeight - deltaY;
        const actualHeight = Math.max(minHeight, proposedHeight);
        newHeightPx = actualHeight;
        // 关键：newY 必须基于高度的变化来反向推算，防止“自动移动”
        newY = startPosY + (startHeight - actualHeight);
      } else if (isSouth) {
        newHeightPx = Math.max(minHeight, startHeight + deltaY);
      }

      // 水平方向计算
      if (isWest) {
        const proposedWidth = startWidth - deltaX;
        const actualWidth = Math.max(minWidth, proposedWidth);
        newWidthPx = actualWidth;
        // 关键：newX 必须精确对应宽度减少的量
        newX = startPosX + (startWidth - actualWidth);
      } else if (isEast) {
        newWidthPx = Math.max(minWidth, startWidth + deltaX);
      }

      // 2. 将计算好的像素精确转换为百分比
      const widthPercent = (newWidthPx / parentElement.clientWidth) * 100;
      const heightPercent = (newHeightPx / parentElement.clientHeight) * 100;

      const nextSize = {
        width: `${widthPercent.toFixed(4)}%`,
        height: `${heightPercent.toFixed(4)}%`,
      };
      const nextPos = { x: newX, y: newY };

      setSize(nextSize);
      setPos(nextPos);
      onResize?.(nextSize as any, nextPos);
    };

    const handleUp = () => {
      setResizing(false);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }

  // ===== 保持基础样式与渲染逻辑 =====
  const handleBaseStyle: React.CSSProperties = {
    position: 'absolute',
    userSelect: 'none',
    touchAction: 'none',
    backgroundColor: 'transparent',
  };
  const borderThickness = 12;
  const cornerSize = 12;

  return (
    <div
      ref={useMergeRefs(ref, itemRef)}
      className={cs(
        'absolute select-none',
        dragging ? 'cursor-grabbing' : resizing ? '' : 'cursor-grab',
        dragging ? onDragClassName : defaultDragClassName,
        className,
      )}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        width: size.width,
        height: size.height,
        willChange: dragging || resizing ? 'transform, width, height' : 'auto',
        boxSizing: 'border-box',
        ...style,
      }}
      onMouseDown={(e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        startDrag(e.clientX, e.clientY);
      }}
    >
      <div className="w-full h-full">{children}</div>

      {/* 8个方向手柄绑定 startResize ... */}
      <div
        style={{
          ...handleBaseStyle,
          top: -cornerSize / 2,
          left: -cornerSize / 2,
          width: cornerSize,
          height: cornerSize,
          cursor: 'nwse-resize',
          zIndex: 20,
        }}
        onMouseDown={(e) => startResize(e, 'nw')}
      />
      <div
        style={{
          ...handleBaseStyle,
          top: -cornerSize / 2,
          right: -cornerSize / 2,
          width: cornerSize,
          height: cornerSize,
          cursor: 'nesw-resize',
          zIndex: 20,
        }}
        onMouseDown={(e) => startResize(e, 'ne')}
      />
      <div
        style={{
          ...handleBaseStyle,
          bottom: -cornerSize / 2,
          left: -cornerSize / 2,
          width: cornerSize,
          height: cornerSize,
          cursor: 'nesw-resize',
          zIndex: 20,
        }}
        onMouseDown={(e) => startResize(e, 'sw')}
      />
      <div
        style={{
          ...handleBaseStyle,
          bottom: -cornerSize / 2,
          right: -cornerSize / 2,
          width: cornerSize,
          height: cornerSize,
          cursor: 'nwse-resize',
          zIndex: 20,
        }}
        onMouseDown={(e) => startResize(e, 'se')}
      />
      <div
        style={{
          ...handleBaseStyle,
          top: -borderThickness / 2,
          left: 0,
          right: 0,
          height: borderThickness,
          cursor: 'ns-resize',
          zIndex: 10,
        }}
        onMouseDown={(e) => startResize(e, 'n')}
      />
      <div
        style={{
          ...handleBaseStyle,
          bottom: -borderThickness / 2,
          left: 0,
          right: 0,
          height: borderThickness,
          cursor: 'ns-resize',
          zIndex: 10,
        }}
        onMouseDown={(e) => startResize(e, 's')}
      />
      <div
        style={{
          ...handleBaseStyle,
          top: 0,
          bottom: 0,
          left: -borderThickness / 2,
          width: borderThickness,
          cursor: 'ew-resize',
          zIndex: 10,
        }}
        onMouseDown={(e) => startResize(e, 'w')}
      />
      <div
        style={{
          ...handleBaseStyle,
          top: 0,
          bottom: 0,
          right: -borderThickness / 2,
          width: borderThickness,
          cursor: 'ew-resize',
          zIndex: 10,
        }}
        onMouseDown={(e) => startResize(e, 'e')}
      />
    </div>
  );
};
