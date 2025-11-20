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
      <TRadio checked={checked}>Default</TRadio>
      <TRadio disabled checked={checked}>
        Disabled
      </TRadio>
      <TRadio readonly checked={checked}>
        Readonly
      </TRadio>
    </div>
  );
}`;

export function CheckedExample() {
  return <CodePreview code={code} />;
}
