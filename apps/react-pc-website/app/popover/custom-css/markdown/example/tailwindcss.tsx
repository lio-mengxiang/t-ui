import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './arrow.css';

const code = `import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className="t-popup popover-content">
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
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  --popover-content-margin: 8px;
  --popover-content-arrow-margin: 12px;
}
.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: var(--popover-content-margin);
}

.t-popover-content[data-placement^='bottom'] .popover-content {
  margin-top: var(--popover-content-margin);
}

.t-popover-content[data-placement^='left'] .popover-content {
  margin-right: var(--popover-content-margin);
}

.t-popover-content[data-placement^='right'] .popover-content {
  margin-left: var(--popover-content-margin);
}`;

export function CssStrongExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
