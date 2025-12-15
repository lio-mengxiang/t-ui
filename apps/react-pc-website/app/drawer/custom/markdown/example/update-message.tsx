import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          const id = TMessage.loading({
            duration: null,
            message: '这是一条 info message',
          });
          
          setTimeout(() => {
            TMessage.update(id, {
              type: 'success',
              duration: 4,
              message: '请求成功',
            });
          }, 3000);
        }}
      >
        Update Info
      </TButton>
    </div>
  );
}`;

export function UpdateMessageExample() {
  return <CodePreview code={code} />;
}
