import React, { type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * @zh 按钮的类型
   * @en The type of the button
   * @default button
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * @zh 是否禁用
   * @en Whether to disable the button
   */
  disabled?: boolean;
  /**
   * @zh 按钮是否是加载状态
   * @en Whether the button is in the loading state
   */
  loading?: boolean;
  /**
   * @zh 点击按钮的回调
   * @en Callback fired when the button is clicked
   */
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  ref?: React.Ref<HTMLButtonElement>;
  /**
   * @zh 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @en A variety of button types are available: `primary`, `secondary`, `dashed`,`text`, `linear` and `default` which is the secondary.
   * @defaultValue fill
   */
  type?: 'fill' | 'outline';
}
