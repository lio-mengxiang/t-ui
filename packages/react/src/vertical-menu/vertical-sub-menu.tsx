'use client';

import React, { useContext, forwardRef } from 'react';
import { MenuContext } from './menu-context';
import { SubMenuContext } from './sub-menu-context';

import type { VerticalSubMenuProps } from './interface';
import { hasIntersection } from '../utils';

export const VerticalSubMenu = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<VerticalSubMenuProps & React.HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  const { children, disabled, value, ...restProps } = props;

  const { finalOpenedSubMenuValues, onClickSubMenuContext, finalSelectedValuePath } = useContext(MenuContext);
  const { keyPath, level } = useContext(SubMenuContext);

  const isOpen = finalOpenedSubMenuValues.includes(value);

  const currLevel = level !== undefined ? level + 1 : 0;
  const nextKeyPath = keyPath ? [...keyPath, value] : [value];

  const isSelected = hasIntersection(nextKeyPath, finalSelectedValuePath);

  const onClick = (e) => {
    e.stopPropagation();
    onClickSubMenuContext(e, { disabled, value, keyPath: nextKeyPath });
  };

  return (
    <SubMenuContext.Provider value={{ disabled, value, isOpen, keyPath: nextKeyPath, level: currLevel, isSelected }}>
      <div ref={ref} {...restProps} onClick={onClick}>
        {children}
      </div>
    </SubMenuContext.Provider>
  );
});
