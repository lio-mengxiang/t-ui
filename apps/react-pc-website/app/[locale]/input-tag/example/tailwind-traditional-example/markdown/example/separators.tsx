import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  return (
    <TInputTag
      globalProps={{
        onChange: v => console.log(v),
      }}
      inputProps={{
        placeholder: 'input...',
        tokenSeparators: ['-'],
      }}
    />
  );
}
`;

export function SeparatorsExample() {
  return <CodePreview2 code={code} />;
}
