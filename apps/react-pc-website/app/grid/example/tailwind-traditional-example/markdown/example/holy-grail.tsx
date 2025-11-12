import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <Grid columns={'100px 1fr 100px'} rows={'minmax(45px,auto) 200px minmax(45px,auto)'} gap={12}>
      <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>
        <h1>Header</h1>
      </Cell>

      <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Menu</Cell>
      <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Content</Cell>
      <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Ads</Cell>

      <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>
        Footer
      </Cell>
    </Grid>
  );
}
`;

export function HolyGrailExample() {
  return <CodePreview code={code} />;
}
