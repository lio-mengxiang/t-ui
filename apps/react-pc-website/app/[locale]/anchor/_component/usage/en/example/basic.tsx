import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { Anchor } from '@t-headless-ui/react';

function App() {
  return (
    <Anchor.Root offset={-90} className="w-48">
      <Anchor.Link targetId="Anchor" activeClassName="anchor-link-active" className="anchor-link">
        Anchor
      </Anchor.Link>
      <Anchor.Link targetId="TailwindCSS Integration" activeClassName="anchor-link-active" className="anchor-link">
        TailwindCSS Integration
      </Anchor.Link>
      <Anchor.Link targetId="CSS Integration" activeClassName="anchor-link-active" className="anchor-link">
        CSS Integration
      </Anchor.Link>
      <Anchor.Link targetId="Usage" activeClassName="anchor-link-active" className="anchor-link">
        Usage
      </Anchor.Link>
    </Anchor.Root>
  );
}
`;

const css = `
.anchor-link {
  color: var(--text-color-500);
  font-size: 0.875rem; /* text-sm */
  cursor: pointer;
  margin-bottom: 0.75rem; /* mb-3 */
}

.anchor-link:hover {
  color: var(--color-primary);
}

.anchor-link-active {
  color: var(--color-primary);
}
`;

export function BasicExample() {
  return <CodePreview2 code={code} css={css} cssEditable />;
}
