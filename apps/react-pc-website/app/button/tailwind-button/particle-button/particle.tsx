import React, { type FC } from 'react';
import { type HTMLMotionProps, AnimatePresence, m, LazyMotion, domAnimation } from 'motion/react';

export type ParticleType = {
  key: React.Key;
  x: number;
  y: number;
  particles: Array<{
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
  }>;
};

export interface ParticleProps extends React.HTMLAttributes<HTMLSpanElement> {
  particles: ParticleType[];
  motionProps?: HTMLMotionProps<'span'>;
  style?: React.CSSProperties;
  onClear: (key: React.Key) => void;
}

export const Particle: FC<ParticleProps> = (props) => {
  const { particles = [], motionProps, style, onClear } = props;

  return (
    <>
      {particles.map((particleGroup) => (
        <LazyMotion key={particleGroup.key} features={domAnimation}>
          <AnimatePresence mode="popLayout">
            {particleGroup.particles.map((particle) => (
              <m.span
                key={particle.id}
                animate={{
                  x: particle.x + particle.vx * 50,
                  y: particle.y + particle.vy * 50,
                  opacity: 0,
                  scale: 0,
                }}
                className="m-ui-particle"
                exit={{ opacity: 0 }}
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 1,
                  scale: 1,
                }}
                style={{
                  position: 'absolute',
                  backgroundColor: particle.color,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 0,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  ...style,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                onAnimationComplete={() => {
                  // 当所有粒子动画完成时清除整个粒子组
                  if (particle.id === particleGroup.particles[particleGroup.particles.length - 1].id) {
                    onClear(particleGroup.key);
                  }
                }}
                {...motionProps}
              />
            ))}
          </AnimatePresence>
        </LazyMotion>
      ))}
    </>
  );
};

Particle.displayName = 'HeroUI.Particle';
