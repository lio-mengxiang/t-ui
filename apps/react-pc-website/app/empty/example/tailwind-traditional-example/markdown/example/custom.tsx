import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
import React from 'react';
import { createIcon } from '@t-headless-ui/react';

function App() {
  return (
     <TEmpty description="No data, please reload!" icon={<IconEmpty />} iconClassName="text-color-400 text-7xl" />
  );
}

const IconEmpty = createIcon({
  iconProps: { useStrokeCurrentColor: true },
  viewBox: '0 0 48 48',
  paths: (
    <>
      <path d="M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" strokeWidth="2"></path>
    </>
  ),
})`;

export function CustomExample() {
  return <CodePreview code={code} />;
}
