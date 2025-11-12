import type { CSSProperties, SVGAttributes } from 'react';

type baseIconProps = {
  /**
   * @zh Icon 的大小, 单位 "em,px"，建议父元素使用 font-size 来控制 icon 大小
   * @en The size of the icon, in units of "em,px". It's recommended to use the parent element's font-size to control the icon size
   */
  size?: string | string[];
  /**
   * @zh Icon style 属性
   * @en Icon style props
   */
  style?: CSSProperties;
  /**
   * @zh Icon className 属性
   * @zh Icon className props
   * @en The icon `svg` fill color
   */
  className?: string;
  useStrokeCurrentColor?: boolean;
  useFillCurrentColor?: boolean;
};

export type IconProps = baseIconProps & Omit<SVGAttributes<SVGElement>, keyof baseIconProps>;
