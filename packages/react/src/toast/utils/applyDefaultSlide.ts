import { type Variants } from 'motion/react';

export const applyDefaultSlide = (): Variants => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      // y: 0,
    },
    exit: {
      opacity: 0,
      // y: 10,
    },
  };
};
