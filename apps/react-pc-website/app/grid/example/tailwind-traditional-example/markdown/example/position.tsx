import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  const cellStyle = { background: "var(--bg-color-100)", padding: '4px 0' };
  return (
      <Grid columns={3} gap="8px" minRowHeight="40px">
        <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Top Left</Cell>
        <Cell left={3} className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Top Right</Cell>
        <Cell left={2} top={2} className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Middle</Cell>
        <Cell top={3} className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Bottom Left</Cell>
        <Cell top={3} left={3} className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Bottom Right</Cell>
      </Grid>
  )
}
`;

export function PositionExample() {
  return <CodePreview code={code} />;
}
