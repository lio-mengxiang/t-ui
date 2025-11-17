import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        const id = TModal.add({
          title: 'Modal Alert',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // className 定义 modal 最外层 div 的样式
          className: 'h-[300px]',
          onOk: (update) => {
            TModal.update(id,  { loading: true, disabled: true });
            setTimeout(() => {
              TModal.remove(id);
              // TModal.update(id,  { loading: false, disabled: false });
            }, 2000);
          },
        });
      }}
    >
      Open Async Modal
    </TButton>
  );
}`;

export function AsyncExample() {
  return <CodePreview code={code} />;
}
