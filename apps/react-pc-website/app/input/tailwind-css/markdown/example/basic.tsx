import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <InputComponent placeholder="请输入" />
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
