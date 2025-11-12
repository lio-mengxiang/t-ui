import React, { type FC } from 'react';
import { type HTMLMotionProps, AnimatePresence, m, LazyMotion, domAnimation } from 'motion/react';

/**
 * Clamps a value between a minimum and maximum range.
 *
 * @param value - The value to be clamped.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns The clamped value.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export type RippleType = {
  key: React.Key;
  x: number;
  y: number;
  size: number;
};

export interface RippleProps extends React.HTMLAttributes<HTMLSpanElement> {
  ripples: RippleType[];
  color?: string;
  motionProps?: HTMLMotionProps<'span'>;
  style?: React.CSSProperties;
  onClear: (key: React.Key) => void;
}

export const Ripple: FC<RippleProps> = (props) => {
  const { ripples = [], motionProps, color = 'currentColor', style, onClear } = props;

  return (
    <>
      {ripples.map((ripple) => {
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
        return (
          <LazyMotion key={ripple.key} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                animate={{ transform: 'scale(2)', opacity: 0 }}
                className="m-ui-ripple"
                exit={{ opacity: 0 }}
                initial={{ transform: 'scale(0)', opacity: 0.35 }}
                style={{
                  position: 'absolute',
                  backgroundColor: color,
                  borderRadius: '100%',
                  transformOrigin: 'center',
                  pointerEvents: 'none',
                  overflow: 'hidden',
                  inset: 0,
                  zIndex: 0,
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  ...style,
                }}
                transition={{ duration }}
                onAnimationComplete={() => {
                  onClear(ripple.key);
                }}
                {...motionProps}
              />
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </>
  );
};

Ripple.displayName = 'HeroUI.Ripple';
