import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          placeholder="Enter"
          defaultValue="warning input"
          allowClear
          className="w-52 sm:w-80"
          status="warning"
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          defaultValue="error input"
          allowClear
          className="w-52 sm:w-80"
          status="error"
        />
      </Cell>
      <Cell><TInput readOnly placeholder="Enter" defaultValue="readOnly input" allowClear className="w-52 sm:w-80" /></Cell>
      <Cell><TInput disabled placeholder="Enter" defaultValue="disabled input" allowClear className="w-52 sm:w-80" /></Cell>
    </Grid>

  );
}`;

export function StatusExample() {
  return <CodePreview code={code} />;
}
