import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';
import { IconLightningFill } from '@t-headless-ui/react';

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
        allowClear
        prefix={<IconLightningFill />} 
        suffix="MB"
    />
  );
}
`;

export function PrefixExample() {
  return <CodePreview2 code={code} />;
}
