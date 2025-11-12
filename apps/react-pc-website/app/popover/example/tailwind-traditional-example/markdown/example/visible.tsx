import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <TPopover popoverContent="Popover Content" trigger="click"  placement="right" visible={visible}>
      <TButton status="primary" onClick={()=> setVisible(!visible)}>一直显示(Always show)</TButton>
    </TPopover>
  );
}
`;

export function VisibleExample() {
  return <CodePreview code={code} />;
}
