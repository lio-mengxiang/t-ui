import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React, { useContext } from 'react';
import { InputTag, IconCloseLine } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function App() {
  return (
    <InputTag.Root>
      <CustomInputWrapper>
        <InputTag.Input
          placeholder="Enter tags..."
          className="flex-1 min-w-[40px] border-none outline-none bg-transparent text-[14px]"
          renderTag={({ label, closable, onClose, disabled }, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center h-[24px] overflow-hidden rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)] px-1 pl-2 text-[12px] leading-[22px]',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                {label}
              </span>

              {closable && !disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(e);
                  }}
                  className="ml-1 flex items-center px-[2px] text-[var(--text-color-400)] hover:text-[var(--border-color-200)]"
                >
                  <IconCloseLine />
                </button>
              )}
            </div>
          )}
        />

        <ClearButton />
      </CustomInputWrapper>
    </InputTag.Root>
  );
}

function CustomInputWrapper({ children }) {
  const { focused, disabled, readOnly } = useContext(InputTag.Context);

  return (
    <div
      className={cn(
        'flex min-h-[32px] flex-wrap items-center gap-1 overflow-hidden rounded border border-[var(--border-color)] px-3 py-1 transition cursor-text',
        'hover:border-[var(--border-color-200)]',
        focused && 'border-[var(--border-color-200)]',
        disabled && 'cursor-not-allowed opacity-60',
        readOnly && 'bg-[var(--bg-color-50)]'
      )}
    >
      {children}
    </div>
  );
}

function ClearButton() {
  const { value, disabled, readOnly, handleClearClick } =
    useContext(InputTag.Context);

  if (disabled || readOnly || !value?.length) return null;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleClearClick(e);
      }}
      className="flex items-center"
    >
      <IconCloseLine className="cursor-pointer text-[14px] opacity-60" />
    </div>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function TailwindBasicExample() {
  return <CodePreview2 code={code} />;
}
