import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  function TButton({ loading, children, size }) {
    return (
      <Button
        className={cs(
          'normal-btn btn-primary-fill',
          {
            'normal-btn-loading': !!loading,
            'btn-small': size === 'sm',
            'btn-large': size === 'lg',
          }
        )}
        onClick={() => { console.log('onClick 不会触发') }}
      >
        {loading ? (
          <IconLoadingLine className="mr-2 animate-spin" />
        ): null}
        {children}
      </Button>
    );
  }
  return (
    <div className="l btn-group">
      <TButton>
        Small
      </TButton>
      <TButton>
        Default
      </TButton>
      <TButton>
        large
      </TButton>
    </div>
  );
}`;

const cssCode = `.btn-group {
  display: inline-flex;
  --btn-radius: 4px;
}
.btn-group .normal-btn:first-child {
  border-radius: var(--btn-radius) 0 0 var(--btn-radius);
}
.btn-group .btn-outline:first-child:hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:not(:first-child):not(:last-child):hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:last-child {
  border-radius: 0 var(--btn-radius) var(--btn-radius) 0;
}
.btn-group .normal-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group .normal-btn:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 20%);
}


.btn-small {
  height: 28px
}

.btn-large {
  height: 36px
}

.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2563eb;
  --btn-bg-disabled-color: #93c5fd;
  --btn-text-color: #fff;
  --btn-bg-hover: #4670d2;
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
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}

.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-primary-fill.normal-btn-loading {
  cursor: default;
}
.btn-primary-fill:not(:disabled):not(.normal-btn-loading):hover {
  border-color: transparent;
  color: #fff;
  background-color: var(--btn-bg-hover);
}`;
export function GroupExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
