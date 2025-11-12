import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <InputSearch
        placeholder='Enter something'
        className="w-52 sm:w-80"
        loading
      />
      <InputSearch
        placeholder='Enter something'
        showButton
        className="w-52 sm:w-80"
        loading={loading}
        onSearch={async (value) => {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setLoading(false);
        }}
      />
    </div>
  );
}`;

export function SearchExample() {
  return <CodePreview code={code} />;
}
