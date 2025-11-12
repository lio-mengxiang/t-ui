import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <TButton status="primary">Button A</TButton>
      <TButton status="primary">Button B</TButton>
      <TButton status="primary">Button C</TButton>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
