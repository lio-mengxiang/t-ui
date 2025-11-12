'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './interface';
import { getAttach } from './utils';

export const Portal = (props: PortalProps) => {
  const { attach, children } = props;

  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    // 只在客户端执行
    const parentElement = getAttach(attach);
    setContainer(parentElement);
  }, [attach]);

  if (!container) return null; // 服务端渲染时直接不渲染

  return createPortal(children, container);
};
