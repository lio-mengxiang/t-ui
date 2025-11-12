import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { useState } from 'React';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  function onClickBtn1(e) {
      setLoading1(true);
      setTimeout(() => {
        setLoading1(false);
      }, 4000);
    }

    function onClickBtn2(e) {
      setLoading2(true);
      setTimeout(() => {
        setLoading2(false);
      }, 4000);
    }

  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <TButton loading disabled status="primary">Primary</TButton>
      <TButton loading status="warning">Warning</TButton>
      <TButton loading={loading1} onClick={onClickBtn1}>Default</TButton>
      <TButton loading disabled status="primary" type="outline">Primary</TButton>
      <TButton loading status="warning" type="outline">Warning</TButton>
      <TButton loading={loading2} onClick={onClickBtn2} type="outline">Default</TButton>
    </div>
  );
}
`;

export function LoadingExample() {
  return <CodePreview code={code} />;
}
