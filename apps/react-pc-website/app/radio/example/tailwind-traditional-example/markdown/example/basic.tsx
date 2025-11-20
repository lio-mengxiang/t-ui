import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
     <div className="text-sm">Not Checked:</div>
     <div className="flex gap-4 flex-wrap">
       <TRadio>Default</TRadio>
       <TRadio disabled>Disabled</TRadio>
       <TRadio readonly>Readonly</TRadio>
     </div>
     <div className="text-sm">Checked:</div>
     <div className="flex gap-4 flex-wrap">
       <TRadio checked>Default</TRadio>
       <TRadio disabled checked>Disabled</TRadio>
       <TRadio readonly checked>Readonly</TRadio>
     </div>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
