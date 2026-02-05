import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, Select, IconEmptyFill } from '@t-headless-ui/react';

const frameworks = ['React.js', 'Vue.js', 'Angular.js', 'Svelte.js'];
const showSearch = true;
const isMultiple = true;

/**
  * waning: if you use this example, please remove the id attribute in your code
  * this just to adapt the example in the documentation to make css editable
  * id is in the <Select.View> component and <Select.Content> component
**/
const id = "css-basic-multi";

function App() {
  return (
    <Select.Root
      options={frameworks}
      showSearch={showSearch}
      isMultiple={isMultiple}
    >
      <Select.View
        id={id}
        placeholder="Select frameworks..."
        className="select-view-wrapper"
      >
        <Select.MultiInputRoot
          className={\`select-multi-root \${isMultiple ? 'is-multiple' : 'is-single'}\`}
        >
          <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', alignItems: 'center', gap: '4px', padding: '4px 0', minWidth: 0, fontSize: '14px' }}>
            <Select.MultiTag
              renderTag={({ label, closable, onClose }, index) => (
                <div key={index} className="select-tag">
                  <span className="select-tag-label">{label}</span>
                  {closable && (
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); onClose(e); }}
                      className="select-tag-close"
                    >
                      <IconCloseLine />
                    </button>
                  )}
                </div>
              )}
            />
            <Select.MultiInput />
          </div>
          
          <div className="select-actions">
            <Select.Clear className="select-clear">
              <IconCloseLine style={{ cursor: 'pointer', fontSize: '14px', opacity: 0.6 }} />
            </Select.Clear>
            <Select.Affix className="select-affix">
              <IconDownLine />
            </Select.Affix>
          </div>
        </Select.MultiInputRoot>
      </Select.View>

      <Select.Content className="select-content" attach={\`#\${id}\`}>
        <Select.Empty style={{ display: 'flex', justifyContent: 'center', padding: '8px 12px', color: 'var(--text-color-400)', fontSize: '80px' }}>
          <IconEmptyFill />
        </Select.Empty>
        
        <Select.List>
          {(item, index) => (
            <Select.Option
              key={index}
              item={item}
              activeClassName="active"
              className={\`select-option \${item.disabled ? 'is-disabled' : ''}\`}
            >
              <span style={{ flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', paddingRight: '4px' }}>
                {item.label}
              </span>
              <IconCheckLine className="check-icon" />
            </Select.Option>
          )}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
}
`;

const css = `
/* 容器 View */
.select-view-wrapper { width: 256px; }

.active {
  background-color: var(--bg-color-100);
}

/* 输入框根容器 */
.select-multi-root {
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s;
  background-color: transparent;
}

/* 布局逻辑：单选高度固定，多选最小高度 */
.select-multi-root.is-multiple { min-height: 34px; }
.select-multi-root.is-single { height: 34px; }

/* 交互状态 */
.select-multi-root:not([aria-disabled="true"]) { cursor: text; }
.select-multi-root:not([aria-disabled="true"]):hover { border-color: var(--border-color-200); }
.select-multi-root[data-focused="true"] { border-color: var(--border-color-200); }

/* 禁用状态 */
.select-multi-root[aria-disabled="true"] {
  cursor: not-allowed;
  background-color: var(--bg-color-100);
  border-color: var(--border-color);
  color: var(--text-color-400);
}

/* Tag 样式 */
.select-tag {
  display: flex;
  align-items: center;
  height: 24px;
  overflow: hidden;
  padding: 0 4px 0 8px;
  border-radius: 2px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color-100);
  font-size: 12px;
}

.select-tag-label {
  flex: 1;
  padding-right: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.select-tag-close {
  display: flex;
  align-items: center;
  padding: 0 2px;
  color: var(--text-color-400);
  transition: color 0.2s;
}

.select-tag-close:hover { color: var(--border-color-200); }

/* 操作按钮区 (Clear & Affix) */
.select-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding-left: 4px;
}

.select-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  opacity: 0;
  height: 34px;
}

.select-multi-root:hover .select-clear { opacity: 1; }

.select-affix {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  color: var(--text-color-400);
  font-size: 14px;
  cursor: pointer;
}

/* 下拉列表样式 */
.select-content {
  position: relative;
  z-index: 1000;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-color);
}

.select-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  transition: background-color 0.2s;
  cursor: pointer;
}



.select-option.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.select-option[aria-selected="true"] .check-icon { opacity: 1; }

.check-icon {
  transition: opacity 0.2s;
  opacity: 0;
}
`;

export function CssMultiExample() {
  return <CodePreview2 code={code} css={css} cssEditable isCenter demoContainerStyle={{ overflow: 'visible', zIndex: 1 }} />;
}
