import React, { useCallback, useState } from 'react';

export function getUniqueID(prefix: string) {
  return `${prefix}-${Math.floor(Math.random() * 1000000)}`;
}

export type RippleType = {
  key: React.Key;
  x: number;
  y: number;
  size: number;
};

export function useRipple() {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const onClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // 注意和 e.target 的区别
    const trigger = event.currentTarget;

    // 计算波纹直径：取按钮宽高中的较大值，确保波纹能完全覆盖按钮
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        // x 是点击位置相对于按钮左上角的横向偏移（减去半径使波纹居中）
        x: event.clientX - rect.x - size / 2,
        // y 是点击位置相对于按钮左上角的纵向偏移（减去半径使波纹居中）
        y: event.clientY - rect.y - size / 2,
      },
    ]);
  }, []);

  const onClear = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);

  return { ripples, onClear, onClick };
}

export type UseRippleReturn = ReturnType<typeof useRipple>;
