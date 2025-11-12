import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <TButton>Open</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div>Popover Content</div>
      </Popover.Content>
    </Popover.Root>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
