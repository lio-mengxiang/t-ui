import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `function App() {
  return (
    <button
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '0 14px',
          fontSize: '14px',
          lineHeight: '32px',
          borderRadius: '4px',
          background: '#2563eb',
      }}
    >
      Primary
    </button>
  );
}`;

export function BasicExample() {
  return <CodePreview code={code} />;
}
