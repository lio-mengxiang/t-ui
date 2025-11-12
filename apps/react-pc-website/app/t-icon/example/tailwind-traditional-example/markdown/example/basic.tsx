import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-x-2">
      <IconSuccessLine className="w-6 h-6 text-blue-600" />
      <div className="text-2xl text-teal-600">
        <IconInfoLine />
      </div>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
