import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <Grid columns={'100px 1fr 100px'} rows={'minmax(45px,auto) 200px minmax(45px,auto)'} gap={12}  areas={[
      "header header  header",
      "menu   content ads   ",
      "footer footer  footer"
    ]}>
      <Cell area="header" className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
        <h1>Header</h1>
      </Cell>

      <Cell area="menu" className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Menu</Cell>
      <Cell area="content" className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Content</Cell>
      <Cell area="ads" className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>Ads</Cell>

      <Cell area="footer" className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
        Footer
      </Cell>
    </Grid>
  );
}
`;

export function AreaExample() {
  return <CodePreview code={code} />;
}
