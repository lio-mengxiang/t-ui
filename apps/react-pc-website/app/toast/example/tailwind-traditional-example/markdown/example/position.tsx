import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  let index = 1;
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastBottomStore.add({
            duration: 3,
            component: <TAlert message=\{\`这是第\${index++}条通知\`\} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        custom position
    </TButton>
  );
}
`;

export function PositionExample() {
  return <CodePreview code={code} />;
}
