import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell className="flex flex-col gap-2">
        <div>trim whitespace when out of focus：</div>
        <TInput
          placeholder='Enter something'
          onChange={v => { console.log('current value: ', v); }}
          normalizeTrigger={['onBlur']}
          normalize={v => v ? v.trim() : v}
          className="w-52 sm:w-80"
        />
      </Cell>
      <Cell className="flex flex-col gap-2">
        <div>trim whitespace when press enter：</div>
        <TInput
          placeholder='Enter something'
          onChange={v => { console.log('current value: ', v); }}
          normalize={v => v ? v.trim() : v}
          normalizeTrigger={['onPressEnter']}
          className="w-52 sm:w-80"
        />
      </Cell>
    </Grid>
  );
}`;

export function FormatExample() {
  return <CodePreview code={code} />;
}
