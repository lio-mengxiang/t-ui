'use client';

import { createContext } from 'react';
import type { PopupContextProps } from './interface-context';

export const PopupContext = createContext<Partial<PopupContextProps>>({
  getTriggerNode: (children) => children,
  triggerRef: { current: null },
  popperRef: { current: null },
  getPopupProps: () => ({}),
  setPopupElement: () => {},
  popupElement: null,
  isAnimated: { current: false },
});
