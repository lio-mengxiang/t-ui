import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <>
      <TPopover popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </TPopover>
    </>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
