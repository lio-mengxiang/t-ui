import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          TMessage.info({
            message: "这是一条通知",
          })
        }
      >
        Open Info Message
    </TButton>
  );
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
