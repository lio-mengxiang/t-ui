import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
'use client';
import React from 'react';
import { InputTag, IconCloseLine } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function App() {
  return (
    <InputTag.Root className="input-tag-root">
      <div className="input-tag-wrapper">
        <InputTag.Tag
          renderTag={({ label, closable, onClose, disabled }, index) => (
            <div key={index} className={\`input-tag-item \${disabled ? 'is-disabled' : ''}\`}>
              <span className="input-tag-item-label">{label}</span>
              {closable && !disabled && (
                <button type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(e);
                  }}
                  className="input-tag-item-close"
                >
                  <IconCloseLine />
                </button>
              )}
            </div>
          )}
        />
        <InputTag.Input
          placeholder="Enter tags..."
          className="input-tag-input"
        />
      </div>
      <div className="input-tag-clear-container">
        <InputTag.Clear>
          <IconCloseLine className="input-tag-clear-icon" />
        </InputTag.Clear>
      </div>
    </InputTag.Root>
  );
}
`;

const css = `
/* Container root node */
.input-tag-root {
  display: flex;
  align-items: center;
  min-height: 34px;
  overflow: hidden;
  border-radius: 4px; /* rounded */
  border: 1px solid var(--border-color);
  padding-left: 12px;
  padding-right: 12px;
  transition: all 0.2s;
  cursor: text;
  background-color: transparent;
}

/* Hover state */
.input-tag-root:hover {
  border-color: var(--border-color-200);
}

/* Focus state (based on data-focused attribute) */
.input-tag-root[data-focused="true"] {
  border-color: var(--border-color-200);
}

/* Disabled state */
.input-tag-root[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.6;
  border-color: var(--border-color);
}

/* Read-only state */
.input-tag-root[aria-readonly="true"] {
  cursor: default;
  border-color: var(--border-color);
}

/* Inner wrapper layer */
.input-tag-wrapper {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px; /* gap-1 */
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 0;
}

/* Individual tag style */
.input-tag-item {
  display: flex;
  align-items: center;
  height: 24px;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color-100);
  padding-left: 8px; /* pl-2 */
  padding-right: 4px; /* px-1 */
  font-size: 12px;
  line-height: 22px;
}

.input-tag-item.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Tag label */
.input-tag-item-label {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 4px;
}

/* Tag close button */
.input-tag-item-close {
  display: flex;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-color-400);
  transition: color 0.2s;
}

.input-tag-item-close:hover {
  color: var(--border-color-200);
}

/* Input field style */
.input-tag-input {
  flex: 1;
  min-width: 40px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.input-tag-input[aria-disabled="true"] {
  cursor: not-allowed;
}

.input-tag-input[aria-readonly="true"] {
  cursor: default;
}

/* Right clear button container */
.input-tag-clear-container {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding-left: 4px;
  visibility: hidden; /* hidden by default */
  transition: all 0.2s;
}

/* Show clear button on parent hover */
.input-tag-root:hover .input-tag-clear-container {
  visibility: visible;
}

/* Clear icon */
.input-tag-clear-icon {
  cursor: pointer;
  font-size: 14px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.input-tag-clear-icon:hover {
  opacity: 1;
}
`;

export function BasicExample() {
  return <CodePreview2 code={code} css={css} cssEditable />;
}
