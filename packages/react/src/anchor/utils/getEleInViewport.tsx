import { isWindow } from '../../utils';
import { type RefObject } from 'react';
import { findNode } from './findNode';
import { getContainerElement } from './getContainerElement';

interface IGetEleInViewport {
  scrollContainer: RefObject<HTMLElement | Window>;
  linkMap: RefObject<Map<string, HTMLElement>>;
}

/**
 * find the first anchor element which is show in the scrollContainer
 */
export function getEleInViewport({ linkMap, scrollContainer }: IGetEleInViewport) {
  const container = scrollContainer.current;
  const containerElement = getContainerElement(container);
  const containerRect = containerElement.getBoundingClientRect();
  const hashes = Array.from(linkMap.current.keys());

  // 存储所有可见元素的位置信息
  const visibleElements: { element: HTMLElement; top: number }[] = [];

  for (const hash of hashes) {
    const element = findNode(document, '#' + CSS.escape(hash));
    if (element) {
      const { top } = element.getBoundingClientRect();
      const offsetTop = isWindow(container) ? top : top - containerRect.top;

      if (offsetTop >= 0) {
        visibleElements.push({ element, top: offsetTop });
      }
    }
  }

  // 如果没有可见元素，返回 null
  if (visibleElements.length === 0) {
    return null;
  }

  // 返回 top 值最小的元素
  return visibleElements.reduce((prev, curr) => (prev.top <= curr.top ? prev : curr)).element;
}
