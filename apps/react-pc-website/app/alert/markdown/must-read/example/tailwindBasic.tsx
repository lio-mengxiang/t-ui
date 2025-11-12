import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import React from 'react';
import { IconErrorLine, IconInfoLine, IconSuccessLine, IconWarningLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';

const Alert = ({ title, message, type = 'default', icon, onClose }) => {
  return (
    <div
      className={cs('flex items-center justify-between p-3 bg-white rounded-[10px] w-60 md:w-80', {
        'border border-gray-300': type === 'default',
        'border border-green-600': type === 'success',
        'border border-amber-500': type === 'warning',
        'border border-red-600': type === 'error',
      })}
    >
      <div className="flex items-start gap-2">
        <span
          className={cs('text-xl', {
            'text-neutral-500 mt-1': type === 'default',
            'text-green-600 mt-1': type === 'success',
            'text-amber-500 mt-1': type === 'warning',
            'text-red-600 mt-1': type === 'error',
            'mt-0.5': !message,
          })}
        >
          {icon}
          {type === 'default' && !icon && <IconInfoLine />}
          {type === 'success' && !icon && <IconSuccessLine />}
          {type === 'warning' && !icon && <IconWarningLine />}
          {type === 'error' && !icon && <IconErrorLine />}
        </span>
        <div className="flex-1">
          <div className="block text-[0.95rem] font-medium text-gray-900">{title}</div>
          <p className="m-0 text-[0.85rem] text-neutral-500">{message}</p>
        </div>
      </div>
      <div>
        <button
          className="bg-transparent border-none text-[1.1rem] text-gray-400 cursor-pointer p-0 ml-2 hover:text-neutral-500"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert title="Alert" message="This is an alert message" />
      <Alert title="Alert" message="This is an alert message" type="success" />
      <Alert title="Alert" message="This is an alert message" type="warning" />
      <Alert title="Alert" message="This is an alert message" type="error" />
      <Alert title="Alert" />
      <Alert title="Alert" type="success" />
      <Alert title="Alert" type="warning" />
      <Alert title="Alert" type="error" />
    </div>
  );
}`;

export function TailwindBasicExample() {
  return <CodePreview code={code} />;
}
