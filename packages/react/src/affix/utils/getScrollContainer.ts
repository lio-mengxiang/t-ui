import type { ScrollContainer, ScrollContainerElement } from '../interface';

export const getScrollContainer = (container: ScrollContainer = 'body'): ScrollContainerElement => {
  if (typeof container === 'string') {
    return container ? (document.querySelector(container) as HTMLElement) : window;
  }
  if (typeof container === 'function') {
    return container();
  }
  return container as Window | HTMLElement;
};
