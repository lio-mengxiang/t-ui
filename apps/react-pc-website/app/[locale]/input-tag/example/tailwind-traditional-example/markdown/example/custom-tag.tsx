import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconCarrotFill } from '@t-headless/react';


function App() {
  return (
    <TInputTag
      allowClear
      globalProps={{
        defaultValue: ['React', 'Vue', 'Angular'],
        onChange: v => console.log('Tags:', v),
      }}
      inputProps={{
        placeholder: 'input...',
        renderTag: ({ label, closable, onClose, disabled, readOnly }, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex items-center h-[24px] gap-1 px-2 rounded-full border text-[12px] transition-all pl-2 pr-1',
                { 'opacity-50 cursor-not-allowed': disabled,  'pr-2': disabled || readOnly, }
              )}
            >
              <IconCarrotFill className="rounded-full"  />
              <span className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {label}
              </span>

              {closable && !disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(e);
                  }}
                  className="hover:bg-black/5 rounded-full p-0.5"
                >
                  <svg size={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          );
        },
      }}
    />
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function CustomTagExample() {
  return <CodePreview2 code={code} />;
}
