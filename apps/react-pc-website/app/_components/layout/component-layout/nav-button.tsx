import { TextHoverFlip } from '@/_components/textHoverFlip';
import React, { useMemo, useState } from 'react';

function splitStringIntoChars(input: string): string[] {
  return input.split('').map((char) => (char === ' ' ? '\u00A0' : char)); // 将空格字符替换为非断行空格
}

export function NavButton({ word, stagger }: { word: string; stagger?: number }) {
  const [isHover, setIsHover] = useState(false);
  // 分割词语为字符数组，用于 TextHoverFlip 组件的 word
  const words = useMemo(() => splitStringIntoChars(word), [word]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <TextHoverFlip words={words} isHover={isHover} stagger={stagger} />
    </div>
  );
}
