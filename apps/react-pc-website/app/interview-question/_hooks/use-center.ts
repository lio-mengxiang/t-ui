import { useState, useEffect } from 'react';

export function useCenter(containerRef: React.RefObject<HTMLElement | null>, itemRef: React.RefObject<HTMLElement | null>) {
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const c = containerRef.current;
    const i = itemRef.current;

    if (!c || !i) return;

    setCenter({
      x: (c.clientWidth - i.offsetWidth) / 2,
      y: (c.clientHeight - i.offsetHeight) / 2,
    });
  }, []);

  return center;
}
