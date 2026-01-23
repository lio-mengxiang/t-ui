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
          text: '基础锚点',
          activeClassName: activeClassName,
          className: className,
          items: [
            {
              text: '嵌套锚点',
              activeClassName: activeClassName,
              className: className,
            },
            {
              text: '指定容器锚点',
              activeClassName: activeClassName,
              className: className,
            },
          ],
        },
        {
          text: '自定义锚点1',
          activeClassName: activeClassName,
          className: className,
        },
      ]}
    />
  );
}
`;

export function NestedExample() {
  return <CodePreview2 code={code} />;
}
