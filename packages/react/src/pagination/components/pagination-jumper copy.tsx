'use client';
import React from 'react';
import { InputComponent } from '../../input';
import { useJumperStore } from '../store';
import { isUndefined } from '../../utils';
import { usePaginationInnerContext } from '../pagination-inner-context';
import type { PaginationJumperProps } from '../interface';

export function PaginationJumper(props: PaginationJumperProps) {
  const { showCurrent, className, style } = props;
  const { current, disabled, allPages, onPageNumberChange } = usePaginationInnerContext();
  const { inputText, inputRef, handleChange, handleJump } = useJumperStore(
    {
      disabled,
      allPages: allPages,
      current: current,
      onPageNumberChange,
      showCurrent,
    },
    showCurrent ? current : undefined,
  );

  return (
    <InputComponent
      ref={inputRef}
      value={!isUndefined(inputText) ? inputText.toString() : undefined}
      disabled={disabled || !allPages}
      onChange={handleChange}
      onPressEnter={handleJump}
      onBlur={handleJump}
      className={className}
      style={style}
    />
  );
}
