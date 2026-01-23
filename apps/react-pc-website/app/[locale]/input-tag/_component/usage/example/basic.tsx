import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React, { useContext } from 'react';
import { InputTag, IconCloseLine } from '@t-headless-ui/react';
import { clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

function App() {
  return (
    <InputTag.Root>
      <CustomInputWrapper>
        <InputTag.Input
          className="input-inner"
          placeholder="Enter tags..."
          renderTag={({ label, closable, onClose, disabled }, index) => (
            <div key={index} className={cs('tag-item', { 'is-disabled': disabled })}>
              <span className="tag-item-label">{label}</span>
              {closable && !disabled && (
                <button
                  type="button"
                  className="tag-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(e);
                  }}
                >
                  <IconCloseLine />
                </button>
              )}
            </div>
          )}
        />
        <ClearButton />
      </CustomInputWrapper>
    </InputTag.Root>
  );
}

function CustomInputWrapper({ children }) {
  const { focused, disabled, readOnly } = useContext(InputTag.Context);

  return (
    <div
      className={cs('input-tag-container', {
        'is-focused': focused,
        'is-disabled': disabled,
        'is-readonly': readOnly,
      })}
    >
      {children}
    </div>
  );
}

function ClearButton() {
  const { value, disabled, readOnly, handleClearClick } = useContext(InputTag.Context);
  if (disabled || readOnly || !value?.length) return null;

  return (
    <div
      className="clear-icon-wrapper"
      onClick={(e) => {
        e.stopPropagation();
        handleClearClick(e);
      }}
    >
      <IconCloseLine style={{ cursor: 'pointer', fontSize: '14px', opacity: 0.6 }} />
    </div>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

const css = `
.input-tag-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  min-height: 32px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all 0.2s;
  cursor: text;
  overflow: hidden;
}

.input-tag-container:hover { border-color: var(--border-color-200); }
.input-tag-container.is-focused { border-color: var(--border-color-200)); }


.tag-item {
  display: flex;
  align-items: center;
  background: var(--bg-color-100);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  padding: 0 4px 0 8px;
  height: 24px;
  font-size: 12px;
  line-height: 22px;
  overflow: hidden;
}

.tag-item-label {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tag-close-btn {
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 2px;
  margin-left: 4px;
  color: var(--text-color-400);
}

.tag-close-btn:hover { color: var(--border-color-200); }

.input-inner {
  flex: 1;
  min-width: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
}
`;

export function BasicExample() {
  return <CodePreview2 code={code} css={css} cssEditable />;
}
