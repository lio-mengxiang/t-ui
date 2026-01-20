'use client';

import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { Anchor } from '@t-headless-ui/react';

export const LinkItem = () => {
  const { currentId, linkMap } = useContext(Anchor.Context);
  const ref = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const currentLink = linkMap.current.get(currentId);
    if (ref.current && currentLink) {
      setLineStyle({ top: currentLink.offsetTop, height: currentLink.offsetHeight });
    }
  }, [currentId, linkMap]);

  return (
    <div className="absolute top-0 left-0 w-[1px] h-full bg-color-300">
      <div ref={ref} className="absolute w-[1px] bg-primary-color transition-all duration-300" style={lineStyle}></div>
    </div>
  );
};
