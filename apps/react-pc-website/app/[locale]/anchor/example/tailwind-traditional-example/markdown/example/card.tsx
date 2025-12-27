import { CodePreview } from '@/_components/code-preview';

export const code = `
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary">Brand</TButton>
      <TButton status="primary" type="outline">Outline</TButton>
    </div>
  );
}
`;

export function CardExample() {
  return <CodePreview code={code} />;
}
