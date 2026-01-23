import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { Anchor } from '@t-headless-ui/react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <Anchor.Root offset={-90} className="inline-flex flex-col">
      <Anchor.Link targetId="锚点 Anchor" activeClassName={activeClassName} className={className}>
        锚点 Anchor
      </Anchor.Link>
      <Anchor.Link targetId="结合 Tailwind" activeClassName={activeClassName} className={className}>
        结合 Tailwind
      </Anchor.Link>
      <Anchor.Link targetId="结合 CSS" activeClassName={activeClassName} className={className}>
        结合 CSS
      </Anchor.Link>
      <Anchor.Link targetId="使用方法" activeClassName={activeClassName} className={className}>
        使用方法
      </Anchor.Link>
    </Anchor.Root>
  );
}
`;

export function TailwindBasicExample() {
  return <CodePreview2 code={code} />;
}
