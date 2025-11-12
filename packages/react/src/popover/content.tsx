'use client';

import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { applyPopupSlide } from './utils';
import { PopupContext } from './root-context';
import { useResizeObserver } from '../hooks';
import { Portal } from '../portal';
import { passive } from './constants';

export function Content(props) {
  const popupRef = useRef(null); // popup dom 元素，css transition 需要用

  const { children, attach = 'body', className, animateFn = applyPopupSlide } = props;

  const { popperRef, setPopupElement, visible, getPopupProps, placement, isAnimated } = useContext(PopupContext);
  const { styles, state, update } = popperRef.current;

  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  // 监听 popupRef 节点或内容变化动
  useResizeObserver(popupRef?.current, () => {
    // visibleRef.current 防止退出动画的时候触发
    // isAnimated 防止初次加载就触发
    if (!visibleRef.current || !isAnimated.current) return;
    popperRef.current?.update?.();
  });

  // 判断展示浮层
  const showOverlay = useMemo(() => {
    if (!children) return false;
    return visible;
  }, [children, visible]);

  useEffect(() => {
    if (!state) return;
    const scrollParents = [...new Set([...state.scrollParents.reference, ...state.scrollParents.popper])];
    scrollParents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', update, passive);
    });

    window.addEventListener('resize', update, passive);

    return () => {
      scrollParents.forEach((scrollParent) => {
        scrollParent.removeEventListener('scroll', update);
      });
      window.removeEventListener('resize', update);
    };
  }, [state, update]);

  const setRef = useCallback(
    (node) => {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    [setPopupElement],
  );

  const overlay = showOverlay && (
    <Portal attach={attach}>
      <div ref={setRef} style={styles.popper as any} {...getPopupProps()}>
        <motion.div
          variants={animateFn(state?.placement || placement)}
          animate="animate"
          exit="exit"
          initial="initial"
          onAnimationStart={() => {
            isAnimated.current = false;
          }}
          onAnimationComplete={() => {
            isAnimated.current = true;
          }}
        >
          <div data-placement={state?.placement || placement} className={`t-popover-content ${className}`}>
            {children}
          </div>
        </motion.div>
      </div>
    </Portal>
  );

  return <AnimatePresence>{overlay}</AnimatePresence>;
}
