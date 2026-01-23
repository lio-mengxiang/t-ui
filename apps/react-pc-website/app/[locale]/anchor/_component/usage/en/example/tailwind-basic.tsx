import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { Anchor } from '@t-headless-ui/react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <Anchor.Root offset={-90} className="inline-flex flex-col">
      <Anchor.Link targetId="Anchor" activeClassName={activeClassName} className={className}>
        Anchor
      </Anchor.Link>
      <Anchor.Link targetId="TailwindCSS Integration" activeClassName={activeClassName} className={className}>
        TailwindCSS Integration
      </Anchor.Link>
      <Anchor.Link targetId="CSS Integration" activeClassName={activeClassName} className={className}>
        CSS Integration
      </Anchor.Link>
      <Anchor.Link targetId="Usage" activeClassName={activeClassName} className={className}>
        Usage
      </Anchor.Link>
    </Anchor.Root>
  );
}
`;

export function TailwindBasicExample() {
  return <CodePreview2 code={code} />;
}
