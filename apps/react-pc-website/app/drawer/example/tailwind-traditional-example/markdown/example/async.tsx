import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        const id = TDrawer.add({
          title: 'Drawer Alert',
          content: 'some text',
          onOk: (update) => {
            TDrawer.update(id,  { loading: true, disabled: true });
            setTimeout(() => {
              TDrawer.remove(id);
              // TDrawer.update(id,  { loading: false, disabled: false });
            }, 2000);
          },
        });
      }}
    >
      Open Async Drawer
    </TButton>
  );
}`;

export function AsyncExample() {
  return <CodePreview code={code} />;
}
