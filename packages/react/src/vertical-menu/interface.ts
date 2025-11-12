import type { AnimationProps } from 'motion/dist/react';
import React, { HTMLAttributes, type LiHTMLAttributes } from 'react';

/**
 * @title VerticalMenu.Root
 * @zh 除了以下属性, 还支持所有 div 元素的所有属性
 * @en In addition to the following attributes, it also supports all attributes of the div element
 */
export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpenedSubMenuValues?: string[];
  defaultSelectedValuePath?: string[];
  openedSubMenuValues?: string[];
  selectedValuePath?: string[];
  onClickSubMenu?: (value: string, finalOpenedSubMenuValues: string[], keyPath: string[], e: React.MouseEvent<HTMLDivElement>) => void;
  onClickMenuItem?: (value: string, keyPath: string[], e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * @zh 获取 Menu 容器的 div dom 元素
   * @en Get the div dom element of the menu container
   */
  ref?: React.RefObject<HTMLDivElement>;
}

/**
 * @title VerticalMenu.SubMenu
 * @zh 除了以下属性, 还支持所有 div 元素的所有属性
 * @en In addition to the following attributes, it also supports all attributes of the div element
 */
export interface VerticalSubMenuProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  /**
   * @zh 自定义 motion/react 或者 framer-motion 动画，作用在 motion.div 元素上
   * @en Customize the animation on the motion.div element of motion/react or framer-motion
   */
  customizeDivAnimate?: AnimationProps;
  /**
   * @zh 菜单的唯一标识
   * @en The unique identifier of the menu
   */
  value: string;
  /**
   * @zh 获取 SubMenu 容器的 div dom 元素
   * @en Get the div dom element of the SubMenu container
   */
  ref?: React.RefObject<HTMLDivElement>;
}

export interface SubMenuListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @zh 自定义 motion/react 或者 framer-motion 动画，作用在 motion.div 元素上
   * @en Customize the animation on the motion.div element of motion/react or framer-motion
   */
  customizeDivAnimate?: AnimationProps;
  ref?: React.RefObject<HTMLDivElement>;
}

/**
 * @title SubMenuContent
 * @zh 除了以下属性, 还支持所有 div 元素的所有属性
 * @en In addition to the following attributes, it also supports all attributes of the div element
 */
export interface SubMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  selectedClassName?: string;
  notSelectedClassName?: string;
  /**
   * @zh 获取 SubMenuContent 容器的 div dom 元素
   * @en Get the div dom element of the SubMenuContent container
   */
  ref?: React.RefObject<HTMLDivElement>;
}

/**
 * @title MenuItem
 * @zh 除了以下属性, 还支持所有 div 元素的所有属性
 * @en In addition to the following attributes, it also supports all attributes of the div element
 */
export interface MenuItemProps extends LiHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  value: string;
  selectedClassName?: string;
  notSelectedClassName?: string;
  /**
   * @zh 获取 SubMenu 容器的 div dom 元素
   * @en Get the div dom element of the SubMenu container
   */
  ref?: React.RefObject<HTMLDivElement>;
}
