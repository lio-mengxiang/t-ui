import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Modal Alert',
            content: Array.from({ length: 10 }).map((_, index) => logContent),
            // className 定义 modal 最外层 div 的样式
            contentClassName: 'max-h-[300px] overflow-auto',
          });
        }}
      >
        Open Modal
    </TButton>
  );
}
const logContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';`;

export function ScrollExample() {
  return <CodePreview code={code} />;
}
