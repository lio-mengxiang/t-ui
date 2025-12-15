import React from 'react';
import { LinkItem } from './item';
import { Anchor } from '@t-headless-ui/react';

export interface NestedAnchorLinkProps {
  level: number;
  text: string;
  items?: NestedAnchorLinkProps[];
}

export function createNestedLink(items?: NestedAnchorLinkProps[]) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <Anchor.Link targetId={item.text} key={index}>
          <LinkItem item={item} />
          {createNestedLink(item.items)}
        </Anchor.Link>
      ))
    : null;
}
