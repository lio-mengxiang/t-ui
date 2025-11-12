import React, { useCallback, useState } from 'react';

export function getUniqueID(prefix: string) {
  return `${prefix}-${Math.floor(Math.random() * 1000000)}`;
}

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

const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

export function useParticle() {
  const [particles, setParticles] = useState<ParticleType[]>([]);

  const onClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget;
    const rect = trigger.getBoundingClientRect();

    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // 生成多个粒子
    const particleArray = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const velocity = 2 + Math.random() * 3;
      return {
        id: getUniqueID(`particle-${i}`),
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles((prevParticles) => [
      ...prevParticles,
      {
        key: getUniqueID(prevParticles.length.toString()),
        x: clickX,
        y: clickY,
        particles: particleArray,
      },
    ]);
  }, []);

  const onClear = useCallback((key: React.Key) => {
    setParticles((prevState) => prevState.filter((particle) => particle.key !== key));
  }, []);

  return { particles, onClear, onClick };
}

export type UseParticleReturn = ReturnType<typeof useParticle>;
