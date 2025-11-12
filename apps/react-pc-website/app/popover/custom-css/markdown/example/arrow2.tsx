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
      <Popover.Content className="t-popup popover-content">
          Popover Content
          <div className="popover-content-arrow"></div>
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
  z-index: 1001;
  position: relative;
  --popover-content-margin: 8px;
  --popover-arrow-width: 8px;
  --border-popover-color: var(--border-color);
}

.popover-content-arrow {
  position: absolute;
  z-index: 1;
  background-color: inherit;

  &::before {
    position: absolute;
    content: '';
    width: var(--popover-arrow-width);
    height: var(--popover-arrow-width);
    transform: rotate(45deg);
    background-color: inherit;
  }
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
}

/**
 * popover-content-arrow
 */
.t-popover-content[data-placement^='top'] .popover-content-arrow {
  &::before {
    border-top-left-radius: 100%;
    border-bottom: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='top-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='top'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='top-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='bottom'] .popover-content-arrow {
  top: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom-right-radius: 100%;
    border-top: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='bottom-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='bottom'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='bottom-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='left'] .popover-content-arrow {
  right: calc(1 * var(--popover-arrow-width) / 2);
  &::before {
    border-top: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='left-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='left'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='left-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='right'] .popover-content-arrow {
  left: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='right-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='right'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='right-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}
`;

export function Arrow2Example() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
