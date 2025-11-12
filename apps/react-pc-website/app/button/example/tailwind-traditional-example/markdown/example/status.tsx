import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton status="primary">Primary</TButton>
      <TButton status="warning">Warning</TButton>
      <TButton status="error">Error</TButton>
      <TButton status="success">Success</TButton>
      <TButton>Default</TButton>
      <TButton status="primary" type="outline">Primary</TButton>
      <TButton status="warning" type="outline">Warning</TButton>
      <TButton status="error" type="outline">Error</TButton>
      <TButton status="success" type="outline">Success</TButton>
      <TButton type="outline">Default</TButton>
    </div>
  );
}
`;

export function StatusExample() {
  return <CodePreview code={code} />;
}
