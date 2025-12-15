import React from 'react';
import { LinkItem } from './item';

export interface NestedAnchorLinkProps {
  level: number;
  text: string;
  items?: NestedAnchorLinkProps[];
}

export function createNestedLink(items?: NestedAnchorLinkProps[]) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <div key={index}>
          <LinkItem item={item} />
          {createNestedLink(item.items)}
        </div>
      ))
    : null;
}
