import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary" onlyIcon><IconHomeLine /></PixelButton>
      <PixelButton status="primary">Go <IconArrowRightLine className="ml-2" /></PixelButton>
    </div>
  );
}`;

export function TIconExample() {
  return <CodePreview code={code} />;
}
