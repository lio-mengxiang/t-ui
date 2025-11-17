import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // className 定义 modal 最外层 div 的样式
          className: 'h-[80vh] w-[90vw]',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;

export function SizeExample() {
  return <CodePreview code={code} />;
}
