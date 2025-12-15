import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const [hasHeader, setHeader] = useState(true);
  const [hasFooter, setFooter] = useState(true);
  const [hasClose, setClose] = useState(true);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <TCheckbox
          onChange={(value) => {
            setHeader(!value);
          }}
        >
          Hide title
        </TCheckbox>
        <TCheckbox
          onChange={(value) => {
            setFooter(!value);
          }}
        >
          Hide footer
        </TCheckbox>
        <TCheckbox
          onChange={(value) => {
            setClose(!value);
          }}
        >
          Hide close icon
        </TCheckbox>
      </div>
      <TButton
        status="primary"
        className="w-28"
        onClick={() => {
          TDrawer.add({
            title: hasHeader ? 'Drawer Alert' : null,
            showFooter: hasFooter,
            showClose: hasClose,
            content: 'This is a message!',
          });
        }}
      >
        Open Drawer
      </TButton>
    </div>
  );
}`;

export function CustomNodeExample() {
  return <CodePreview code={code} />;
}
