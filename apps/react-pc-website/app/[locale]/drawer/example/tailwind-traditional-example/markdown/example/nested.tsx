import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TDrawer.add({
          title: 'Drawer Alert',
          content: <NestedDrawer />,
        });
      }}
    >
      Open Drawer
    </TButton>
  );
}

function NestedDrawer() {
  return (
    <div>
      <div className="mb-6">some text.</div>
      <TButton
        status="primary"
        onClick={() => {
          TDrawer.add({
            title: 'Nested Drawer',
            content: 'Nested Drawer Content',
          });
        }}
      >
        Open Nested Drawer
      </TButton>
    </div>
  );
}`;

export function NestedExample() {
  return <CodePreview code={code} />;
}
