import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return <TInput placeholder="Enter" allowClear className="w-52" />;
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
