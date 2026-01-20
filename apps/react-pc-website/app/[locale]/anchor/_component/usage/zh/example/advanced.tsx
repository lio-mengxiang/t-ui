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
          text: '锚点 Anchor',
          activeClassName: activeClassName,
          className: className,
          // 展示 items 属性设置子项的效果
          items: [
            {
              text: '结合 Tailwind',
              activeClassName: activeClassName,
              className: className,
            },
          ],
        },
        {
          text: '结合 CSS',
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

export function AdvancedExample() {
  return <CodePreview2 code={code} />;
}
