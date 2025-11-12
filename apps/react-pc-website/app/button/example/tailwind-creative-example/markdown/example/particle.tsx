import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-x-4 flex-wrap">
      <ParticleButton status="primary">ParticleButton</ParticleButton>
    </div>
  );
}
`;

export function ParticleExample() {
  return <CodePreview code={code} />;
}
