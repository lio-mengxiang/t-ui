import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  function PopoverContent() {
      const { triggerRef } = useContext(Popover.PopoverContext);
      const triggerDom = triggerRef.current;
      return (
        <div style={{ width: triggerDom?.offsetWidth }} className="px-2 py-1">
          My length is the same as the button below！
        </div>
      );
  }
  return (
    <TPopover popoverContent={<PopoverContent />} trigger="click" contentClassName="p-0">
      <TButton status="primary">I am long bar! ！</TButton>
    </TPopover>
  );
}
`;

export function GetTriggerElementExample() {
  return <CodePreview code={code} />;
}
