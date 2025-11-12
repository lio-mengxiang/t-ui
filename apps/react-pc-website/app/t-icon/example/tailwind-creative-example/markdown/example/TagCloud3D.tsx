'use client';

import React, { useEffect, useRef } from 'react';

interface TagCloud3DProps {
  /** 球体半径 */
  radius?: number;
  /** 标签基础大小 */
  baseSize?: number;
  /** 自动旋转速度 */
  autoSpeed?: number;
  /** 视场角 */
  fov?: number;
  /** 拖拽敏感度 */
  dragSensitivity?: number;
  /** 惯性衰减系数 */
  inertiaDecay?: number;
  /** SVG 图标数组 */
  svgs?: string[];
  /** 容器样式类名 */
  className?: string;
  /** 标签样式类名 */
  tagClassName?: string;
  /** 背景渐变色 */
  background?: string;
  /** SVG 填充色 */
  svgFillColor?: string;
}

export const TagCloud3D: React.FC<TagCloud3DProps> = ({
  radius = 220,
  baseSize = 64,
  autoSpeed = 0.003,
  fov = 900,
  dragSensitivity = 0.02,
  inertiaDecay = 0.95,
  svgs = [
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.6 5.3 5.8.8-4.2 4 1 5.6L12 16.8 6.8 18.9l1-5.6L3.6 9.3l5.8-.8L12 2.5z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.6-9-7.2C1 11.6 3 7 6 5.4 8.2 4.2 10.6 4.6 12 6c1.4-1.4 3.8-1.8 6-0.6 3 1.6 5 6.2 3 8.4-2 2.6-9 7.2-9 7.2z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l9 18H3z"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>',
  ],
  tagClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const stateRef = useRef({
    theta: 0,
    phi: 0,
    vx: 0,
    vy: 0,
  });
  const dragRef = useRef({
    isPointerDown: false,
    lastPointerX: 0,
    lastPointerY: 0,
  });

  // 工具函数
  const rotateX = (p: { x: number; y: number; z: number }, angle: number) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
      x: p.x,
      y: p.y * cos - p.z * sin,
      z: p.y * sin + p.z * cos,
    };
  };

  const rotateY = (p: { x: number; y: number; z: number }, angle: number) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
      x: p.x * cos + p.z * sin,
      y: p.y,
      z: -p.x * sin + p.z * cos,
    };
  };

  const project = (p: { x: number; y: number; z: number }) => {
    const scale = fov / (fov - p.z * radius);
    return {
      x: p.x * radius * scale,
      y: p.y * radius * scale,
      scale,
    };
  };

  // 生成球面分布位置
  const generatePositions = () => {
    const N = svgs.length;
    return Array.from({ length: N }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      };
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const positions = generatePositions();
    const items: HTMLDivElement[] = [];

    // 清空容器并创建标签元素
    container.innerHTML = '';
    positions.forEach((_, i) => {
      const el = document.createElement('div');
      el.className = `absolute left-1/2 top-1/2 flex items-center justify-center transform-gpu pointer-events-none rounded-lg ${tagClassName}`;
      el.style.width = `${baseSize}px`;
      el.style.height = `${baseSize}px`;
      el.style.marginLeft = `${-baseSize / 2}px`;
      el.style.marginTop = `${-baseSize / 2}px`;
      el.innerHTML = svgs[i % svgs.length];

      // 设置 SVG 样式
      const svg = el.querySelector('svg');
      if (svg) {
        svg.style.width = '70%';
        svg.style.height = '70%';
        svg.style.display = 'block';
      }

      container.appendChild(el);
      items.push(el);
    });

    // 事件处理
    const handlePointerDown = (e: MouseEvent) => {
      e.stopPropagation();
      dragRef.current.isPointerDown = true;
      dragRef.current.lastPointerX = e.clientX;
      dragRef.current.lastPointerY = e.clientY;
      e.preventDefault();
    };

    const handlePointerMove = (e: MouseEvent) => {
      if (!dragRef.current.isPointerDown) return;

      const deltaX = e.clientX - dragRef.current.lastPointerX;
      const deltaY = e.clientY - dragRef.current.lastPointerY;

      stateRef.current.vy = deltaX * dragSensitivity;
      stateRef.current.vx = -deltaY * dragSensitivity;

      dragRef.current.lastPointerX = e.clientX;
      dragRef.current.lastPointerY = e.clientY;

      e.preventDefault();
    };

    const handlePointerUp = () => {
      dragRef.current.isPointerDown = false;
    };

    // 动画循环
    const loop = () => {
      const state = stateRef.current;
      const drag = dragRef.current;

      if (drag.isPointerDown) {
        state.theta += state.vy;
        state.phi += state.vx;
      } else {
        state.theta += autoSpeed + state.vy;
        state.phi += state.vx;
        state.vx *= inertiaDecay;
        state.vy *= inertiaDecay;
      }

      items.forEach((el, i) => {
        let p = positions[i];
        p = rotateY(p, state.theta);
        p = rotateX(p, state.phi);

        const proj = project(p);
        const depth = (p.z + 1) / 2;
        const size = Math.max(12, baseSize * (depth + 0.6));
        const opacity = 0.35 + depth * 0.65;

        el.style.transform = `translate3d(${proj.x}px, ${proj.y}px, 0) scale(${size / baseSize})`;
        el.style.zIndex = Math.floor(depth * 10).toString();
        el.style.opacity = opacity.toString();
      });

      animationRef.current = requestAnimationFrame(loop);
    };

    // 添加事件监听器
    container.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseup', handlePointerUp);
    document.addEventListener('mouseleave', handlePointerUp);

    // 启动动画
    loop();

    // 清理函数
    return () => {
      container.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      document.removeEventListener('mouseleave', handlePointerUp);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [radius, baseSize, autoSpeed, fov, dragSensitivity, inertiaDecay, svgs, tagClassName]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => e.stopPropagation()}
      className="relative cursor-grab active:cursor-grabbing"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    />
  );
};
