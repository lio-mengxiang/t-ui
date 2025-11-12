'use client';

import React, { useSyncExternalStore, useState } from 'react';
import { DIRECTION } from './constants';
import { Portal } from '../portal';
import { AnimatePresence } from 'motion/react';
import { ToastContainer } from './toast-container';

// types
import type { Direction, ToastManagerProps } from './interface';

const defaultProps = {
  direction: DIRECTION.TOP_TO_BOTTOM as Direction,
  duration: 3,
  stack: false,
  stackOffset: 8,
};

export function ToastProvider(baseProps: ToastManagerProps) {
  // props
  const props = { ...defaultProps, ...baseProps };
  const [isHovering, setIsHovering] = useState(false);

  // state
  const state = useSyncExternalStore(props.store.subscribe, props.store.getState, props.store.getState);

  const handleMouseEnter = () => {
    if (props.stack) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (props.stack) {
      setIsHovering(false);
    }
  };

  return (
    <Portal attach={props.attach}>
      <div {...props.containerProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatePresence>
          {state.map((toast, index) => (
            <ToastContainer
              key={toast.id}
              duration={props.duration}
              {...toast}
              store={props.store}
              // Stack 相关属性
              stack={props.stack}
              direction={props.direction}
              stackIndex={index}
              stackMaxVisible={props.store.maxCount}
              stackOffset={props.stackOffset}
              stackExpanded={isHovering}
            />
          ))}
        </AnimatePresence>
      </div>
    </Portal>
  );
}
