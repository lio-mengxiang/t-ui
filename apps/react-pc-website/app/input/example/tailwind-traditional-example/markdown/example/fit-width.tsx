import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `const boxClassName = "flex items-center h-full border px-4 py-2 bg-color-50 rounded-md dark:border-none";
function App() {
  return (
    <div className="flex flex-col gap-4">
      <div>minWidth:300, maxWidth:500</div>
      <TInput
         autoFitWidth style={{minWidth: 300, maxWidth: 500}} placeholder='Enter something'
      />
      <TInput
        placeholder='Enter something'
        prefixElement={<IconEmailLine />}
        style={{minWidth: 300, maxWidth: 500}}
        autoFitWidth
      />
      <GroupWrapper style={{minWidth: 300, maxWidth: 500, width: 'fit-content'}} className="h-9">
        <TInput
          placeholder='Enter something'
          prefixElement={<IconEmailLine />}
          style={{ width: '100%' }}
          autoFitWidth
        />
        <div className={cs(boxClassName, "border-l-0")}><IconSearchLine /></div>
      </GroupWrapper>
    </div>
  );
}
   
function GroupWrapper({ children, className, style }) {
  return (
    <div style={style} className={cs(
        "flex [&>div:not(:last-child):not(:first-child)]:rounded-none",
        "[&>div:last-child]:rounded-tl-none [&>div:last-child]:rounded-bl-none",
        "[&>div:first-child]:rounded-tr-none [&>div:first-child]:rounded-br-none",
        className
      )}>
        {children}
    </div>
  )
}`;

export function FitWidthExample() {
  return <CodePreview code={code} />;
}
