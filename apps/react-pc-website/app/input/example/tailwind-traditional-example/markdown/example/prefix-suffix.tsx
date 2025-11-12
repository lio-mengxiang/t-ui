import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          prefixElement={<IconSearchLine />}
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          suffixElement={<IconSearchLine />}
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          prefixElement="+86"
          suffixElement={<IconSearchLine />}
        />
      </Cell>
    </Grid>
  );
}`;

export function PrefixSuffixExample() {
  return <CodePreview code={code} />;
}
