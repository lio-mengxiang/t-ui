'use client';

import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { Anchor } from '@t-headless-ui/react';

const BALL_SIZE = 8;

export const LinkBallItem = () => {
  const { currentId, linkMap } = useContext(Anchor.Context);
  const ref = useRef<HTMLDivElement>(null);

  const [ballStyle, setBallStyle] = useState<React.CSSProperties>({
    top: 0,
  });

  useLayoutEffect(() => {
    const currentLink = linkMap.current.get(currentId);

    if (currentLink) {
      setBallStyle({
        top: currentLink.offsetTop + currentLink.offsetHeight / 2 - BALL_SIZE / 2,
      });
    }
  }, [currentId, linkMap]);

  return (
    <div className="absolute top-0 left-0 h-full w-[1px]  bg-color-300 flex justify-center">
      {/* 轨道（可选） */}
      <div className="absolute w-[1px]" />
      {/* Ball */}
      <div
        ref={ref}
        className="
          absolute
          w-2 h-2
          rounded-full
          bg-primary-color
          transition-all
          duration-300
          ease-out
        "
        style={ballStyle}
      />
    </div>
  );
};
