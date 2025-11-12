import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { Button } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded';

function TButton({
  status = 'default',
  disabled,
  loading,
  children,
  ...restProps
}) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-500': status === 'primary' && !disabled,
        // warning
        'bg-orange-500': status === 'warning' && !disabled,
        // error
        'bg-red-500': status === 'error' && !disabled,
        // success
        'bg-green-500': status === 'success' && !disabled,
        // default
        'bg-gray-100': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-300': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        'cursor-not-allowed border border-transparent': disabled,
      })}
      {...restProps}
    >
      {children}
    </Button>
  );
}

function App() {
  return (
      <TButton status="primary">Button</TButton>
  );
}`;

export function BasicTailwindExample() {
  return <CodePreview code={code} />;
}
