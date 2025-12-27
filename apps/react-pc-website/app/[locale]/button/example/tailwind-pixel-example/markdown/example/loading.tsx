import { CodePreview } from '@/_components/code-preview';

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
    <div className="flex flex-wrap gap-8 flex-col">
      <div className="flex flex-wrap gap-8">
        <PixelButton loading disabled status="primary">Primary</PixelButton>
        <PixelButton loading status="warning">Warning</PixelButton>
        <PixelButton loading={loading1} onClick={onClickBtn1}>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton loading disabled status="primary" type="outline">Primary</PixelButton>
        <PixelButton loading status="warning" type="outline">Warning</PixelButton>
        <PixelButton loading={loading2} onClick={onClickBtn2} type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;

export function LoadingExample() {
  return <CodePreview code={code} />;
}
