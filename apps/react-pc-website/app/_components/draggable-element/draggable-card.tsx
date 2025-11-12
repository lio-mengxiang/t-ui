import { cs } from '@/_utils';
import React, { useRef, useState, useEffect } from 'react';

export const DraggableItem: React.FC<{
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  bounds?: 'parent' | { top?: number; right?: number; bottom?: number; left?: number };
  grid?: number; // 网格吸附：步进像素
  className?: string;
  style?: React.CSSProperties;
  onDragClassName?: string;
  defaultDragClassName?: string;
  onDrag?: (pos: { x: number; y: number }) => void;
}> = ({
  children,
  defaultPosition = { x: 0, y: 0 },
  bounds = 'parent',
  className,
  style,
  onDrag,
  onDragClassName,
  defaultDragClassName,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(defaultPosition);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setPos(defaultPosition);
  }, [defaultPosition.x, defaultPosition.y]);

  function clampToBounds(nextX: number, nextY: number) {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return { x: nextX, y: nextY };

    const itemW = node.offsetWidth;
    const itemH = node.offsetHeight;

    if (bounds === 'parent') {
      const parentW = parent.clientWidth;
      const parentH = parent.clientHeight;
      const minX = 0;
      const minY = 0;
      const maxX = Math.max(0, parentW - itemW);
      const maxY = Math.max(0, parentH - itemH);
      return {
        x: Math.min(Math.max(nextX, minX), maxX),
        y: Math.min(Math.max(nextY, minY), maxY),
      };
    } else {
      const minX = bounds.left ?? Number.NEGATIVE_INFINITY;
      const minY = bounds.top ?? Number.NEGATIVE_INFINITY;
      const maxX = bounds.right ?? Number.POSITIVE_INFINITY;
      const maxY = bounds.bottom ?? Number.POSITIVE_INFINITY;
      return {
        x: Math.min(Math.max(nextX, minX), maxX),
        y: Math.min(Math.max(nextY, minY), maxY),
      };
    }
  }

  // function snap(x: number, y: number) {
  //   if (!grid || grid <= 1) return { x, y };
  //   return {
  //     x: Math.round(x / grid) * grid,
  //     y: Math.round(y / grid) * grid,
  //   };
  // }

  function startPointer(clientX: number, clientY: number) {
    setDragging(true);
    const originX = pos.x;
    const originY = pos.y;
    const startX = clientX;
    const startY = clientY;

    const handleMove = (e: MouseEvent) => {
      e.stopPropagation();
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      const x = originX + deltaX;
      const y = originY + deltaY;
      const clamped = clampToBounds(x, y);
      setPos(clamped);
      onDrag?.(clamped);
    };
    const handleUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }

  function startTouch(touch: Touch) {
    setDragging(true);
    const originX = pos.x;
    const originY = pos.y;
    const startX = touch.clientX;
    const startY = touch.clientY;

    const handleMove = (e: TouchEvent) => {
      e.stopPropagation();
      const t = e.touches[0];
      if (!t) return;
      const deltaX = t.clientX - startX;
      const deltaY = t.clientY - startY;
      const x = originX + deltaX;
      const y = originY + deltaY;
      const clamped = clampToBounds(x, y);
      setPos(clamped);
      onDrag?.(clamped);
    };
    const handleUp = () => {
      setDragging(false);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('touchcancel', handleUp);
    };
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);
    window.addEventListener('touchcancel', handleUp);
  }

  return (
    <div
      ref={ref}
      className={cs(
        'absolute select-none',
        dragging ? 'cursor-grabbing' : 'cursor-grab',
        dragging ? onDragClassName : defaultDragClassName,
        className,
      )}
      style={{ left: `${pos.x}px`, top: `${pos.y}px`, ...style }}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation(); // 防止触发画布的拖拽
        startPointer(e.clientX, e.clientY);
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const t = e.touches[0];
        if (t) startTouch(t as any);
      }}
    >
      {children}
    </div>
  );
};
