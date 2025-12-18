import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  return (
     <TEmpty description="No Data" icon={<IconEmptyFill />} />
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
