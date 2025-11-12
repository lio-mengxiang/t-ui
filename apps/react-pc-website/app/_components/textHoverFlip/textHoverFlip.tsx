'use client';

import React, { type CSSProperties, useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cs } from '@/_utils';

import type { TextFlipProps } from './interface';

const baseContainerStyle: CSSProperties = {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const baseDivStyle: CSSProperties = {
  display: 'flex',
};

export const TextHoverFlip: React.FC<TextFlipProps> = ({
  words,
  textOneClassName = '',
  textTwoClassName = '',
  isHover = false,
  stagger,
  duration = 0.6,
}) => {
  const tallestRef = useRef<HTMLDivElement>(null);
  const [isCopy, setIsCopy] = useState(false);
  const resizeHeight = useCallback(() => {
    tallestRef.current!.style.height = `${(tallestRef.current?.children[0] as HTMLElement)?.offsetHeight}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHeight);
    return () => {
      window.removeEventListener('resize', resizeHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 计算容器高度
    resizeHeight();
    setIsCopy(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  useGSAP(
    () => {
      if (isHover) {
        gsap.to('.line2', {
          yPercent: -100,
          duration,
          stagger,
          ease: 'power3.inOut',
        });
        gsap.to('.line1', {
          yPercent: -100,
          duration,
          stagger,
          ease: 'power3.inOut',
        });
      } else {
        gsap.to('.line1', {
          yPercent: 0,
          duration,
          stagger,
          ease: 'power3.inOut',
        });
        gsap.to('.line2', {
          yPercent: 0,
          duration,
          stagger,
          ease: 'power3.inOut',
        });
      }
    },
    { scope: tallestRef, dependencies: [isHover] },
  );

  return (
    <div ref={tallestRef} style={baseContainerStyle}>
      <Words words={words} className={textOneClassName} lineIndex={1} />
      {isCopy && <Words words={words} className={textTwoClassName} lineIndex={2} />}
    </div>
  );
};

function Words({ words, className, lineIndex }: { words: TextFlipProps['words']; className: string; lineIndex: 1 | 2 }) {
  return (
    <div style={baseDivStyle}>
      {words.map((word: string, index: number) => (
        <span key={index} className={cs(className, `line${lineIndex}`)}>
          {word}
        </span>
      ))}
    </div>
  );
}
