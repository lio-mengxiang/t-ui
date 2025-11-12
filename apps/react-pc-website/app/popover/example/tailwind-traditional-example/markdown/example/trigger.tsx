import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  const ContextMenuExample = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="h-8 border border-solid border-color flex items-center px-4 py-2 rounded-lg cursor-pointer" {...props}>
       右击触发元素
      </div>
    );
  });

  return (
    <div className="flex gap-x-4 flex-wrap">
      <TPopover popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click">
        <TButton status="primary">Click me!</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="context-menu">
        <ContextMenuExample />
      </TPopover>
    </div>
  );
}
`;

export function TriggerExample() {
  return <CodePreview code={code} />;
}
