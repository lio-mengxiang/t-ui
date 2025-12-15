import React from 'react';
import { createNestedLink, type NestedAnchorLinkProps } from './utils';

interface CatalogProps {
  items: NestedAnchorLinkProps[];
}

export function Catalog({ items, ...restProps }: CatalogProps) {
  return (
    <div {...restProps} className="sticky top-[64px] hidden z-10 xl:flex xl:w-48 pl-0 shrink-0 h-[calc(100vh-102px)] pt-6">
      <div className="overflow-y-auto">{createNestedLink(items)}</div>
    </div>
  );
}
