import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <div className="inline-flex gap-4">
      <TTag closable>Tag</TTag>
      <TTag closable>
        <IconInfoLine /> <span className="ml-1">Tag</span>
      </TTag>
    </div>
  );
}
`;

export function CloseableExample() {
  return <CodePreview code={code} />;
}
