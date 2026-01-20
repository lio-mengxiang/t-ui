import { createNestedLineLink, type NestedAnchorLinkProps } from './createNestedLineLink';
import { Anchor, type AnchorProps } from '@t-headless-ui/react';
import { LinkBallItem } from './line-ball';

interface TAnchorProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function TBallAnchor({ items, offset, ...restProps }: TAnchorProps) {
  return (
    <Anchor.Root {...restProps} offset={offset}>
      <div className="overflow-y-auto relative">
        <LinkBallItem />
        {createNestedLineLink(items, 0)}
      </div>
    </Anchor.Root>
  );
}
