import React from 'react';
import { omit } from '../../utils';
import { AnchorLink } from '../link';
import { type AnchorLinkProps } from '../interface';

interface NestedAnchorLinkProps extends AnchorLinkProps {
  items?: NestedAnchorLinkProps[];
}

export function createNestedLink(items?: NestedAnchorLinkProps[]) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <AnchorLink targetId={item.targetId} {...omit(item, ['children', 'targetId'])} key={item.targetId || index}>
          {createNestedLink(item.items)}
        </AnchorLink>
      ))
    : null;
}
