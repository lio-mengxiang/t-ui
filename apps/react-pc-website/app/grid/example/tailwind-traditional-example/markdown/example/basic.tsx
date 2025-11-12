import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
      <Grid columns={6} gap="8px" minRowHeight="40px">
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>2/6</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>2/6</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>2/6</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>1/3</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>1/3</Cell>
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={6} middle center>1/1</Cell>
      </Grid>
  )
}
`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
