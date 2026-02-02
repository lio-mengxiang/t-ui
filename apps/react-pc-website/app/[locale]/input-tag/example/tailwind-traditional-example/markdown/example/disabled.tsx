import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { InputTag, IconCloseLine } from '@t-headless/react';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <InputTag.Root
        defaultValue={['disabled']}
        disabled
        className={cn(
          'group flex min-h-[34px] items-center overflow-hidden rounded border border-[var(--border-color)] px-3 transition cursor-text',
          'hover:border-[var(--border-color-200)]',
          '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-readOnly="true"]]:cursor-default [&[aria-readOnly="true"]]:border-[var(--border-color)]',
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
        )}
      >
        <div className="flex flex-1 flex-wrap items-center gap-1 py-1 min-w-0">
          <InputTag.Tag
            renderTag={({ label, closable, onClose, disabled }, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center h-[24px] overflow-hidden rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)] px-1 pl-2 text-[12px]',
                  {
                    'opacity-50 cursor-not-allowed': disabled,
                  },
                )}
              >
                <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1">{label}</span>
                {closable && !disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose(e);
                    }}
                    className="flex items-center px-[2px] text-[var(--text-color-400)] hover:text-[var(--border-color-200)]"
                  >
                    <IconCloseLine />
                  </button>
                )}
              </div>
            )}
          />
          <InputTag.Input
            placeholder="input..."
            className={cn(
              'flex-1 min-w-[40px] border-none outline-none bg-transparent text-[14px] py-1',
              '[&[aria-disabled="true"]]:cursor-not-allowed',
              '[&[aria-readonly="true"]]:cursor-default',
            )}
          />
        </div>
      </InputTag.Root>
      <InputTag.Root
        defaultValue={['readOnly']}
        readOnly
        className={cn(
          'group flex min-h-[34px] items-center overflow-hidden rounded border border-[var(--border-color)] px-3 transition cursor-text',
          'hover:border-[var(--border-color-200)]',
          '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-readOnly="true"]]:cursor-default [&[aria-readOnly="true"]]:border-[var(--border-color)]',
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
        )}
      >
        <div className="flex flex-1 flex-wrap items-center gap-1 py-1 min-w-0">
          <InputTag.Tag
            renderTag={({ label, closable, onClose, disabled }, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center h-[24px] overflow-hidden rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)] px-1 pl-2 text-[12px]',
                  {
                    'opacity-50 cursor-not-allowed': disabled,
                  },
                )}
              >
                <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1">{label}</span>
                {closable && !disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose(e);
                    }}
                    className="flex items-center px-[2px] text-[var(--text-color-400)] hover:text-[var(--border-color-200)]"
                  >
                    <IconCloseLine />
                  </button>
                )}
              </div>
            )}
          />
          <InputTag.Input
            placeholder="input..."
            className={cn(
              'flex-1 min-w-[40px] border-none outline-none bg-transparent text-[14px] py-1',
              '[&[aria-disabled="true"]]:cursor-not-allowed',
              '[&[aria-readonly="true"]]:cursor-default',
            )}
          />
        </div>
      </InputTag.Root>
    </div>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function DisableExample() {
  return <CodePreview2 code={code} />;
}
