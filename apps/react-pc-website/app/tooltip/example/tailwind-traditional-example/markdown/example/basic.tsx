import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <>
      <Tooltip showArrow popoverContent="Tooltip Content">
        <span className="text-sm">Mouse over to display tooltip</span>
      </Tooltip>
    </>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
