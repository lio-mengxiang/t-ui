import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <Radio.Group defaultValue="2" className="flex gap-4 flex-wrap">
      <TRadio value="1">Option 1</TRadio>
      <TRadio value="2">Option 2</TRadio>
      <TRadio value="3">Option 3</TRadio>
    </Radio.Group>
  );
}`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
