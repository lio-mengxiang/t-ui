import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { useState } from 'React';

function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <TButton status="primary" small>Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary" large>Large</TButton>
    </div>
  );
}
`;

export function SizeExample() {
  return <CodePreview code={code} />;
}
