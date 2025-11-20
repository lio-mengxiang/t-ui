import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-wrap gap-8 flex-col">
      <div className="flex flex-wrap gap-8">
        <PixelButton disabled status="primary">Primary</PixelButton>
        <PixelButton disabled status="warning">Warning</PixelButton>
        <PixelButton disabled status="error">Error</PixelButton>
        <PixelButton disabled status="success">Success</PixelButton>
        <PixelButton disabled>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton disabled status="primary" type="outline">Primary</PixelButton>
        <PixelButton disabled status="warning" type="outline">Warning</PixelButton>
        <PixelButton disabled status="error" type="outline">Error</PixelButton>
        <PixelButton disabled status="success" type="outline">Success</PixelButton>
        <PixelButton disabled type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;

export function DisabledExample() {
  return <CodePreview code={code} />;
}
