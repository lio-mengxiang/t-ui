import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">Open</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div style={{
          padding: '4px 10px',
          background: '#fff',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '6px',
          border: '1px solid #e8e8e8',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
