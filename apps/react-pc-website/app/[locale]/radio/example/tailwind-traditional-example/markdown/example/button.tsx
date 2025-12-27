import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <Radio.Group defaultValue="Apple" className="inline-flex rounded-md p-1 bg-color-100">
      <TButtonRadio value="Apple">Apple</TButtonRadio>
      <TButtonRadio value="Orange">Orange</TButtonRadio>
      <TButtonRadio value="Banana">Banana</TButtonRadio>
      <TButtonRadio value="Watermelon" disabled>
        Watermelon
      </TButtonRadio>
    </Radio.Group>
  );
}
`;

export function ButtonExample() {
  return <CodePreview code={code} />;
}
