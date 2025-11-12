import type { ClientRectObject, VirtualElement } from '../interface';

/**
 * getBoundingClientRect width scaled
 */
export function getBoundingClientRect(element: Element | VirtualElement): ClientRectObject {
  const clientRect = element.getBoundingClientRect();

  const x = clientRect.left;
  const y = clientRect.top;
  const width = clientRect.width;
  const height = clientRect.height;

  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y,
  };
}
