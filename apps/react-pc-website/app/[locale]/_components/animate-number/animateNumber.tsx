import { useEffect, useRef, useMemo, type ReactNode } from 'react';
import gsap from 'gsap';
import { cs } from '@/_utils';

interface AnimateNumberProps {
  value: number | string | ReactNode[];
  duration?: number;
  stagger?: number; // 每一位之间的延迟
  className?: string;
}

export function AnimateNumber({ value, duration = 0.3, stagger = 0.02, className }: AnimateNumberProps) {
  const digits = Array.isArray(value) ? value : String(value).split('');
  const prevDigitsRef = useRef<ReactNode[]>(digits);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxLen = Math.max(prevDigitsRef.current.length, digits.length);

  // 将位数补齐，保持一致的长度
  const paddedOld = useMemo(() => padDigits(prevDigitsRef.current, maxLen), [prevDigitsRef.current, maxLen]);
  const paddedNew = useMemo(() => padDigits(digits, maxLen), [digits, maxLen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (paddedOld.join('') === paddedNew.join('')) return;

      gsap.to(
        paddedNew.map((digit, i) => `.digit-${paddedNew.length - i - 1}`),
        {
          y: '+=-1em',
          opacity: 1,
          duration,
          stagger,
          ease: 'power1.inOut',
        },
      );

      // const tl = gsap.timeline();
      // animTargets.forEach((t) => {
      //   gsap.to(t, {
      //     y: '+=-1em',
      //     opacity: 1,
      //     duration,
      //     stagger,
      //     ease: 'power3.inOut',
      //   });
      // });
    }, containerRef);

    prevDigitsRef.current = digits;

    return () => ctx.revert();
  }, [digits, duration, stagger]);

  return (
    <div ref={containerRef} className={cs('flex', className)}>
      {paddedNew.map((digit, i) => (
        <DigitPair key={i} index={i} oldDigit={paddedOld[i]} newDigit={digit} />
      ))}
    </div>
  );
}

function padDigits(arr: ReactNode[], len: number) {
  const delta = len - arr.length;
  return [...Array(delta).fill(' '), ...arr];
}

function DigitPair({ index, oldDigit, newDigit }: { index: number; oldDigit: ReactNode; newDigit: ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '1em',
      }}
    >
      <div key={String(oldDigit)} className={`digit-${index} y-0 leading-[1em] h-[1em]`}>
        {oldDigit}
      </div>
      <div key={String(newDigit + '1')} className={`digit-${index} y-[1em] leading-[1em] h-[1em]`}>
        {newDigit}
      </div>
    </div>
  );
}
