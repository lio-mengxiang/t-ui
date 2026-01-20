import { cs } from '@/_utils';
import { Anchor, type AnchorLinkProps } from '@t-headless-ui/react';

export interface NestedAnchorLinkProps {
  text: string;
  id?: string;
  activeClassName?: AnchorLinkProps['activeClassName'];
  className?: AnchorLinkProps['className'];
  items?: NestedAnchorLinkProps[];
}

export function createNestedLink(items?: NestedAnchorLinkProps[], level: number = 0) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <div key={index}>
          <Anchor.Link
            targetId={item.id || item.text}
            style={{ '--indent': level } as React.CSSProperties}
            className={cs('ml-[calc(var(--indent)*12px)]', item.className)}
            activeClassName={item.activeClassName}
          >
            <div className="mb-3">{item.text}</div>
          </Anchor.Link>
          {createNestedLink(item.items, level + 1)}
        </div>
      ))
    : null;
}
