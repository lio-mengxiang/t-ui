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
            duration: null,
            showClose: true,
            message: '这是一条 info message',
          });
        }}
      >
        Close Effect
      </TButton>
    </div>
  );
}`;

export function CloseMessageExample() {
  return <CodePreview code={code} />;
}
