import React from 'react';
import { useSelectInnerContext } from '../inner-context';
import type { SelectClearProps } from '../interface';

export function SelectClear({ children, ...rest }: SelectClearProps) {
  const { readOnly, disabled, popupVisible, handleClearClick, value, isMultipleMode } = useSelectInnerContext();
  // Do not render if disabled, read-only, or no value
  if (disabled || readOnly) return null;
  if (isMultipleMode && Array.isArray(value) && value.length === 0) return null;
  if (!isMultipleMode && !value) return null;

  return (
    <div
      aria-hidden="true"
      aria-disabled={!!disabled}
      aria-readonly={!!readOnly}
      data-visible={popupVisible}
      {...rest}
      onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        rest?.onMouseDown?.(event);
      }}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        handleClearClick(event);
        rest?.onClick?.(event);
      }}
    >
      {children}
    </div>
  );
}
