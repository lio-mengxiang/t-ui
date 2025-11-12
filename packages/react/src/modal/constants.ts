import { Variants } from 'motion/react';

export const modalAnimation: Variants = {
  initial: {
    scale: 0.96,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.96,
    opacity: 0,
  },
};
export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.3,
  },
  exit: {
    opacity: 0,
  },
};

export const duration1 = { duration: 0.1 };
export const duration2 = { duration: 0.1 };
