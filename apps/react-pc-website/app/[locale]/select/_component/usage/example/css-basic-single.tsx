import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, Select } from '@t-headless-ui/react';

const frameworks = ['React.js', 'Vue.js', 'Angular.js', 'Svelte.js'];
const showSearch = true;
/**
  * waning: if you use this example, please remove the id attribute in your code
  * this just to adapt the example in the documentation to make css editable
  * id is in the <Select.View> component and <Select.Content> component
**/
const id = "css-basic-single";

function App() {
  return (
    <Select.Root options={frameworks} showSearch={showSearch}>
      <Select.View
        id={id}
        placeholder="Select a framework"
        className={\`select-view \${showSearch ? 'cursor-text' : 'cursor-pointer'}\`}
      >
        <div className="select-inner">
          <Select.Input />
          <Select.Clear className="select-clear">
            <IconCloseLine className="cursor-pointer opacity-60 hover:opacity-100 h-[34px]" style={{ fontSize: '14px' }} />
          </Select.Clear>
          <Select.Affix className="select-affix">
            <IconDownLine className="cursor-pointer" />
          </Select.Affix>
         </div>
      </Select.View>

      <Select.Content className="select-content" attach={\`#\${id}\`}>
        <Select.Empty className="select-empty">
          <IconEmptyFill />
        </Select.Empty>
        <Select.List>
          {(item, index) => {
            const isTitle = !!item.isGroupTitle;
            const isDisabled = item.disabled === true;
            const isGrouped = item.grouped === true;

            return (
              <Select.Option
                key={index}
                item={item}
                className={\`select-option \${isDisabled ? 'is-disabled' : ''} \${isTitle ? 'is-title' : ''}\`}
              >
                <span 
                  style={{ 
                    flex: 1, 
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis', 
                    paddingRight: '4px',
                    paddingLeft: isGrouped ? '12px' : '0'
                  }}
                >
                  {item.label}
                </span>
                <IconCheckLine className="check-icon" />
              </Select.Option>
            );
          }}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
}
`;

const css = `
/* 容器与视图逻辑 */
.select-view {
  display: flex;
  height: 34px;
  width: 256px; /* w-64 */
  align-items: center;
  overflow: hidden;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s;
}

.select-view:hover {
  border-color: var(--border-color-200);
}

/* 状态处理 */
.select-view[data-focused="true"] {
  border-color: var(--border-color-200);
}

.select-view[aria-disabled="true"] {
  cursor: not-allowed;
  border-color: var(--border-color);
  background-color: var(--bg-color-100);
  color: var(--text-color-400);
}

.select-view[aria-readOnly="true"] {
  cursor: default;
  border-color: var(--border-color);
}

.cursor-text { cursor: text; }
.cursor-pointer { cursor: pointer; }

/* 内部布局 */
.select-inner {
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
}

.select-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  opacity: 0;
}

.select-view:hover .select-clear {
  opacity: 1;
}

.select-affix {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  color: var(--text-color-400);
  font-size: 14px;
}

/* 下拉内容区 */
.select-content {
  position: relative;
  z-index: 1000; /* z-popup */
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  font-size: 14px; /* text-sm */
  color: var(--text-color);
}

.select-empty {
  display: flex;
  justify-content: center;
  padding: 8px 12px;
  color: var(--text-color-400);
  font-size: 80px; /* text-8xl */
}

/* 选项样式 */
.select-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  transition: background-color 0.2s;
  cursor: pointer;
}

.select-option:hover {
  background-color: var(--bg-color-100);
}

.select-option.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.select-option.is-disabled:hover {
  background-color: transparent;
}

.select-option.is-title {
  color: var(--text-color-400);
  font-size: 12px;
  cursor: default;
  background-color: transparent;
  pointer-events: none;
}

/* 选中图标 */
.check-icon {
  transition: all 0.2s;
  opacity: 0;
}
.select-option[aria-selected="true"] .check-icon {
  opacity: 1;
}
`;

export function CssSingleExample() {
  return <CodePreview2 code={code} css={css} cssEditable isCenter demoContainerStyle={{ overflow: 'visible', zIndex: 1 }} />;
}
