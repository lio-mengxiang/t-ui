'use client';

import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useAnimate } from 'motion/react';
import { applyPopupSlide } from './utils';
import { PopupContext } from './root-context';
import { useResizeObserver } from '../hooks';
import { Portal } from '../portal';
import { passive } from './constants';

export function Content(props) {
  const { children, attach = 'body', className, animateFn = applyPopupSlide, getStyle } = props;

  const { popperRef, setPopupElement, visible, getPopupProps, placement, isAnimated, destroyOnClose } = useContext(PopupContext);

  const [scope, animate] = useAnimate();

  // 初始化逻辑：只有当前是 visible 的时候才渲染，或者通过后续 useEffect 激活
  const [shouldRender, setShouldRender] = useState(visible);

  const style = getStyle?.();
  // 引用当前的动画控制器，用于随时停止
  const animationControls = useRef(null);

  const { styles, state, update } = popperRef.current;
  const popupRef = useRef(null);
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  // 监听 visible 变化，确保变为 true 时开始渲染
  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
  }, [visible]);

  useResizeObserver(popupRef?.current, () => {
    if (!visibleRef.current) return;
    popperRef.current?.update?.();
  });

  // 核心动画逻辑
  useEffect(() => {
    if (!scope.current) return;

    // 获取动画变体（ variants 通常包含 initial, animate, exit 状态）
    // 这里的关键是 exit 状态通常包含 { opacity: 0 }
    const variants = animateFn(state?.placement || placement);

    const runAnimation = async () => {
      isAnimated.current = false;

      // 停止当前正在进行的任何动画，防止冲突
      if (animationControls.current) {
        animationControls.current.stop();
      }

      if (visible) {
        // --- 进场 ---
        const enterTransition = variants.animate?.transition || {};
        animationControls.current = animate([
          [scope.current, variants.initial, { duration: 0 }],
          [scope.current, variants.animate, { ...enterTransition, at: '<' }],
        ]);

        await animationControls.current;
        isAnimated.current = true;
      } else {
        // --- 退场 ---
        const exitTransition = variants.exit?.transition || {};
        // 开始播放退场动画，motion/react 会负责将 opacity 平滑过渡到 0
        animationControls.current = animate(scope.current, variants.exit, exitTransition);

        // 关键点：等待动画完全结束
        await animationControls.current;

        // 只有动画自然结束（没被中途 stop）且 visible 依然为 false 时才执行后续逻辑
        if (visibleRef.current === false) {
          isAnimated.current = true;

          // 销毁控制逻辑：
          // 如果 destroyOnClose 为 true，将 shouldRender 设为 false，触发组件卸载。
          // 如果 destroyOnClose 为 false，什么都不做。DOM 保持保留状态。
          // 此时由于动画已结束，元素状态已停留在 variants.exit (opacity:0)，所以是不可见的。
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

  if (!shouldRender || !children) return null;

  return (
    <Portal attach={attach}>
      <div
        ref={setRef}
        style={{
          ...(styles.popper as any),
          pointerEvents: !visible ? 'none' : 'auto',
        }}
        {...getPopupProps()}
      >
        {/* willChange 提升性能 */}
        <div ref={scope} style={{ willChange: 'transform, opacity' }}>
          <div data-placement={state?.placement || placement} className={className} style={style}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
