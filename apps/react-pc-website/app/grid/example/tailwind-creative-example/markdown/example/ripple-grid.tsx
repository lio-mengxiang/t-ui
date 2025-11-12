'use client';

import React, { useEffect, useRef } from 'react';

interface RippleGridProps {
  size?: number;
  filledCells?: Array<{ row: number; col: number }>;
  cellSize?: number;
  cellColor?: string;
  filledCellColor?: string;
  pulseColor?: string;
  borderColor?: string;
  borderWidth?: number;
  pulseScale?: number;
  pulseDuration?: number;
  rippleDelay?: number;
}

export function RippleGrid({
  size = 10,
  filledCells = [],
  cellSize = 30,
  cellColor = 'var(--bg-color)',
  filledCellColor = '#000',
  pulseColor = '#76cefa',
  borderColor = 'var(--border-color)',
  borderWidth = 1,
  pulseScale = 1.1,
  pulseDuration = 300,
  rippleDelay = 100,
}: RippleGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridContainer = gridRef.current;
    if (!gridContainer) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clicked = target.closest('.cell') as HTMLElement | null;
      if (!clicked) return;

      const clickedRow = Number.parseInt(clicked.dataset.row || '0', 10);
      const clickedCol = Number.parseInt(clicked.dataset.col || '0', 10);

      const cells = gridContainer.querySelectorAll<HTMLElement>('.cell');

      cells.forEach((htmlCell) => {
        const row = Number.parseInt(htmlCell.dataset.row || '0', 10);
        const col = Number.parseInt(htmlCell.dataset.col || '0', 10);

        const distance = Math.abs(row - clickedRow) + Math.abs(col - clickedCol);
        const isFilledCell = htmlCell.classList.contains('filled');
        const originalBg = isFilledCell ? filledCellColor : cellColor;

        htmlCell.animate(
          [
            { backgroundColor: originalBg, transform: 'scale(1)' },
            { backgroundColor: pulseColor, transform: `scale(${pulseScale})`, offset: 0.5 },
            { backgroundColor: originalBg, transform: 'scale(1)' },
          ],
          {
            duration: pulseDuration,
            delay: distance * rippleDelay,
            easing: 'ease-out',
            fill: 'none', // 动画结束后不保留最后一帧样式，元素回到动画前状态
          },
        );
      });
    };

    gridContainer.addEventListener('click', handleClick);
    return () => gridContainer.removeEventListener('click', handleClick);
  }, [cellColor, filledCellColor, pulseColor, pulseScale, pulseDuration, rippleDelay]);

  const isFilled = (row: number, col: number) => filledCells.some((cell) => cell.row === row && cell.col === col);

  return (
    <div className="flex justify-center">
      <div
        ref={gridRef}
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: size * size }, (_, i) => {
          const row = Math.floor(i / size);
          const col = i % size;
          const filled = isFilled(row, col);
          return (
            <div
              key={`${row}-${col}`}
              data-row={row}
              data-col={col}
              className={`cell ${filled ? 'filled' : ''} border box-border cursor-pointer transition-transform duration-300`}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                backgroundColor: filled ? filledCellColor : cellColor,
                borderColor,
                borderWidth,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
