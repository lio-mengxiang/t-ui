import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <TButton
        onClick={() => {
          setChecked(!checked);
        }}
        status="primary"
        type="outline"
        className="w-fit"
      >
        {checked ? 'Uncheck' : 'Check'}
      </TButton>
      <TCheckbox checked={checked}>Default</TCheckbox>
      <TCheckbox disabled checked={checked}>
        Disabled
      </TCheckbox>
      <TCheckbox readonly checked={checked}>
        Readonly
      </TCheckbox>
    </div>
  );
}`;

export function CheckedExample() {
  return <CodePreview code={code} />;
}
