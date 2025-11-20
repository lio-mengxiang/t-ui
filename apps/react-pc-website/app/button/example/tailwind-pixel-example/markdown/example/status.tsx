import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap gap-8">
        <PixelButton status="primary">Primary</PixelButton>
        <PixelButton status="warning">Warning</PixelButton>
        <PixelButton status="error">Error</PixelButton>
        <PixelButton status="success">Success</PixelButton>
        <PixelButton>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton status="primary" type="outline">Primary</PixelButton>
        <PixelButton status="warning" type="outline">Warning</PixelButton>
        <PixelButton status="error" type="outline">Error</PixelButton>
        <PixelButton status="success" type="outline">Success</PixelButton>
        <PixelButton type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;

export function StatusExample() {
  return <CodePreview code={code} />;
}
