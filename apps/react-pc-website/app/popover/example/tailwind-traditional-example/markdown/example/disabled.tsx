import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <TPopover popoverContent="Popover Content" trigger="click" disabled>
      <TButton status="primary" disabled>Click Me!</TButton>
    </TPopover>
  );
}
`;

export function DisabledExample() {
  return <CodePreview code={code} />;
}
