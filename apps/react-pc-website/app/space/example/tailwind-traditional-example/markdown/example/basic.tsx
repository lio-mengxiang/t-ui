import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-2">
      <TButton status="primary">Button A</TButton>
      <TButton status="primary">Button B</TButton>
      <TButton status="primary">Button C</TButton>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
