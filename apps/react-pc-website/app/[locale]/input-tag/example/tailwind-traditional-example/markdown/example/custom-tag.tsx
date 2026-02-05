import { CodePreview2 } from '@/_components/code-preview2';

const code = `
'use client';
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { InputTag, IconCloseLine } from '@t-headless/react';

function App() {
  return (
    <InputTag.Root
      defaultValue={['apple', 'orange', 'banana']}
      onChange={(v) => console.log(v)}
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
          renderTag={({ label, closable, onClose, disabled, readOnly }, index) => {
            return (
              <div
                key={index}
                className={cn('flex items-center h-[24px] gap-1 px-2 rounded-full border text-[12px] transition-all pl-2 pr-1', {
                  'opacity-50 cursor-not-allowed': disabled,
                  'pr-2': disabled || readOnly,
                })}
              >
                <IconCarrotFill className="rounded-full" />
                <span className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>

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
          }}
        />
        <InputTag.Input
          placeholder="input..."
          className={cn(
            'bg-transparent text-[14px] py-1',
            '[&[aria-disabled="true"]]:cursor-not-allowed',
            '[&[aria-readonly="true"]]:cursor-default',
          )}
        />
      </div>
      <div className="flex shrink-0 items-center pl-1">
        <InputTag.Clear className="flex invisible group-hover:visible items-center justify-center transition-all">
          <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100" />
        </InputTag.Clear>
      </div>
    </InputTag.Root>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function CustomTagExample() {
  return <CodePreview2 code={code} />;
}
