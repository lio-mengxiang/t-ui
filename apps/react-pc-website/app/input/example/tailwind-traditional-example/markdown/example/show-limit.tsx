import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          maxLength={{ length: 10 }}
          showWordLimit
          placeholder='Enter no more than 10 letters'
          className="w-52 sm:w-80"
        />
      </Cell>
      <Cell>
        <TInput
          maxLength={{ length: 10, errorOnly: true }}
          showWordLimit
          defaultValue='More than 10 letters will be error'
          className="w-52 sm:w-80"
        />
      </Cell>
    </Grid>
  );
}`;

export function ShowLimitExample() {
  return <CodePreview code={code} />;
}
