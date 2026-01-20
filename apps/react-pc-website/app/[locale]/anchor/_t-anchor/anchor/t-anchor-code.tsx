import { CodeBlock } from '@/_components/typography';

export function TAnchorCode() {
  return (
    <div>
      <div className="mb-3 text-color-500">↓ TAnchor.tsx:</div>
      <CodeBlock
        code={`
import { createNestedLink, type NestedAnchorLinkProps } from './createNestedLink';
import { Anchor, type AnchorProps } from '@t-headless-ui/react';

interface TAnchorProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

export function TAnchor({ items, offset, ...restProps }: TAnchorProps) {
  return (
    <Anchor.Root {...restProps} offset={offset}>
      <div className="overflow-y-auto">{createNestedLink(items, 0)}</div>
    </Anchor.Root>
  );
}
`}
        language="jsx"
      />
      <div className="mb-3 text-color-500 mt-4">↓ createNestedLink.tsx</div>
      <CodeBlock
        code={`
import { cs } from '@/_utils';
import { Anchor, type AnchorLinkProps } from '@t-headless-ui/react';

export interface NestedAnchorLinkProps {
  text: string;
  activeClassName?: AnchorLinkProps['activeClassName'];
  className?: AnchorLinkProps['className'];
  items?: NestedAnchorLinkProps[];
}

export function createNestedLink(items?: NestedAnchorLinkProps[], level: number = 0) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <Anchor.Link
          targetId={item.text}
          key={index}
          style={{ '--indent': level } as React.CSSProperties}
          className={cs('ml-[calc(var(--indent)*4px)]', item.className)}
          activeClassName={item.activeClassName}
        >
          {item.text}
          {createNestedLink(item.items, level + 1)}
        </Anchor.Link>
      ))
    : null;
}
`}
        language="jsx"
      />
      <div className="mb-3 text-color-500 mt-4">↓ cs.tsx:</div>
      <CodeBlock
        code={`
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cs(...args: classNames.ArgumentArray): string {
  return twMerge(classNames(...args));
}
`}
        language="jsx"
      />
    </div>
  );
}
