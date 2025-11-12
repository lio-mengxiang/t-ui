import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex gap-2 items-start border border-solid border-color p-4 h-36 rounded-md">
        <div> top </div>
        <TButton status="primary">Button</TButton>
      </div>
      <div className="flex gap-2 items-center border border-solid border-color p-4 h-36 rounded-md">
        <div> middle </div>
        <TButton status="primary">Button</TButton>
      </div>
       <div className="flex gap-2 items-end border border-solid border-color p-4 h-36 rounded-md">
        <div> bottom </div>
        <TButton status="primary">Button</TButton>
      </div>
    </div>
  );
}`;

export function AlignExample() {
  return <CodePreview code={code} />;
}
