import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          content: 'This is a message!',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
