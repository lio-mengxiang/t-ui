import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  let index = 1;
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastBottomStackStore.add({
            duration: 3,
            component: <TAlert message=\{\`这是第\${index++}条通知\`\} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        stack effect
    </TButton>
  );
}
`;

export function StackExample() {
  return <CodePreview code={code} />;
}
