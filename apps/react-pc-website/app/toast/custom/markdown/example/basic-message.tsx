import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          TMessage.info({
            duration: 4,
            message: '这是一条 info message',
          });
        }}
      >
        Info
      </TButton>
      <TButton
        status="warning"
        onClick={() => {
          TMessage.warning({
            duration: 4,
            message: '这是一条 warning message',
          });
        }}
      >
        Warning
      </TButton>
       <TButton
        status="success"
        onClick={() => {
          TMessage.success({
            duration: 4,
            message: '这是一条 success message',
          });
        }}
      >
        Success
      </TButton>
      <TButton
        status="error"
        onClick={() => {
          TMessage.error({
            duration: 4,
            message: '这是一条 error message',
          });
        }}
      >
        Error
      </TButton>
       <TButton
        status="default"
        onClick={() => {
          TMessage.loading({
            duration: 4,
            message: '这是一条 loading message',
          });
        }}
      >
        Loading
      </TButton>
    </div>
  );
}`;

export function BasicMessageExample() {
  return <CodePreview code={code} />;
}
