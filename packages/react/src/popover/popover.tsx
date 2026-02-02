'use client';

import React, { useState, useRef, type PropsWithChildren, useImperativeHandle, forwardRef } from 'react';
import { usePopper } from '../use-popper';
import { getRefDom } from './utils';
import { useTrigger } from './hooks';
import { useMergeValue } from '../hooks';
import { PopupContext } from './root-context';

// type
import type { PopoverProps, PopupVisibleChangeContext } from './interface';

const defaultProps = {
  placement: 'top',
  trigger: 'hover',
  strategy: 'absolute',
  offsetSkidding: 0,
  offsetDistance: 0,
} as const;

// 至少经历 3 次 update 才能显示 popupElement
//  hover->setVisibleChange->setPopupElement->usePopper-> setStyle
export const Popup = forwardRef((baseProps: PropsWithChildren<PopoverProps>, ref) => {
  const props = {
    ...defaultProps,
    ...baseProps,
  };
  const { trigger, placement, disabled, readOnly, offsetSkidding, offsetDistance, strategy, children, destroyOnClose = true } = props;

  const [visible, onVisibleChange] = useMergeValue(false, {
    value: props.visible,
    defaultValue: false,
  });
  const isAnimated = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setVisibleChange = (newVisible: boolean, context: PopupVisibleChangeContext) => {
    onVisibleChange(newVisible);
    // uncontrolled
    if (props.visible === undefined && visible !== newVisible) {
      props.onVisibleChange?.(newVisible, context);
    }
    // controlled
    if (props.visible !== undefined && props.visible !== newVisible) {
      props.onVisibleChange?.(newVisible, context);
    }
  };

  const [popupElement, setPopupElement] = useState(null);

  const popperRef = useRef(null); // 保存 popper 实例

  const { getTriggerNode, getPopupProps, triggerRef } = useTrigger({
    disabled,
    readOnly,
    trigger,
    visible,
    setVisibleChange,
  });

  popperRef.current = usePopper(getRefDom(triggerRef), popupElement, {
    placement,
    strategy,
    offsetSkidding,
    offsetDistance,
  });

  useImperativeHandle(ref, () => ({
    update: popperRef.current?.update,
  }));

  return (
    <PopupContext.Provider
      value={{
        getTriggerNode,
        getPopupProps,
        triggerRef,
        popperRef,
        setPopupElement,
        visible,
        placement,
        popupElement,
        isAnimated,
        destroyOnClose,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
});
