import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './arrow.css';

const code = `import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className="t-popup">
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;

const cssCode = `.t-popup {
  padding: 4px 10px;
  background: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
}`;

export function CssExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
