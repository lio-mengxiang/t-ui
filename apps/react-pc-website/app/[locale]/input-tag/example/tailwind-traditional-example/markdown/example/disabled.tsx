import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <TInputTag
        globalProps={{
          defaultValue: ['disabled'],
          disabled: true,
        }}
        inputProps={{
          placeholder: 'input...',
        }}
      />
      <TInputTag
        globalProps={{
          defaultValue: ['read-only'],
          readOnly: true,
        }}
        inputProps={{
          placeholder: 'input...',
        }}
      />
    </div>
  );
}
`;

export function DisableExample() {
  return <CodePreview2 code={code} />;
}
