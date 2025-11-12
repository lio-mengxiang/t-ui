import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <Grid columns={12} minRowHeight="40px">
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        A
      </Cell>
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        B
      </Cell>
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        C
      </Cell>
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        D
      </Cell>
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        E
      </Cell>
      <Cell
        defaultWidth={4}
        width={{
          xs: 12,
          sm: 6,
        }}
        className="bg-[var(--bg-color-100)] rounded-md text-color-400"
        middle
        center
      >
        F
      </Cell>
    </Grid>
  );
}
`;

export function Responsive2Example() {
  return <CodePreview code={code} />;
}
