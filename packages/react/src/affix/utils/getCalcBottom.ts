import type { ScrollContainerElement } from '../interface';

interface IGetCalcBottomProps {
  scrollContainer: ScrollContainerElement;
  offsetBottom: number;
  wrapHeight: number;
  containerToTop: number;
}
/**
 * @zh calcBottom：换算为到页面顶部的距离（最终使用fixed中top来实现定位）
 * @en calcBottom: Convert the distance to the top of the viewport (ultimately, use the top in fixed for positioning)
 */
export const getCalcBottom = ({ scrollContainer, offsetBottom, wrapHeight, containerToTop }: IGetCalcBottomProps) => {
  if (!(typeof offsetBottom === 'number')) return { calcBottom: undefined };
  const containerHeight = scrollContainer[scrollContainer instanceof HTMLElement ? 'clientHeight' : 'innerHeight'] - wrapHeight;
  const calcBottom = containerToTop + containerHeight - offsetBottom;
  return { calcBottom };
};
