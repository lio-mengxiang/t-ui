import React from 'react';
import Image from 'next/image';
import { cs, getImageUrl } from '@/_utils';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  style?: React.CSSProperties;
  containerClassName?: string;
  imageClassName?: string;
}

export function ImageTypography({ src, alt, width, height, fill, style, containerClassName, imageClassName }: ImageProps) {
  return (
    <div className={cs(`w-full h-96 relative mt-8 mb-8 ${containerClassName}`)}>
      <Image
        src={getImageUrl(src)}
        alt={alt}
        width={width}
        height={height}
        style={style}
        fill={fill}
        className={cs('object-cover', imageClassName)}
      />
    </div>
  );
}
