'use client';

import React from 'react';

interface GridProps {
  className?: string;
  columns?: string | number;
  rows?: string | number;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  minRowHeight?: string;
  flow?: 'row' | 'column' | 'row dense' | 'column dense';
  areas?: string[];
  justifyContent?: string;
  alignContent?: string;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  className,
  columns = 12,
  rows,
  gap = '12px',
  columnGap,
  rowGap,
  height = 'auto',
  minRowHeight = '20px',
  flow = 'row',
  areas,
  justifyContent,
  alignContent,
  children,
}) => {
  const style: React.CSSProperties = {
    display: 'grid',
    height,
    gridAutoFlow: flow,
    gridAutoRows: `minmax(${minRowHeight}, auto)`,
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    ...(rows && {
      gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    }),
    gap,
    ...(columnGap && { columnGap }),
    ...(rowGap && { rowGap }),
    ...(areas && { gridTemplateAreas: areas.map((a) => `"${a}"`).join(' ') }),
    ...(justifyContent && { justifyContent }),
    ...(alignContent && { alignContent }),
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
