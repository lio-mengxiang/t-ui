'use client';
import { CodePreview2 } from '@/_components/code-preview2';

export const code = `
import React from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, Select, IconEmptyFill } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const frameworks = ['React.js', 'Vue.js', 'Angular.js', 'Svelte.js'];
const showSearch = true;
const isMultiple = true;

function App() {
  return (
    <Select.Root
      options={frameworks}
      showSearch={showSearch}
      isMultiple={isMultiple}
    >
      <Select.View
        placeholder="Select frameworks"
        className={cn('w-64')}
      >
        <Select.MultiInputRoot
          className={cn(
            // 1. Layout & Base
            'group flex items-center overflow-hidden px-3',
            // 2. Borders & Visuals
            'rounded border border-[var(--border-color)]',
            // 3. Interactions (Hover & Default Cursor)
            'cursor-text hover:border-[var(--border-color-200)]',
            
            // 4. States: Focus
            '[&[data-focused="true"]]:border-[var(--border-color-200)]',
            
            // 5. States: Disabled (Grouped together)
            '[&[aria-disabled="true"]]:cursor-not-allowed',
            '[&[aria-disabled="true"]]:bg-[var(--bg-color-100)]',
            '[&[aria-disabled="true"]]:border-[var(--border-color)]',
            '[&[aria-disabled="true"]]:text-[var(--text-color-400)]',
            
            // 6. States: ReadOnly
            '[&[aria-readOnly="true"]]:cursor-default',
            '[&[aria-readOnly="true"]]:border-[var(--border-color)]',

            // 7. Conditional Logic
            {
              'cursor-text': showSearch,
              'cursor-pointer': !showSearch,
              'min-h-[34px]': isMultiple,
              'h-[34px]': !isMultiple,
            },
          )}
        >
          <div className="flex flex-1 flex-wrap items-center gap-1 py-1 min-w-0 text-[14px]">
            <Select.MultiTag
              renderTag={({ label, closable, onClose }, index) => (
                <div
                  key={index}
                  className={cn(
                    // Layout
                    'flex items-center h-[24px] overflow-hidden px-1 pl-2',
                    // Visuals (Border & Bg & Radius)
                    'rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)]',
                    // Typography
                    'text-[12px]',
                  )}
                >
                  <span className={cn(
                    "flex-1 pr-1",
                    "overflow-hidden whitespace-nowrap text-ellipsis"
                  )}>
                    {label}
                  </span>
                  {closable && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose(e);
                      }}
                      className={cn(
                        'flex items-center px-[2px]',
                        'text-[var(--text-color-400)]',
                        'hover:text-[var(--border-color-200)]'
                      )}
                    >
                      <IconCloseLine />
                    </button>
                  )}
                </div>
              )}
            />
            <Select.MultiInput />
          </div>
          
          <div className="flex shrink-0 items-center pl-1">
            <Select.Clear 
              className={cn(
                'flex items-center justify-center',
                'transition-all duration-200',
                'opacity-0 group-hover:opacity-100',
                '[&[aria-disabled="true"]]:cursor-not-allowed'
              )}
            >
              <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100 h-[34px]" />
            </Select.Clear>
            
            <Select.Affix 
              className={cn(
                'flex items-center justify-center',
                'transition-all duration-100',
                'text-[var(--text-color-400)] text-[14px] cursor-pointer',
                '[&[aria-disabled="true"]]:cursor-not-allowed'
              )}
            >
              <IconDownLine />
            </Select.Affix>
          </div>
        </Select.MultiInputRoot>
      </Select.View>

      <Select.Content
        className={cn(
          // Layout & Visuals
          "z-popup py-1.5 rounded shadow-md relative",
          "bg-[var(--bg-color)] border border-[var(--border-color)]",
          
          // Typography
          "text-sm text-[var(--text-color)]"
        )}
      >
        <Select.Empty className="flex justify-center px-3 py-2 text-[var(--text-color-400)] text-8xl">
          <IconEmptyFill />
        </Select.Empty>
        
        <Select.List>
          {(item, index) => {
            const isTitle = !!item.isGroupTitle;
            const isGrouped = item.grouped === true;
            const isDisabled = item.disabled === true;

            return (
              <Select.Option
                key={index}
                item={item}
                activeClassName="bg-[var(--bg-color-100)]"
                className={cn(
                  // Base Layout & Interaction
                  'flex justify-between items-center px-3 py-2 transition-colors',
                  'cursor-pointer',
                  
                  // Conditionals
                  {
                    // Disabled State
                    'opacity-50 cursor-not-allowed': isDisabled,
                    
                    // Group Title State
                    'text-[var(--text-color-400)] text-[12px]': isTitle,
                    'cursor-default bg-transparent': isTitle,
                    
                    // Shared Non-Interactive
                    'pointer-events-none': isTitle || isDisabled,
                  },
                )}
              >
                <span className={cn('flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1', { 'pl-3': isGrouped })}>
                  {item.label}
                </span>
                <IconCheckLine 
                  className={cn(
                    'transition-all duration-200', 
                    'opacity-0', 
                    '[[aria-selected="true"]_&]:opacity-100' // Selected State
                  )} 
                />
              </Select.Option>
            );
          }}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function TailwindBasicMultiExample() {
  return <CodePreview2 code={code} isCenter />;
}
