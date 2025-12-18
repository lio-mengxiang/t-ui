import { ReactNode, type HTMLAttributes } from 'react';

/**
 * @title Empty
 */
export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @zh 显示文案
   * @en Description of empty content
   */
  description?: ReactNode;
  /**
   * @zh 自定义显示图案
   * @en Custom icon
   */
  icon?: ReactNode;
  /**
   * @zh 将图标替换为图片
   * @en Replace icon with picture
   */
  imgSrc?: string | undefined;
  /**
   * @zh 图标类名
   * @en Icon class name
   */
  iconClassName?: string | undefined;
}
