import { useEffect, useState } from 'react';
import type { StoreInstance, ToastProps } from '../interface';

export function useTimer(props: ToastProps & { store: StoreInstance; stackExpanded?: boolean; showProgress?: boolean }) {
  const [spentTime, setSpentTime] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [percent, setPercent] = useState(0);
  const { id, duration, store, stackExpanded: forcedHovering, showProgress } = props;

  const mergedHovering = forcedHovering || hovering;
  const mergedShowProgress = duration > 0 && showProgress;

  useEffect(() => {
    if (!mergedHovering && duration > 0) {
      if (duration == null) return null;
      const start = Date.now() - spentTime;
      const timeout = setTimeout(
        () => {
          store.remove?.(id);
        },
        duration * 1000 - spentTime,
      );

      return () => {
        clearTimeout(timeout);
        setSpentTime(Date.now() - start);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, mergedHovering]);

  useEffect(() => {
    if (!mergedHovering && mergedShowProgress) {
      const start = performance.now();
      let animationFrame: number;

      const calculate = () => {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame((timestamp) => {
          // 计算从动画开始到现在经过的总时间(毫秒)
          // timestamp: requestAnimationFrame 回调函数接收的参数，表示当前帧开始绘制的时间戳(毫秒)
          // spentTime: 之前已经消耗的时间
          // start: 动画开始的时间戳
          const runtime = timestamp + spentTime - start;
          const progress = Math.min(runtime / (duration * 1000), 1);
          setPercent(progress * 100);
          if (progress < 1) {
            calculate();
          }
        });
      };

      calculate();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, spentTime, mergedHovering, mergedShowProgress]);

  const onMouseEnter = () => {
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    percent,
  };
}
