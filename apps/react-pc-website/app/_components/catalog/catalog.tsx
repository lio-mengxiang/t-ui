import { Anchor, AnchorProps } from '@t-headless-ui/react';
import React from 'react';
import { createNestedLink, type NestedAnchorLinkProps } from './utils';

interface CatalogProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function Catalog({ items, ...restProps }: CatalogProps) {
  return (
    <Anchor.Root {...restProps} className="sticky top-[90px] overflow-y-auto h-[calc(100vh-100px)]">
      {createNestedLink(items)}
    </Anchor.Root>
  );
}
