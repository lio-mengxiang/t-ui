import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  return (
    <TInputTag
      globalProps={{
        defaultValue: ['apple', 'orange', 'banana'],
        onChange: v => console.log(v),
      }}
      inputProps={{
        placeholder: 'input...',
      }}
    />
  );
}
`;

export function AdvancedExample() {
  return <CodePreview2 code={code} />;
}
