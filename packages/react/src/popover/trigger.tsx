'use client';

import React, { PropsWithChildren, useContext, useRef } from 'react';
import { PopupContext } from './root-context';
import { useResizeObserver } from '../hooks';
import { getRefDom } from './utils';

export const Trigger = (props: PropsWithChildren<any>) => {
  const { children } = props;

  const { getTriggerNode, triggerRef, popperRef, visible, isAnimated } = useContext(PopupContext);

  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  // 监听 triggerRef 节点或内容变化动
  useResizeObserver(getRefDom(triggerRef), () => {
    // visibleRef.current 防止退出动画的时候触发
    // isAnimated 防止初次加载就触发
    if (!visibleRef.current || !isAnimated.current) return;
    popperRef.current?.update?.();
  });

  return <>{getTriggerNode(children, visible)}</>;
};
