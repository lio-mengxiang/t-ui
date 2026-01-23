import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <TAnchor
      offset={-90}
      className="inline-flex"
      items={[
        {
          text: 'Anchor',
          activeClassName: activeClassName,
          className: className,
          // show items property to set sub-items
          items: [
            {
              text: 'TailwindCSS Integration',
              activeClassName: activeClassName,
              className: className,
            },
          ],
        },
        {
          text: 'CSS Integration',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: 'Usage',
          activeClassName: activeClassName,
          className: className,
        },
      ]}
    />
  );
}
`;

export function AdvancedExample() {
  return <CodePreview2 code={code} />;
}
