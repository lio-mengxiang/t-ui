'use client';
import { useEffect, useRef, useState } from 'react';
import { limitPageRange } from '../utils';
import { type RefInputType } from '../../input';
import { isUndefined } from '../../utils';

export interface PageJumperProps {
  disabled?: boolean;
  rootPrefixCls?: string;
  allPages: number;
  current: number;
  onPageNumberChange?: (value) => void;
  showCurrent?: boolean;
}

export function useJumperStore(props: PageJumperProps, initInputText: number | undefined) {
  const { showCurrent, allPages, current, onPageNumberChange } = props;
  const [inputText, setInputText] = useState(initInputText);
  const inputRef = useRef<RefInputType>({});

  // 初始化输入框值为当前页
  useEffect(() => {
    if (showCurrent) {
      setInputText(current);
    }
  }, [showCurrent, current]);

  // 非数字输入时，清空输入框
  const handleChange = (val) => {
    const value = parseInt(val, 10);
    setInputText(Number.isNaN(value) ? undefined : value);
  };

  const handleJump = () => {
    if (isUndefined(inputText)) {
      return;
    }

    if (inputText === current && !showCurrent) {
      setInputText(undefined);
      return;
    }

    const page = limitPageRange(Number.isNaN(Number(inputText)) ? current : Number(inputText), allPages);

    setInputText(showCurrent ? page : undefined);
    onPageNumberChange?.(page);
  };

  return {
    inputText,
    inputRef,
    handleChange,
    handleJump,
    showCurrent,
  };
}
