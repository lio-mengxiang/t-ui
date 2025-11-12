import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary">Brand</TButton>
      <TButton status="primary" type="outline">Outline</TButton>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
