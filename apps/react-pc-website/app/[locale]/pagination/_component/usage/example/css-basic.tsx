import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { 
  IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, 
  IconLeftLine, IconMoreFill, IconRightLine, 
  Pagination 
} from '@t-headless-ui/react';

function App() {
  return (
    <div className="pagination-container">
      <Pagination.Root 
        total={100} 
        defaultCurrent={1}
        defaultPageSize={10}
        className="pagination-root"
      >
        <Pagination.Total>
          {(total, range) => (
            <div className="total-wrapper">
              {\`\${range[0]} - \${range[1]} of \${total} items\`}
            </div>
          )}
        </Pagination.Total>

        {/* 上一页 */}
        <Pagination.Previous className="pagination-item mr-1">
          <IconLeftLine />
        </Pagination.Previous>

        {/* 第一页 */}
        <Pagination.StartItem className="pagination-item">
          {(page) => <span>{page}</span>}
        </Pagination.StartItem>

        {/* 前省略号 */}
        <Pagination.StartEllipsis className="pagination-item">
          <IconMoreFill />
        </Pagination.StartEllipsis>

        {/* 中间页码 */}
        <Pagination.Items className="pagination-item">
          {(page) => <span>{page}</span>}
        </Pagination.Items>

        {/* 后省略号 */}
        <Pagination.EndEllipsis className="pagination-item">
          <IconMoreFill />
        </Pagination.EndEllipsis>

        {/* 最后一页 */}
        <Pagination.EndItem className="pagination-item">
          {(page) => <span>{page}</span>}
        </Pagination.EndItem>

        {/* 下一页 */}
        <Pagination.Next className="pagination-item ml-1">
          <IconRightLine />
        </Pagination.Next>

        {/* 跳转区域 */}
        <div className="jumper-wrapper">
          <span className="text-14">Go to</span>
          <Pagination.Jumper className="jumper-input" />
          <span className="text-14">Page</span>
        </div>
      </Pagination.Root>
    </div>
  );
}
`;

const css = `
/* 基础容器 */
.pagination-root {
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 14px;
  gap: 4px;
}

/* 统计文本容器 */
.total-wrapper {
  display: flex;
  align-items: center;
  margin-right: 4px;
}

/* 分页按钮通用样式 (对应 baseItemStyles) */
.pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  outline: none;
  background: transparent;
  border: 1px solid transparent; /* 预留边框位置防止抖动 */
  transition: background-color 0.2s;
}

/* Hover 状态 (对应 hover:bg-[...]) */
.pagination-item:not([aria-disabled="true"]):hover {
  background-color: var(--bg-color-100);
}

/* 选中/激活状态 (对应 activeStyles) */
.pagination-item[aria-current="true"] {
  border-color: var(--border-color);
}

/* 禁用状态 (对应 disabledStyles) */
.pagination-item[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.3;
}

/* 特殊间距类 */
.mr-1 { margin-right: 4px; }
.ml-1 { margin-left: 4px; }

/* 跳转区域容器 */
.jumper-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
}

/* 跳转输入框 */
.jumper-input {
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  outline: none;
  text-align: center;
}

.jumper-input[aria-disabled="true"] {
  cursor: not-allowed;
}
`;

export function CssBasicExample() {
  return <CodePreview2 code={code} css={css} cssEditable isCenter demoContainerStyle={{ overflow: 'visible', zIndex: 1 }} />;
}
