import React from 'react';

export function addLink(linkMap: React.RefObject<Map<string, HTMLElement>>, targetId: string, element: HTMLElement) {
  if (targetId) {
    linkMap.current.set(targetId, element);
  }
}
