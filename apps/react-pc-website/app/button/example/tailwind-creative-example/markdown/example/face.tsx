import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <ParabolaFaces />
  );
}
`;

export function FaceExample() {
  return <CodePreview code={code} demoContainerStyle={{ padding: 0, overflow: 'visible' }} />;
}
