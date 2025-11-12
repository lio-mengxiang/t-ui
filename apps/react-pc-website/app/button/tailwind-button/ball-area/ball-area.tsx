'use client';
import React, { useEffect, useRef } from 'react';
import { createFace } from './util';

export function ParabolaFaces() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const containerElement = container.current;
    const handleClick = (e: { clientX: any; clientY: any }) => {
      const containerRect = container.current!.getBoundingClientRect();
      for (let i = 0; i < 5; i++) {
        const x0 = e.clientX - containerRect.left;
        const y0 = e.clientY - containerRect.top;
        const x1 = x0 + (Math.random() > 0.5 ? 200 : -200);
        const y1 = 400 + Math.random() * 100;
        createFace(x0, y0, x1, y1, containerElement!);
      }
    };
    if (containerElement) containerElement.addEventListener('click', handleClick);

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div ref={container} className="h-[400px] bg-color-100 flex justify-center items-center relative">
      点击任意位置释放笑脸
    </div>
  );
}
