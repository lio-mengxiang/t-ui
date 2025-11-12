import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <div className="flex flex-col gap-4">
      <Password defaultValue="password" className="w-52 sm:w-80" />
      <Password
        defaultValue='password'
        defaultVisibility={true}
        placeholder='Enter password'
        className="w-52 sm:w-80"
      />
      <Password
        defaultValue='password'
        visibilityToggle={false}
        placeholder='Enter password'
        className="w-52 sm:w-80"
      />
    </div>
  );
}`;

export function PasswordExample() {
  return <CodePreview code={code} />;
}
