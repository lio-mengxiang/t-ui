import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <TPopover popoverContent="Popover Content" trigger="click"  placement="top" visible={visible} attach="#visible-wrapper">
      <TButton status="primary" onClick={()=> setVisible(!visible)}>Always show</TButton>
    </TPopover>
  );
}
`;

export function VisibleExample() {
  return <CodePreview code={code} id="visible-wrapper" />;
}
