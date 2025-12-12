import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-4">
      <TTag>Default</TTag>
      <TTag className="text-white bg-primary-color">Primary</TTag>
      <TTag className="border border-primary-color text-primary-color bg-color">Primary</TTag>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
