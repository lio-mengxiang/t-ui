import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `
function App() {
  return (
    <div className="input">
      <InputComponent className="input-inner" placeholder="Enter" allowClear clearIcon={<IconCloseLine className="input-close" />} />
    </div>
  );
}`;

const cssCode = `.input {
  --input-padding: 6px 12px;
  --input-line-height: 1.42857;
  --input-color-text: var(--text-color);
  --input-font-size: 14px;
  --input-color-text-placeholder: var(--text-color-placeholder);
  --input-bg-color: transparent;
  --input-border-color: var(--tw-color-blue-600);
  --input-default-color: var(--border-color);
  --input-border-radius: 8px;
  --input-inner-padding: 0 4px;
  --input-icon-hover-bg: var(--bg-color-100);
  display: inline-flex;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0%);
  box-sizing: border-box;
  border: 1px solid var(--input-default-color);
  border-radius: var(--input-border-radius);
  padding: var(--input-padding);

  &::placeholder {
    color: var(--input-color-text-placeholder);
  }

  &&-focus {
    border-color: var(--input-border-color);
  }

  &:hover {
    border-color: var(--input-border-color);
  }

  > .input-inner {
    flex: 1;
    border: none;
    outline: none;
    padding: 0;
    max-width: 100%;
    min-width: 0;
    font: inherit;
    white-space: nowrap;
    background-color: var(--input-bg-color);
    /* 默认换行行为：只在允许的断点处换行，防止长单词或URL溢出容器 */
    word-wrap: normal;
    color: var(--input-color-text);
    line-height: var(--input-line-height);
    font-size: var(--input-font-size);
    box-sizing: border-box;
    transition:
      color 0.1s linear,
      border-color 0.1s linear,
      background-color 0.1s linear;
    padding: var(--input-inner-padding);
  }

  > .input-addon {
    user-select: none;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    color: var(--text-color-500);
  }

  & > span > .input-close {
    cursor: pointer;
    color: var(--input-color-text);
    visibility: hidden;
    transition: all linear 0.1s;
    &:hover {
      background-color: var(--input-icon-hover-bg);
      border-radius: 50%;
    }
  }

  &:hover {
    & > span > .input-close {
      visibility: visible;
    }
  }
}`;

export function BasicInputExample() {
  return <CodePreview cssCode={cssCode} code={code} />;
}
