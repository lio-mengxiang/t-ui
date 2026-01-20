import { createNestedLineLink, type NestedAnchorLinkProps } from './createNestedLineLink';
import { Anchor, type AnchorProps } from '@t-headless-ui/react';
import { LinkItem } from './line';

interface TAnchorProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function TLineAnchor({ items, offset, ...restProps }: TAnchorProps) {
  return (
    <Anchor.Root {...restProps} offset={offset}>
      <div className="overflow-y-auto relative">
        <LinkItem />
        {createNestedLineLink(items, 0)}
      </div>
    </Anchor.Root>
  );
}
