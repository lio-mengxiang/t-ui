import { RefObject } from 'react';
import { findNode } from './findNode';
import { getOffsetTop } from './getOffsetTop';
import { getScrollLeft } from './getScrollLeft';
import { getScrollTop } from './getScrollTop';
import { isWindow } from '../../utils';
// type
import type { AnchorProps } from '../interface';

interface IScrollIntoView {
  scrollContainer: RefObject<HTMLElement | Window>;
  targetId?: string;
  offset: AnchorProps['offset'];
  isScrolling: RefObject<boolean>;
}

export function scrollIntoView({ scrollContainer, targetId, offset, isScrolling }: IScrollIntoView) {
  if (!targetId) return;
  const element = findNode(document, `#${CSS.escape(targetId)}`);
  if (!element) return;

  const container = scrollContainer.current;

  const scrollTop = getScrollTop(container);
  const offsetTop = getOffsetTop(element, container);

  const targetScrollTop = scrollTop + offsetTop + offset;
  isScrolling.current = true;

  if (isWindow(container)) {
    (container as Window).scrollTo(getScrollLeft(container), targetScrollTop);
  } else {
    (container as HTMLElement).scrollTop = targetScrollTop;
  }
}
