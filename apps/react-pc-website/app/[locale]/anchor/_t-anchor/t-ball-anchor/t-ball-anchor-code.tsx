import { CodeBlock } from '@/_components/typography';

export function TBallAnchorCode() {
  return (
    <div>
      <div className="mb-3 text-color-500">↓ TBallAnchor.tsx:</div>
      <CodeBlock
        code={`
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
`}
        language="jsx"
      />
      <div className="mb-3 text-color-500 mt-4">↓ createNestedLineLink.tsx</div>
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

export function createNestedLineLink(items?: NestedAnchorLinkProps[], level: number = 0) {
  return Array.isArray(items)
    ? items.map((item, index) => (
        <div key={index}>
          <Anchor.Link
            targetId={item.text}
            style={{ '--indent': level } as React.CSSProperties}
            className={cs('ml-[calc(var(--indent)*12px)]', item.className)}
            activeClassName={item.activeClassName}
          >
            <div className="mb-3 ml-4">{item.text}</div>
          </Anchor.Link>
          {createNestedLineLink(item.items, level + 1)}
        </div>
      ))
    : null;
}
`}
        language="jsx"
      />
      <div className="mb-3 text-color-500 mt-4">↓ LinkBallItem.tsx:</div>
      <CodeBlock
        code={`
'use client';

import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { Anchor } from '@t-headless-ui/react';

const BALL_SIZE = 8;

export const LinkBallItem = () => {
  const { currentId, linkMap } = useContext(Anchor.Context);
  const ref = useRef<HTMLDivElement>(null);

  const [ballStyle, setBallStyle] = useState<React.CSSProperties>({
    top: 0,
  });

  useLayoutEffect(() => {
    const currentLink = linkMap.current.get(currentId);

    if (currentLink) {
      setBallStyle({
        top: currentLink.offsetTop + currentLink.offsetHeight / 2 - BALL_SIZE / 2,
      });
    }
  }, [currentId, linkMap]);

  return (
    <div className="absolute top-0 left-0 h-full w-[1px]  bg-color-300 flex justify-center">
      {/* 轨道（可选） */}
      <div className="absolute w-[1px]" />
      {/* Ball */}
      <div
        ref={ref}
        className="
          absolute
          w-2 h-2
          rounded-full
          bg-primary-color
          transition-all
          duration-300
          ease-out
        "
        style={ballStyle}
      />
    </div>
  );
};
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
