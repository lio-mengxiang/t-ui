import React from 'react';
import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const focusRef = useRef({});
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          initialFocusEl: () => focusRef.current?.focus(),
          content: <InputGroup focusRef={focusRef} />,
          // className 定义 modal 最外层 div 的样式
          className: 'w-[40vw]',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}

function InputGroup({ focusRef }) {

  return (
    <div className="flex flex-col gap-y-4 mt-2">
      <div className="flex flex-col gap-y-1">
        <span>姓名</span>
        <TInput placeholder="Enter" allowClear className="w-full" />
      </div>
      <div className="flex flex-col gap-y-2">
        <span>手机号</span>
        <TInput ref={focusRef} placeholder="Enter" allowClear className="w-full" />
      </div>
    </div>
  );
}
`;

export function FocusExample() {
  return <CodePreview code={code} />;
}
