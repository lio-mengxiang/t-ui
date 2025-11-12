'use client';

import React, { forwardRef, type MouseEvent } from 'react';
import { MenuContext } from './menu-context';
import { useMergeValue } from '../hooks';
import type { MenuProps } from './interface';

export const VerticalMenuRoot = forwardRef<HTMLDivElement, React.PropsWithChildren<MenuProps & React.HTMLAttributes<HTMLDivElement>>>(
  (props, ref) => {
    const {
      children,
      defaultOpenedSubMenuValues,
      defaultSelectedValuePath,
      openedSubMenuValues,
      selectedValuePath,
      onClickSubMenu,
      onClickMenuItem,
      ...restProps
    } = props;

    const [finalOpenedSubMenuValues, setFinalOpenedSubMenuValues] = useMergeValue<string[]>([], {
      defaultValue: defaultOpenedSubMenuValues,
      value: openedSubMenuValues,
    });

    const [finalSelectedValuePath, setFinalSelectedValuePath] = useMergeValue<string[]>([], {
      defaultValue: defaultSelectedValuePath,
      value: selectedValuePath,
    });

    const handleClickItem = ({ keyPath }: { keyPath: string[] }) => {
      if (
        Array.isArray(finalSelectedValuePath) &&
        Array.isArray(keyPath) &&
        finalSelectedValuePath.length === keyPath.length &&
        finalSelectedValuePath.every((v, i) => v === keyPath[i])
      ) {
        return;
      }
      setFinalSelectedValuePath(keyPath);
    };

    const onClickSubMenuContext = (
      e: MouseEvent<HTMLDivElement>,
      { disabled, value, keyPath }: { disabled: boolean; value: string; keyPath: string[] },
    ) => {
      if (disabled) return;
      /** 已经点击，就从 finalOpenedSubMenuValues 删除，否则就添加到 finalOpenedSubMenuValues */
      const newOpenedSubMenuValues = !finalOpenedSubMenuValues.includes(value)
        ? [...finalOpenedSubMenuValues, value]
        : finalOpenedSubMenuValues.filter((v) => v !== value);
      setFinalOpenedSubMenuValues(newOpenedSubMenuValues);
      onClickSubMenu?.(value, newOpenedSubMenuValues, keyPath, e);
    };

    const onClickMenuItemContext = (
      e: MouseEvent<HTMLDivElement>,
      { disabled, value, keyPath }: { disabled: boolean; value: string; keyPath: string[] },
    ) => {
      if (disabled) return;
      onClickMenuItem?.(value, keyPath, e);
      handleClickItem({ keyPath });
    };

    return (
      <MenuContext.Provider
        value={{
          finalOpenedSubMenuValues,
          setFinalOpenedSubMenuValues,
          finalSelectedValuePath,
          setFinalSelectedValuePath,
          onClickSubMenuContext,
          onClickMenuItemContext,
        }}
      >
        <div ref={ref} {...restProps}>
          {children}
        </div>
      </MenuContext.Provider>
    );
  },
);
