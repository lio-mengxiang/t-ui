import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <TAnchor
      offset={-90}
      items={[
        {
          text: 'Basic',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: 'Nested',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: 'Container',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: 'Custom1',
          activeClassName: activeClassName,
          className: className,
        },
      ]}
    />
  );
}
`;

export function BasicExample() {
  return <CodePreview2 code={code} />;
}
