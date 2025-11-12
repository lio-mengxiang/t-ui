import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Modal Alert',
            content: <NestedModal />,
            // className 定义 modal 最外层 div 的样式
            className: 'h-[300px]',
          });
        }}
      >
        Open Modal
    </TButton>
  );
}

function NestedModal() {
  return (
    <div>
     <div className="mb-6">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
     </div>
      <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Nested Modal',
            content: 'Nested Modal Content',
          });
        }}
      >
        Open Nested Modal
      </TButton>
    </div>
  );
}
`;

export function NestedExample() {
  return <CodePreview code={code} />;
}
