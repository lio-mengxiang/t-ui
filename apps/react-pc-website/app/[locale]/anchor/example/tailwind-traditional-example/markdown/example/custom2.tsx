import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <TBallAnchor
      offset={-90}
      className="inline-flex"
      items={[
        {
          text: '基础锚点',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: '嵌套锚点',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: '自定义游标锚点',
          activeClassName: activeClassName,
          className: className,
        },
        {
          text: '指定容器锚点',
          activeClassName: activeClassName,
          className: className,
        },
      ]}
    />
  );
}
`;

export function Custom2CursorExample() {
  return <CodePreview2 code={code} />;
}
