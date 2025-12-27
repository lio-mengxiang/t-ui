import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <InputComponent placeholder="请输入" />
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
