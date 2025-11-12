'use client';
import React, { cloneElement, useEffect, useRef } from 'react';
import { motion, useAnimate, usePresence } from 'motion/react';
import { useTimer } from './hooks';
import { applyDefaultSlide, applyStackVariants } from './utils';
// type
import type { StoreInstance, ToastProps, Direction } from './interface';

export const ToastContainer = (
  props: ToastProps & {
    store: StoreInstance;
    stack?: boolean;
    stackIndex?: number;
    stackMaxVisible?: number;
    stackOffset?: number;
    stackExpanded?: boolean;
    direction?: Direction;
  },
) => {
  const {
    component,
    id,
    stack = false,
    stackIndex = 0,
    stackMaxVisible,
    stackOffset = 8,
    stackExpanded = false,
    direction = 'top-to-bottom',
  } = props;
  const promiseRef = useRef<Promise<void>>(Promise.resolve());
  const isFirstStackMount = useRef(true);
  const isFirstNormalMount = useRef(true);
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  const { onMouseEnter, onMouseLeave, percent } = useTimer(props);

  // 判断是否应该显示
  const shouldShow = !stack || stackIndex < stackMaxVisible;

  const variants = stack
    ? applyStackVariants({
        index: stackIndex,
        maxVisible: stackMaxVisible,
        offset: stackOffset,
        expanded: stackExpanded,
        direction,
      })
    : applyDefaultSlide();

  useEffect(() => {
    if (!stack) return;
    // 根据方向确定动画的基础参数
    const isTopToBottom = direction === 'top-to-bottom';

    if (isPresent && scope.current) {
      const enterAnimation = async () => {
        const sequence: any = [
          [
            scope.current,
            stackExpanded
              ? {
                  ...variants.animate,
                  y: isTopToBottom ? stackIndex * scope.current.offsetHeight : -stackIndex * scope.current.offsetHeight,
                }
              : variants.animate,
            {
              duration: 0.4,
            },
          ],
        ];
        if (stackIndex === 0 && isFirstStackMount.current) {
          isFirstStackMount.current = false;
          sequence.unshift([scope.current, variants.initial, { duration: 0 }]);
        }
        await animate(sequence);
      };
      enterAnimation();
    } else if (!isPresent && scope.current) {
      const exitAnimation = async () => {
        await animate(scope.current, variants.exit, { duration: 0.1 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, scope, stack, stackExpanded, stackIndex]);

  useEffect(() => {
    if (stack) return;

    if (isPresent && scope.current) {
      const enterAnimation = async () => {
        const sequence: any = [
          [
            scope.current,
            stackExpanded && stack ? { ...variants.animate, y: stackIndex * scope.current.offsetHeight } : variants.animate,
            {
              duration: 0.4,
            },
          ],
        ];
        if (stackIndex === 0 && isFirstNormalMount.current) {
          isFirstNormalMount.current = false;
          sequence.unshift([scope.current, variants.initial, { duration: 0 }]);
        }
        await animate(sequence);
      };
      promiseRef.current.then(() => {
        enterAnimation();
      });
    } else if (!isPresent && scope.current) {
      const exitAnimation = async () => {
        await animate(scope.current, variants.exit, { duration: 0.1 });
        safeToRemove();
      };
      promiseRef.current = promiseRef.current.then(() => exitAnimation());
    }
  }, [isPresent, scope, stack, stackExpanded, stackIndex]);

  if (!shouldShow && !stackExpanded) {
    return null;
  }

  return (
    <motion.div
      ref={scope}
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: stack ? 'absolute' : 'relative',
        top: 0,
        // left: 0,
        // right: 0,
        zIndex: stack ? stackMaxVisible - stackIndex : 'auto',
      }}
    >
      {cloneElement(component, {
        toastPercent: percent,
        closeToast: () => {
          props.store.remove(id);
        },
      })}
    </motion.div>
  );
};
