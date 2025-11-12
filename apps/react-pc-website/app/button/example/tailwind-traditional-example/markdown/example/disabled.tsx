import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton disabled status="primary">Primary</TButton>
      <TButton disabled status="warning">Warning</TButton>
      <TButton disabled status="error">Error</TButton>
      <TButton disabled status="success">Success</TButton>
      <TButton disabled>Default</TButton>
      <TButton disabled status="primary" type="outline">Primary</TButton>
      <TButton disabled status="warning" type="outline">Warning</TButton>
      <TButton disabled status="error" type="outline">Error</TButton>
      <TButton disabled status="success" type="outline">Success</TButton>
      <TButton disabled type="outline">Default</TButton>
    </div>
  );
}
`;

export function DisabledExample() {
  return <CodePreview code={code} />;
}
