import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  function PopoverContent() {
      const { triggerRef } = useContext(Popover.PopoverContext);
      const triggerDom = triggerRef.current;
      return (
        <div style={{ width: triggerDom?.offsetWidth }} className="px-2 py-1">
          内容也跟金箍棒一样长，长，长长长！
        </div>
      );
  }
  return (
    <TPopover popoverContent={<PopoverContent />} trigger="click" contentClassName="p-0">
      <TButton status="primary">我是金箍棒! 我！很长！很猛！很强！</TButton>
    </TPopover>
  );
}
`;

export function GetTriggerElementExample() {
  return <CodePreview code={code} />;
}
