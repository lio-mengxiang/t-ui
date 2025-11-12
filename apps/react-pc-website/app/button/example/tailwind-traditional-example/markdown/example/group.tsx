import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-white/20 [&>button:not(:last-child)]:border-r">
        <TButton status="primary">Left</TButton>
        <TButton status="primary">Middle</TButton>
        <TButton status="primary">Right</TButton>
      </div>
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-0">
        <TButton status="primary" type="outline">
          Left
        </TButton>
        <TButton status="primary" type="outline">
          Middle
        </TButton>
        <TButton status="primary" type="outline">
          Right
        </TButton>
      </div>
    </div>
  );
}
`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
