import type { Dispatch, MouseEvent } from 'react';

export interface MenuContextProps {
  defaultOpenedSubMenuValues: string[];
  defaultSelectedValuePath: string[];
  finalOpenedSubMenuValues: string[];
  setFinalOpenedSubMenuValues: Dispatch<React.SetStateAction<string[]>>;
  finalSelectedValuePath: string[];
  setFinalSelectedValuePath: Dispatch<React.SetStateAction<string[]>>;
  onClickSubMenuContext: (
    e: MouseEvent<HTMLDivElement>,
    {
      disabled,
      value,
      keyPath,
    }: {
      disabled: boolean;
      value: string;
      keyPath: string[];
    },
  ) => void;
  onClickMenuItemContext: (
    e: MouseEvent<HTMLDivElement>,
    {
      disabled,
      value,
      keyPath,
    }: {
      disabled: boolean;
      value: string;
      keyPath: string[];
    },
  ) => void;
}

export interface SubMenuContextProps {
  disabled: boolean;
  value: string;
  isOpen: boolean;
  keyPath: string[];
  level: number;
  isSelected: boolean;
}
