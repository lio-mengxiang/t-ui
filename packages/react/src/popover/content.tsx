'use client';

import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAnimate } from 'motion/react';
import { applyPopupSlide } from './utils';
import { PopupContext } from './root-context';
import { useResizeObserver } from '../hooks';
import { Portal } from '../portal';
import { passive } from './constants';

export function Content(props) {
  const { children, attach = 'body', className, animateFn = applyPopupSlide } = props;
  const { popperRef, setPopupElement, visible, getPopupProps, placement, isAnimated, destroyOnClose } = useContext(PopupContext);

  const [scope, animate] = useAnimate();
  const [shouldRender, setShouldRender] = useState(!destroyOnClose || visible);

  // 引用当前的动画控制器，用于随时停止
  const animationControls = useRef(null);

  const { styles, state, update } = popperRef.current;
  const popupRef = useRef(null);
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  useEffect(() => {
    if (visible) setShouldRender(true);
  }, [visible]);

  useResizeObserver(popupRef?.current, () => {
    if (!visibleRef.current || !isAnimated.current) return;
    popperRef.current?.update?.();
  });

  // 核心动画逻辑
  useEffect(() => {
    if (!scope.current) return;

    const variants = animateFn(state?.placement || placement);

    const runAnimation = async () => {
      isAnimated.current = false;

      // 停止当前正在进行的任何动画，防止冲突
      if (animationControls.current) {
        animationControls.current.stop();
      }

      if (visible) {
        // --- 进场 ---
        // 使用 Sequence 确保“瞬间归位”和“动画开始”在同一个批次
        const enterTransition = variants.animate?.transition || {};
        animationControls.current = animate([
          [scope.current, variants.initial, { duration: 0 }],
          [scope.current, variants.animate, { ...enterTransition, at: '<' }], // at: "<" 表示紧随其后或重叠
        ]);

        await animationControls.current;
        isAnimated.current = true;
      } else {
        // --- 退场 ---
        const exitTransition = variants.exit?.transition || {};
        animationControls.current = animate(scope.current, variants.exit, exitTransition);

        await animationControls.current;

        // 只有动画自然结束（没被 stop）且 visible 依然为 false 时才卸载
        if (visibleRef.current === false) {
          isAnimated.current = true;
          if (destroyOnClose) {
            setShouldRender(false);
          }
        }
      }
    };

    runAnimation();

    return () => {
      // 清理：组件卸载或依赖变化时停止动画
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [visible, destroyOnClose, scope.current]);

  // 滚动与监听逻辑
  useEffect(() => {
    if (!state) return;
    const scrollParents = [...new Set([...state.scrollParents.reference, ...state.scrollParents.popper])];
    const handleUpdate = () => update();
    scrollParents.forEach((sp) => sp.addEventListener('scroll', handleUpdate, passive));
    window.addEventListener('resize', handleUpdate, passive);
    return () => {
      scrollParents.forEach((sp) => sp.removeEventListener('scroll', handleUpdate));
      window.removeEventListener('resize', handleUpdate);
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

  const showOverlay = useMemo(() => {
    if (!children) return false;
    return destroyOnClose ? shouldRender : true;
  }, [children, destroyOnClose, shouldRender]);

  if (!showOverlay) return null;

  return (
    <Portal attach={attach}>
      <div
        ref={setRef}
        style={{
          ...(styles.popper as any),
          // make sure that we must see the content when visible is false
          opacity: visible === false ? '0' : 'unset',
          pointerEvents: !visible && !destroyOnClose ? 'none' : 'auto',
        }}
        {...getPopupProps()}
      >
        {/* willChange 提升性能 */}
        <div ref={scope} style={{ willChange: 'transform, opacity' }}>
          <div data-placement={state?.placement || placement} className={`t-popover-content ${className}`}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
