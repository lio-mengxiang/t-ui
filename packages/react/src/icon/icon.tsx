import React, { PropsWithChildren, forwardRef } from 'react';
import { IconProps } from './interface';
import { getSize } from './utils';

const defaultProps = {
  size: '1em',
};

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((baseProps, ref) => {
  const mergeProps = { ...defaultProps, ...baseProps };
  const { className, size, style, children, useStrokeCurrentColor, useFillCurrentColor, ...rest } = mergeProps;

  const [width, height] = getSize(size);

  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height={height}
      style={style}
      focusable="false"
      stroke={useStrokeCurrentColor ? 'currentColor' : 'none'}
      fill={useFillCurrentColor ? 'currentColor' : 'none'}
      {...rest}
    >
      {children}
    </svg>
  );
});
