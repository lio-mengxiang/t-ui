import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function GroupWrapper({ children, className }) {
  return (
    <div className={cs(
        "flex [&>div:not(:last-child):not(:first-child)]:rounded-none",
        "[&>div:last-child]:rounded-tl-none [&>div:last-child]:rounded-bl-none",
        "[&>div:first-child]:rounded-tr-none [&>div:first-child]:rounded-br-none",
        className
      )}>
        {children}
    </div>
  )
}

const boxClassName = "flex items-center h-full border px-4 py-2 bg-color-50 rounded-md dark:border-none";

function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <div className={cs(boxClassName, "border-r-0",)}>+86</div>
          <TInput
            placeholder="Enter"
            className="w-full"
          />
          <div className={cs(boxClassName, "border-l-0")}>
            <IconSearchLine />
          </div>
        </GroupWrapper>
      </Cell>
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <TInput
            placeholder="Enter"
            className="w-full"
          />
          <div className={cs(boxClassName, "border-l-0")}><IconSearchLine /></div>
        </GroupWrapper>
      </Cell>
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <div className={cs(boxClassName, "border-r-0")}><IconSearchLine /></div>
          <TInput
            placeholder="Enter"
            className="w-full"
          />
        </GroupWrapper>
      </Cell>
    </Grid>
  );
}`;

export function LabelExample() {
  return <CodePreview code={code} />;
}
