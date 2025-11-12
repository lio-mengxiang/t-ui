import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { createIcon } from '@t-headless-ui/react';

function App() {
  return (
  <svg width="200" height="200" viewBox="0 0 200 200" style={{ border: '1px solid #ccc' }}>
      {/* 在 (50,50) 绘制一个 40x40 的矩形 */}
      <rect x="50" y="50" width="40" height="40" fill="lightblue" />
  </svg>)
}`;

export function CoordinateExample() {
  return <CodePreview code={code} />;
}
