import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';

function App() {
  const className = 'text-color-500 text-sm cursor-pointer hover:text-primary-color mb-3';
  const activeClassName = 'text-primary-color';
  return (
    <div style={{ display: 'flex' }} id="attach" className="anchor-demo-attach">
      <TAnchor
        scrollContainer="#anchor-container"
        className="md:w-32 w-20"
        items={[
          {
            text: 'content-1',
            activeClassName: activeClassName,
            className: className,
          },
          {
            text: 'content-2',
            activeClassName: activeClassName,
            className: className,
          },
          {
            text: 'content-3',
            activeClassName: activeClassName,
            className: className,
          },
          {
            text: 'content-4',
            activeClassName: activeClassName,
            className: className,
          },
        ]}
      />
      <div id="anchor-container" className="flex-1 w-full h-[200px] overflow-auto text-center md:text-xl text-sm text-[#333333]">
        <div id="content-1" style={{ background: '#DFEFFF', lineHeight: '100px' }}>
          content-1
        </div>
        <div id="content-2" style={{ background: '#BFDBF7', lineHeight: '100px' }}>
          content-2
        </div>
        <div id="content-3" style={{ background: '#9BC5F2', lineHeight: '100px' }}>
          content-3
        </div>
        <div id="content-4" style={{ background: '#7BAFED', lineHeight: '100px' }}>
          content-4
        </div>
        <div id="content-5" style={{ background: '#5C99EB', lineHeight: '100px' }}>
          content-5
        </div>
      </div>
    </div>
  );
}
`;

export function ContainerExample() {
  return <CodePreview2 code={code} />;
}
