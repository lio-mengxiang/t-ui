import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './modal.css';

const code = `const ModalAlert = ({ title, message }) => {
  return (
    <div className="modal-alert">
      <div className="modal-alert-container">
        <div className="modal-alert-title">{title}</div>
        <div className="modal-alert-content">{message}</div>
      </div>
      <div className="modal-alert-footer">
        <TButton type="outline">取消</TButton>
        <TButton status="primary">确定</TButton>
      </div>
    </div>
  );
};

function InputGroup() {
  return (
    <div className="flex flex-col gap-y-4 mt-2">
      <div className="flex flex-col gap-y-1">
        <span>姓名</span>
        <TInput placeholder="Enter" allowClear className="wf-full" />
      </div>
      <div className="flex flex-col gap-y-2">
        <span>手机号</span>
        <TInput
          placeholder="Enter"
          className="wf-full"
       />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <ModalAlert title="编辑信息" message={<InputGroup />} />
    </div>
  );
}`;

const cssCode = `.modal-alert {
  display: grid;
  gap: 1rem; /* gap-4 */
  overflow-y: auto;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 1.5rem; /* p-6 */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -4px rgba(0, 0, 0, 0.05);
}

.modal-alert-container {
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  text-align: center; /* text-center */
}

.modal-alert-container > * + * {
  margin-top: 0.25rem; /* 4px */
}

.modal-alert-title {
  font-size: 1.125rem; /* text-lg → 18px (在默认16px根字体下) */
  line-height: 1.75rem; /* 28px，对应 Tailwind 的行高 */
  font-weight: 600; /* font-semibold */
}

.modal-alert-content {
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: var(--text-color-400); /* 语义化的灰色 */
}

.modal-alert-footer {
  display: flex;
  gap: 0.75rem;
}`;

export function ModalAlertBasicFormExample() {
  return <CodePreview code={code} cssCode={cssCode} />;
}
