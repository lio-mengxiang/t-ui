import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="inline-flex gap-2 flex-col">
      <TButton status="primary">Button A</TButton>
      <TButton status="primary">Button B</TButton>
      <TButton status="primary">Button C</TButton>
    </div>
  );
}`;

export function ColumnExample() {
  return <CodePreview code={code} />;
}
