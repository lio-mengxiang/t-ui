import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <Grid rows={3} columns={1} rowGap="24px">
      <Grid columns={1} gap="8px" rows="30px 1fr" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell>start</Cell>
        <Grid columns="50px 50px 50px" justifyContent="start">
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            A
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            B
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            C
          </Cell>
        </Grid>
      </Grid>
      <Grid columns={1} gap="8px" rows="30px 1fr" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell>end</Cell>
        <Grid columns="50px 50px 50px" justifyContent="end">
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            A
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            B
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            C
          </Cell>
        </Grid>
      </Grid>
        <Grid columns={1} gap="8px" rows="30px 1fr" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell>center</Cell>
        <Grid columns="50px 50px 50px" justifyContent="center">
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            A
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            B
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            C
          </Cell>
        </Grid>
      </Grid>
      <Grid columns={1} gap="8px" rows="40px 1fr" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell className="text-sm md:text-base">space-between</Cell>
        <Grid columns="50px 50px 50px" justifyContent="space-between">
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            A
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            B
          </Cell>
          <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" middle center>
            C
          </Cell>
        </Grid>
      </Grid>
    </Grid>
  );
}
`;

export function JustifyExample() {
  return <CodePreview code={code} />;
}
