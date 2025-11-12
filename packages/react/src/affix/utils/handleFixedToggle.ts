import React from 'react';
import { fixedDom } from './fixedDom';
import { fixedPlaceholder } from './fixedPlaceholder';

interface handleFixedToggleProps {
  fixedClassName: string;
  affixDom: HTMLDivElement;
  fixedTop: number | false;
  wrapWidth: number;
  wrapHeight: number;
  zIndex?: number;
  placeholderDom: HTMLElement;
  affixWrapDom: HTMLDivElement;
  placeholderEL: React.MutableRefObject<HTMLElement>;
  affixed: boolean;
}

export function handleFixedToggle({
  fixedClassName,
  affixDom,
  fixedTop,
  wrapWidth,
  wrapHeight,
  zIndex,
  placeholderDom,
  affixWrapDom,
  placeholderEL,
  affixed,
}: handleFixedToggleProps) {
  let placeholderStatus = affixWrapDom.contains(placeholderEL.current);
  const prePlaceholderStatus = placeholderStatus;

  if (affixed) {
    /**
     * @zh 定位
     * @en position
     */
    fixedDom({ affixDom, fixedClassName, fixedTop, wrapWidth, wrapHeight, zIndex });

    /**
     * @zh 插入占位节点
     * @en Insert the placeholder node
     */
    if (!placeholderStatus) {
      fixedPlaceholder({ placeholderDom, affixWrapDom, wrapWidth, wrapHeight });
      placeholderStatus = true;
    }
  } else if (affixDom.hasAttribute('class')) {
    affixDom.removeAttribute('class');
    affixDom.removeAttribute('style');

    /**
     * @zh 删除占位节点
     * @en Delete the placeholder node
     */
    if (placeholderStatus) {
      placeholderDom.remove();
      placeholderStatus = false;
    }
  }

  return prePlaceholderStatus !== placeholderStatus;
}
