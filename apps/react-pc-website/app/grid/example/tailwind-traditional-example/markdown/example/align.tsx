import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
    <Grid rows={1} columns="repeat(auto-fit,minmax(120px,1fr))" rowGap="12px">
      <Grid columns={1} gap="8px" rows="30px 200px" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell>start</Cell>
        <Grid gap="8px" columns={1} flow="column" rows="30px 30px 30px" alignContent="start">
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
        <Grid gap="8px" columns={1} flow="column" rows="30px 30px 30px" alignContent="end">
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
        <Grid columns={1} gap="8px" rows="30px 200px" className="border border-[var(--border-color)] rounded-md p-4">
        <Cell>center</Cell>
        <Grid gap="8px" columns={1} flow="column" rows="30px 30px 30px" alignContent="center">
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
        <Cell className="text-sm" alignSelf="center">space-between</Cell>
        <Grid gap="8px" columns={1} flow="column" rows="30px 30px 30px" alignContent="space-between">
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

export function AlignExample() {
  return <CodePreview code={code} />;
}
