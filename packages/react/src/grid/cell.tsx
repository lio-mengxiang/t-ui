'use client';

import React from 'react';
import { useResponsiveState } from './hooks/useResponsiveState';
import { ResponsiveValue } from './interface';

interface CellProps {
  className?: string;
  width?: number | ResponsiveValue;
  height?: number | ResponsiveValue;
  defaultWidth?: number;
  defaultHeight?: number;
  top?: number | string;
  left?: number | string;
  middle?: boolean;
  center?: boolean;
  area?: string;
  children: React.ReactNode;
}

export const Cell: React.FC<CellProps> = ({
  className,
  width = 1,
  height = 1,
  defaultWidth = 1,
  defaultHeight = 1,
  top,
  left,
  middle,
  center,
  area,
  children,
}) => {
  const spanWidth = useResponsiveState(width, defaultWidth);
  const spanHeight = useResponsiveState(height, defaultHeight);

  const style: React.CSSProperties = {
    height: '100%',
    minWidth: 0,
    gridColumnEnd: `span ${spanWidth}`,
    gridRowEnd: `span ${spanHeight}`,
    ...(left && { gridColumnStart: left }),
    ...(top && { gridRowStart: top }),
    ...(center && { textAlign: 'center' }),
    ...(area && { gridArea: area }),
    ...(middle && {
      display: 'inline-flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      justifySelf: 'stretch',
    }),
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
