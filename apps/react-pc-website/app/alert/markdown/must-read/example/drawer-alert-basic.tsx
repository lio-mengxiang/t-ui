import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './drawer.css';

const code = `const DrawerAlert = ({ title, children }) => {
  return (
    <div className="drawer-alert">
      <div className="drawer-alert-container">
        <div className="drawer-alert-title">{title}</div>
        <div className="drawer-alert-content">{children}</div>
      </div>
      <div className="drawer-alert-footer">
        <TButton type="outline">取消</TButton>
        <TButton status="primary">确定</TButton>
      </div>
    </div>
  );
};


function App() {
  return (
    <DrawerAlert title="Drawer Title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DrawerAlert>
  );
}`;

const cssCode = `.drawer-alert {
  display: grid;
  gap: 24px;
  overflow-y: auto;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 1.5rem; /* p-6 */
  border: 1px solid var(--border-color);
  width: 320px;
  box-sizing: border-box;
  align-content: space-between;
  height: 100vh;
}

.drawer-alert-container {
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  text-align: left; /* text-center */
  gap: 8px;
}

.drawer-alert-title {
  font-size: 1.125rem; /* text-lg → 18px (在默认16px根字体下) */
  line-height: 1.75rem; /* 28px，对应 Tailwind 的行高 */
  font-weight: 600; /* font-semibold */
}

.drawer-alert-content {
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: var(--text-color-600); /* 语义化的灰色 */
  margin: 8px 0;
  overflow: auto;
}

.drawer-alert-footer {
  display: flex;
  gap: 1.5rem;
  justify-content: end;
}`;

export function DrawerAlertBasicExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
