import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点击我</TButton>
      </Popover.Trigger>
      <Popover.Content className="p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm z-[1001] relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]">
          Popover Content
      </Popover.Content>
    </Popover.Root>
  );
}`;

export function BasicTailwindContentExample() {
  return <CodePreview code={code} />;
}
