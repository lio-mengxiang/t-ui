import { createNestedLink, type NestedAnchorLinkProps } from './utils';
import { Anchor, type AnchorProps } from '@t-headless-ui/react';

interface CatalogProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function Catalog({ items, offset, ...restProps }: CatalogProps) {
  return (
    <Anchor.Root
      {...restProps}
      className="sticky top-[64px] hidden z-10 xl:flex xl:w-48 pl-0 shrink-0 h-[calc(100vh-102px)] pt-6"
      offset={offset || -90}
    >
      <div className="overflow-y-auto">{createNestedLink(items)}</div>
    </Anchor.Root>
  );
}
