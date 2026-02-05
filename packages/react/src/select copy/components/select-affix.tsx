import React from 'react';
import { useSelectInnerContext } from '../inner-context';
import type { SelectAffixProps } from '../interface';

export function SelectAffix({ children, ...rest }: SelectAffixProps) {
  const { readOnly, disabled, popupVisible } = useSelectInnerContext();
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
    >
      {children}
    </div>
  );
}
