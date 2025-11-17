import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        onClick={() => {
          console.log('onClick 触发');
        }}
        type="button"
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Normal
      </Button>
      <Button
        onClick={() => {
          console.log('onClick 不触发');
        }}
        type="button"
        disabled
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Disabled
      </Button>
    </div>
  );
}`;

export function TailwindBasicExample() {
  return <CodePreview code={code} />;
}
