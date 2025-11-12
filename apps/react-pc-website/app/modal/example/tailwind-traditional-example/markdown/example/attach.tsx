import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          attach: 'attach-example',
          title: 'Modal Alert',
          content: 'This is a message!',
          containerClassName: 'absolute',
          maskClassName: 'absolute',
          attach: '#attach-example',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;

export function AttachExample() {
  return <CodePreview code={code} id="attach-example" demoContainerStyle={{ height: 400 }} />;
}
