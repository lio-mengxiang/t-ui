import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
      <Grid columns="repeat(auto-fit,minmax(120px,1fr))" minRowHeight="40px">
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>A</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>B</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>C</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>D</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>E</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>F</Cell>
      </Grid>
  )
}
`;

export function Responsive1Example() {
  return <CodePreview code={code} />;
}
