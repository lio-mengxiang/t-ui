import { CodePreview2 } from '@/_components/code-preview2';

const code = `
'use client';
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { InputTag, IconCloseLine } from '@t-headless/react';

const tags = ['React', 'Vue', 'Next.js', 'Node.js'];

function App() {
  return (
    <InputTag.Root
      defaultValue={tags}
      maxTagCount={{
        count: 2,
        render: (rest) => (
          <Popover.Root
            placement="top"
          >
            <Popover.Trigger><span className="text-[12px]">+{rest.length}</span></Popover.Trigger>
            <Popover.Content
              className={cs(
                "p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]",
                'z-popup',
              )}
            >
              <pre className="py-1">{rest.map((item) => item.value).join(',\\n')}</pre>
            </Popover.Content>
          </Popover.Root>
        )
      }}
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
                  'opacity-50 cursor-not-allowed': disabled
                }
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

export function MaxTagCountExample() {
  return <CodePreview2 code={code} />;
}
