import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { Anchor } from '@t-headless-ui/react';

function App() {
  return (
    <Anchor.Root offset={-90} className="w-48">
      <Anchor.Link targetId="锚点 Anchor" activeClassName="anchor-link-active" className="anchor-link">
        锚点 Anchor
      </Anchor.Link>
      <Anchor.Link targetId="结合 Tailwind" activeClassName="anchor-link-active" className="anchor-link">
        结合 Tailwind
      </Anchor.Link>
      <Anchor.Link targetId="结合 CSS" activeClassName="anchor-link-active" className="anchor-link">
        结合 CSS
      </Anchor.Link>
      <Anchor.Link targetId="使用方法" activeClassName="anchor-link-active" className="anchor-link">
        使用方法
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
