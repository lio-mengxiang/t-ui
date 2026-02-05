import React from 'react';
import { useSelectInnerContext } from '../inner-context';
import type { SelectOptionProps } from '../interface';

export function SelectOption({ item, children, ...rest }: SelectOptionProps) {
  const { isMultipleMode, handleOptionClick, selectedValue } = useSelectInnerContext();

  const isChecked = isMultipleMode ? (selectedValue as any[]).indexOf(item.value) !== -1 : selectedValue === item.value;

  return (
    <div
      role="option"
      aria-selected={isChecked}
      {...rest}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        handleOptionClick(item.value, item.disabled);
        rest?.onClick?.(event);
      }}
    >
      {children}
    </div>
  );
}
