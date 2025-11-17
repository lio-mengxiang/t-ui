import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './css.basic.css';

const code = `import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        type="button"
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 触发');
        }}
      >
        Normal
      </Button>
      <Button
        type="button"
        disabled
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 不触发');
        }}
      >
        Disabled
      </Button>
    </div>
  );
}`;

const cssCode = `.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-primary-bg-color: #2563eb;
  --btn-primary-bg-disabled-color: #93c5fd;
  --btn-primary-text-color: #fff;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-primary-bg-disabled-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-primary-bg-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
}`;

export function CssBasicExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
