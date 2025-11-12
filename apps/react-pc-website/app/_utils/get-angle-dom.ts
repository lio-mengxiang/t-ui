export function getAngleDom(item: HTMLElement, pointer: { x: number; y: number }) {
  const rect = item.getBoundingClientRect();
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;

  return Math.atan2(pointer.y - centerY, pointer.x - centerX) * (180 / Math.PI);
}
