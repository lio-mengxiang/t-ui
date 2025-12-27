import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
     <div className="text-sm">Not Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <TCheckbox>Default</TCheckbox>
       <TCheckbox disabled>Disabled</TCheckbox>
       <TCheckbox readonly>Readonly</TCheckbox>
     </div>
     <div className="text-sm">Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <TCheckbox checked>Default</TCheckbox>
       <TCheckbox disabled checked>Disabled</TCheckbox>
       <TCheckbox readonly checked>Readonly</TCheckbox>
     </div>
    </div>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
