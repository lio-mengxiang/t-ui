import { getNodeName } from '../../mini-floating-ui/utils/getNodeName';
import { isHTMLElement } from '../../mini-floating-ui/utils/isHTMLElement';

export function isNeedListParent({ isInScrollContainer, scrollContainer }) {
  return (
    isInScrollContainer &&
    isHTMLElement(scrollContainer.current) &&
    ['html', 'body', '#document'].indexOf(getNodeName(scrollContainer.current)) <= 0
  );
}
