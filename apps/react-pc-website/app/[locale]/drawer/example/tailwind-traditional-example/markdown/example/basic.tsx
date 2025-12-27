import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TDrawer.add({
          title: 'Drawer Alert',
          content: 'This is a message!',
        });
      }}
    >
      Open Drawer
    </TButton>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
