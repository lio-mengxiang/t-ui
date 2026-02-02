import type { Variants } from 'motion/react';
import { PopoverProps } from '../interface';

const transition = {
  duration: 0.2,
};
export function applyPopupSlide(placement: PopoverProps['placement']): Variants {
  if (placement === 'top' || placement === 'top-end' || placement === 'top-start') {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition,
      },
      exit: {
        opacity: 0,
        transition,
      },
    };
  }
  if (placement === 'bottom' || placement === 'bottom-end' || placement === 'bottom-start') {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition,
      },
      exit: {
        opacity: 0,
        transition,
      },
    };
  }
  if (placement === 'left' || placement === 'left-end' || placement === 'left-start') {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition,
      },
      exit: {
        opacity: 0,
        transition,
      },
    };
  }
  if (placement === 'right' || placement === 'right-end' || placement === 'right-start') {
    return {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition,
      },
      exit: {
        opacity: 0,
        transition,
      },
    };
  }
}
