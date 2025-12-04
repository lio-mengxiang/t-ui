import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <Checkbox.Group defaultValue={['2']} className="flex gap-4 flex-wrap">
      <TCheckbox value="1">Option 1</TCheckbox>
      <TCheckbox value="2">Option 2</TCheckbox>
      <TCheckbox value="3">Option 3</TCheckbox>
    </Checkbox.Group>
  );
}`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
