import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-2 flex-wrap">
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
      <TButton status="primary">Button</TButton>
    </div>
  );
}`;

export function WrapExample() {
  return <CodePreview code={code} />;
}
