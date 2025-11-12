import { isContainingBlock } from '../../mini-floating-ui/utils/isContainingBlock';

export function getContainingBlock(element: Element) {
  let currentNode = element.parentElement;
  while (currentNode) {
    if (isContainingBlock(currentNode)) return currentNode;
    currentNode = currentNode.parentElement;
  }
  return null;
}
