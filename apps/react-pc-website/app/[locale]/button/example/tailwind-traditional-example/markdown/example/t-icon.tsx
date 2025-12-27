import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary" onlyIcon><IconHomeLine /></TButton>
      <TButton status="primary">Go <IconArrowRightLine className="ml-2" /></TButton>
    </div>
  );
}`;

export function TIconExample() {
  return <CodePreview code={code} />;
}
