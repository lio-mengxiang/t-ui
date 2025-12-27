import { CodePreview } from '@/_components/code-preview';

const code = `
function App() {
  return (
    <div className="flex gap-4 wrap">
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#3491FA] text-white">
         <TButton className="bg-[#3491FA]">#3491FA</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#165DFF] text-white">
         <TButton className="bg-[#165DFF]">#165DFF</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#722ED1] text-white">
         <TButton className="bg-[#722ED1]">#722ED1</TButton>
      </Tooltip>
    </div>
  );
}
`;

export function CustomExample() {
  return <CodePreview code={code} />;
}
