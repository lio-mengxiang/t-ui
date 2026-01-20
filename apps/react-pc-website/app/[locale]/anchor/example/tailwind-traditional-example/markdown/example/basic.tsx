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
          text: 'Nested anchor',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: '使用方法',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: '高级封装',
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
