import type { Dispatch, RefObject } from 'react';
import type { UsePopperResult } from '../use-popper/interface';
import { Placement } from '../mini-floating-ui/interface';

export interface PopupContextProps {
  getTriggerNode: (children: React.ReactNode, visible?: boolean) => React.ReactNode;
  triggerRef: RefObject<HTMLElement>;
  popperRef: RefObject<UsePopperResult>;
  getPopupProps: () => Record<string, any>;
  visible: boolean;
  setPopupElement: Dispatch<any>;
  placement: Placement;
  popupElement: HTMLElement;
  isAnimated: RefObject<boolean>;
}
