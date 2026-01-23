import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  // 模拟较长的标签列表
  const tags = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Node.js'];

  return (
      <TInputTag
        globalProps={{
          defaultValue: tags,
          maxTagCount: {
            count: 2,
            render: (rest) => (
              <TPopover
                popoverContent={<pre>{rest.map((item) => item.value).join(',\\n')}</pre>}
              >
                <span>+{rest.length}</span>
              </TPopover>
            )
          },
        }}
        inputProps={{
          placeholder: 'input...',
        }}
      />
  );
}
`;

export function MaxTagCountExample() {
  return <CodePreview2 code={code} />;
}
