import { CodePreview } from '@/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary">Primary</PixelButton>
      <PixelButton status="primary" type="outline">Primary</PixelButton>
    </div>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
