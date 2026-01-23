import { CodeBlock } from '@/_components/typography';

export function TAnchorCode() {
  return (
    <div>
      <div className="mb-3 text-color-500">↓ TAnchor.tsx:</div>
      <CodeBlock
        code={`
import { Anchor, type AnchorProps, type AnchorLinkProps } from '@t-headless-ui/react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TAnchorProps extends AnchorProps {
  items: NestedAnchorLinkProps[];
}

interface NestedAnchorLinkProps {
  text: string;
  activeClassName?: AnchorLinkProps['activeClassName'];
  className?: AnchorLinkProps['className'];
  items?: NestedAnchorLinkProps[];
}

export function TAnchor({ items, offset, ...restProps }: TAnchorProps) {
  return (
    <Anchor.Root {...restProps} offset={offset}>
      <div className="overflow-y-auto">{createNestedLink(items, 0)}</div>
    </Anchor.Root>
  );
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

export function cs(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}
`}
        language="jsx"
      />
    </div>
  );
}
