'use client';
import { cs } from '@/_utils';
import React, { useRef, useEffect, useState } from 'react';

export const DraggableElement: React.FC<{ children: React.ReactNode; width?: number; height?: number }> = ({
  children,
  width = 3201,
  height = 2760,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // PC 端拖动
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      // e.clientX - (e.clientX - translate.x) (e.clientX - translate.x) = start.x
      // translate 是指每次结束后，现在的 translate 是多少，然后 mouseDown 记录的 e.ClientX和移动的 e.ClientX 是当前的增量
      const x = e.clientX - start.x;
      const y = e.clientY - start.y;
      const maxX = (width - window.innerWidth) / 2;
      const maxY = (height - window.innerHeight) / 2;
      // 将计算出的 x、y 限制在 [-maxX, maxX] 与 [-maxY, maxY] 范围内，防止元素拖出边界
      setTranslate({ x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y)) });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      canvas.style.cursor = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [height, isDragging, start, translate, width]);

  // 移动端触摸
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const t = e.touches[0];
      const x = t.clientX - start.x;
      const y = t.clientY - start.y;
      const maxX = (width - window.innerWidth) / 2;
      const maxY = (height - window.innerHeight) / 2;
      // 将计算出的 x、y 限制在 [-maxX, maxX] 与 [-maxY, maxY] 范围内，防止元素拖出边界
      setTranslate({ x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y)) });
    };

    const handleTouchEnd = () => setIsDragging(false);

    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [height, isDragging, start, translate, width]);

  // 触控板滚动（Wheel）平移画布
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const handleWheel = (e: WheelEvent) => {
  //     // 阻止页面默认滚动行为
  //     e.preventDefault();

  //     // 兼容不同 deltaMode：0=像素、1=行、2=页
  //     const factor =
  //       e.deltaMode === 0
  //         ? 1
  //         : e.deltaMode === 1
  //           ? 16 // 行 -> 近似像素
  //           : window.innerHeight; // 页 -> 屏幕高度近似像素

  //     const dx = e.deltaX * factor;
  //     const dy = e.deltaY * factor;

  //     // 这里采用与页面滚动一致的方向：下滚使内容上移
  //     setTranslate((prev) => ({
  //       x: prev.x - dx,
  //       y: prev.y - dy,
  //     }));
  //   };

  //   canvas.addEventListener('wheel', handleWheel, { passive: false });
  //   return () => {
  //     canvas.removeEventListener('wheel', handleWheel as EventListener);
  //   };
  // }, []);

  return (
    <div className={cs('w-full h-full overflow-hidden select-none no-scrollbar fixed')}>
      <div
        ref={canvasRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          setStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          const t = e.touches[0];
          setStart({ x: t.clientX - translate.x, y: t.clientY - translate.y });
        }}
        className={cs(
          'absolute flex items-center justify-center left-[50%] top-[50%]',
          'bg-[size:16px_16px]',
          'bg-[radial-gradient(circle,_rgb(212,212,212)_1px,_transparent_1px)]',
        )}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate(calc(-50% + ${translate.x}px), calc(-50% + ${translate.y}px))`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
