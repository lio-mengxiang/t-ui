import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import { Button, IconLoadingLine } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-solid border-transparent';

function TButton({ status = 'default', disabled, loading, children, small, large, ...restProps }) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled,
        // warning
        'bg-orange-600': status === 'warning' && !disabled,
        // error
        'bg-red-600': status === 'error' && !disabled,
        // success
        'bg-green-600': status === 'success' && !disabled,
        // default
        'bg-gray-200': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled,
        'hover:bg-orange-500': status === 'warning' && !disabled,
        'hover:bg-red-500': status === 'error' && !disabled,
        'hover:bg-green-500': status === 'success' && !disabled,
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
        // loading
        'cursor-not-allowed border border-transparent': disabled,
        // active
        'active:bg-blue-700': status === 'primary' && !disabled,
        'active:bg-warning-700': status === 'warning' && !disabled,
        'active:bg-red-700': status === 'error' && !disabled,
        'active:bg-green-700': status === 'success' && !disabled,
        // focus
        'focus-visible:border-blue-200': status === 'primary' && !disabled,
        'focus-visible:border-warning-200': status === 'warning' && !disabled,
        'focus-visible:border-red-200': status === 'error' && !disabled,
        'focus-visible:border-green-200': status === 'success' && !disabled,
        // size
        'h-7': small,
        'h-9': large,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="inline-flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-white/20 [&>button:not(:last-child)]:border-r">
      <TButton status="primary">Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary">Large</TButton>
    </div>
  );
}`;

export function GroupExample() {
  return <CodePreview code={code} />;
}
