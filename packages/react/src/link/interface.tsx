import React, { type AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @zh 是否禁用
   * @en Whether to disable the button
   */
  disabled?: boolean;
  /**
   * @zh 点击按钮的回调
   * @en Callback fired when the button is clicked
   */
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  ref?: React.Ref<HTMLAnchorElement>;
}
