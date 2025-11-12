import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <RippleButton status="primary">RippleButton</RippleButton>
      <RippleButton status="primary" type="outline">Outline</RippleButton>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
