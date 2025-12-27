import { CodePreview } from '@/_components/code-preview';

const code = `
function App() {
  return (
     <TEmpty description="No Data" icon={<IconEmptyFill />} />
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
