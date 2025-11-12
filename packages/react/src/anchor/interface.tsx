import React, { type HTMLAttributes } from 'react';

/**
 * @title Anchor
 */
export interface AnchorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * @zh 滚动容器。传入选择器或者dom元素。
   * @en Scrolling container. Pass in selector or DOM Element
   */
  scrollContainer?: string | HTMLElement | Window;
  /**
   * @zh 滚动时锚点改变或点击锚点时触发
   * @en Callback fired when anchor state changes
   */
  onChange?: (newLink: string, oldLink: string) => void;
  /**
   * @zh 滚动至距离目标锚点位置指定的偏移量 `offset` 时触发
   * @en Fired when scrolling to the specified offset `offset` from the target anchor position
   * @default 0
   */
  offset?: number;
  /**
   * @zh 获取 SubMenuContent 容器的 div dom 元素
   * @en Get the div dom element of the SubMenuContent container
   */
  ref?: React.RefObject<HTMLDivElement>;
  /**
   * @zh 锚点在 url 中的 queryKey
   * @en The queryKey of the anchor in the url
   * @default "anchor-id"
   */
  queryKey?: string;
  /**
   * @zh 是否关闭初始化 anchor 定位功能，如果关闭 queryKey 会失效
   * @en Whether to close the initialization of anchor positioning，if closed, queryKey will be invalid
   * @default false
   */
  isCloseInitAnchor?: boolean;
}

/**
 * @title Anchor.Link
 */
export interface AnchorLinkProps extends HTMLAttributes<HTMLDivElement> {
  targetId: string;
  activeClassName?: string;
  className?: string;
}
