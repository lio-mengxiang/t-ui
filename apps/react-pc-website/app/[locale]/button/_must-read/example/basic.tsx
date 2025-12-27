import { CodePreview } from '@/_components/code-preview';

const code = `import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <Button
      disabled
      loading={true}
      onClick={() => {
        console.log('onClick 不触发');
      }}
    >
      Button
    </Button>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
