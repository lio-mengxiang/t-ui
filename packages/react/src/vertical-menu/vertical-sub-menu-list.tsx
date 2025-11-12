'use client';

import React, { forwardRef, useContext } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SubMenuContext } from './sub-menu-context';

import type { SubMenuListProps } from './interface';

const overflowHidden = {
  overflow: 'hidden',
};
export const VerticalSubMenuList = forwardRef<HTMLDivElement, React.PropsWithChildren<SubMenuListProps>>(
  ({ children, customizeDivAnimate, ...props }, ref) => {
    const { isOpen } = useContext(SubMenuContext);

    return (
      <AnimatePresence>
        {isOpen &&
          (customizeDivAnimate ? (
            <motion.div {...customizeDivAnimate}>
              <div ref={ref} {...props}>
                {children}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.2 }}
              exit={{ height: 0 }}
              style={overflowHidden}
            >
              <div ref={ref} {...props}>
                {children}
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    );
  },
);
