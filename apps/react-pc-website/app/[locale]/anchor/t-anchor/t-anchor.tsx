import { createNestedLink, type NestedAnchorLinkProps } from './utils';
import { Anchor, type AnchorProps } from '@t-headless-ui/react';

interface TAnchorProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function TAnchor({ items, offset, ...restProps }: TAnchorProps) {
  return (
    <Anchor.Root {...restProps} offset={offset}>
      <div className="overflow-y-auto">{createNestedLink(items)}</div>
    </Anchor.Root>
  );
}
