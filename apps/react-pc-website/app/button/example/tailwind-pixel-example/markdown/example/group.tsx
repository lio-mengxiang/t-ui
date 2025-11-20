import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <PixelButton status="primary">Left</PixelButton>
        <PixelButton status="primary">Middle</PixelButton>
        <PixelButton status="primary">Right</PixelButton>
      </div>
      <div className="flex">
        <PixelButton status="primary" type="outline">
          Left
        </PixelButton>
        <PixelButton status="primary" type="outline">
          Middle
        </PixelButton>
        <PixelButton status="primary" type="outline">
          Right
        </PixelButton>
      </div>
    </div>
  );
}
`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
