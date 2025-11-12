'use client';

import React, { cloneElement, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { duration1, duration2, maskAnimation, modalAnimation } from '../constants';
import { useOverflowHidden } from '../hooks';

import { useFocusTrap } from '../../hooks/use-focus-tarp';
// type
import type { ModalProps } from '../interface';
import { Portal } from '../../portal';

interface IModalProps extends ModalProps {
  attach?: string;
  index: number;
}

export function Modal(props: IModalProps) {
  // props
  const {
    mask = () => true,
    focusLock = true,
    attach,
    afterClose,
    afterOpen,
    content,
    onCancel,
    maskCls,
    maskStyle,
    containerClassName,
    index,
    initialFocusEl,
    contentProps,
  } = props;

  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);

  useFocusTrap(focusRef, focusLock);
  useOverflowHidden(attach, mask(index));

  const onClickMask = () => {
    if (mask) {
      setTimeout(() => {
        onCancel?.();
      }, 100);
    }
  };

  const onEscExit = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCancel?.();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      modalWrapperRef.current?.focus({ preventScroll: true });
      initialFocusEl?.();
    }, 0);
  }, []);

  return (
    <Portal attach={attach}>
      <div tabIndex={-1} ref={modalWrapperRef} onKeyDown={onEscExit}>
        {mask(index) ? (
          <motion.div
            className={maskCls}
            style={maskStyle}
            animate="animate"
            exit="exit"
            variants={maskAnimation}
            initial="initial"
            transition={duration1}
            onClick={onClickMask}
          />
        ) : null}
        <div className={containerClassName}>
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
            }}
            tabIndex={-1}
            role="dialog"
            variants={modalAnimation}
            animate="animate"
            transition={duration2}
            exit="exit"
            initial="initial"
            onAnimationComplete={(definition) => {
              if (definition === 'animate') {
                afterOpen?.();
              }
              if (definition === 'exit') {
                afterClose?.();
              }
            }}
          >
            {focusLock ? <div ref={focusRef}>{cloneElement(content, contentProps)}</div> : cloneElement(content, contentProps)}
          </motion.div>
        </div>
      </div>
    </Portal>
  );
}
