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
      <Popover.Content>
        <div className="px-2.5 py-1 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md mb-1.5 border border-[var(--border-color)] rounded text-sm">
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;

export function BasicTailwindExample() {
  return <CodePreview code={code} />;
}
