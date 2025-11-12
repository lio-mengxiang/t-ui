import { getBoundingClientRect } from './getBoundingClientRect';

export default function getLayoutRect(element) {
  const clientRect = getBoundingClientRect(element);

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: clientRect.width,
    height: clientRect.height,
  };
}
