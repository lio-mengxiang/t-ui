/**
 * @zh 获取 DOM 元素到顶部的 offsetTop
 * @en Gets the DOM element to the top of container
 */
export const getOffsetTop = (element: HTMLElement, container: HTMLElement | Window | null): number => {
  if (!element.getClientRects().length) return 0;

  const rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (!container || container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    // 计算相对于指定容器顶部的距离(不是 window 的话，需要减去容器的 top 值)
    return rect.top - (container as HTMLElement).getBoundingClientRect().top;
  }

  return rect.top;
};
