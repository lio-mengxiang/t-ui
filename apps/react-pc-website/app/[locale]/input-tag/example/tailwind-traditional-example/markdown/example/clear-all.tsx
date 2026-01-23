import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  return (
    <TInputTag
      globalProps={{
        defaultValue: ['a', 'b', 'c'],
        onChange: v => console.log(v),
      }}
      inputProps={{
        placeholder: 'please input'
      }}
      allowClear={true}
    />
  );
}
`;

export function ClearAllExample() {
  return <CodePreview2 code={code} />;
}
