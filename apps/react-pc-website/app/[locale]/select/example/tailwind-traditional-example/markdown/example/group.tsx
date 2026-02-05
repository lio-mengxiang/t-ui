import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const frameworks = [{ label: 'fruits', value: 'fruits', children: [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }] }, { label: 'veggies', value: 'veggies', children: [{ label: 'Carrot', value: 'carrot' }, { label: 'Broccoli', value: 'broccoli' }] }];
const showSearch = true;

function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <SimpleSelect 
        options={frameworks} 
        placeholder="Select city" 
      />
    </div>
  );
}

const SimpleSelect = ({ 
  options, 
  showSearch = true, 
  placeholder = "Select...", 
  className,
  ...props 
}) => {
  return (
    <Select.Root options={options} showSearch={showSearch} {...props}>
      <Select.View
        placeholder={placeholder}
        className={cn(
          // 1. Layout & Size
          'group flex h-[34px] w-52 items-center overflow-hidden px-3',
          // 2. Visuals
          'rounded border border-[var(--border-color)]',
          // 3. Interactions
          'hover:border-[var(--border-color-200)]',
          
          // 4. States: Focus
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
          
          // 5. States: Disabled
          '[&[aria-disabled="true"]]:cursor-not-allowed',
          '[&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-disabled="true"]]:bg-[var(--bg-color-100)]',
          '[&[aria-disabled="true"]]:text-[var(--text-color-400)]',
          
          // 6. States: ReadOnly
          '[&[aria-readOnly="true"]]:cursor-default',
          '[&[aria-readOnly="true"]]:border-[var(--border-color)]',
          
          // 7. Dynamic Logic
          {
            'cursor-text': showSearch,
            'cursor-pointer': !showSearch,
          },
          className
        )}
      >
        <div className="flex items-center text-[14px] w-full">
          <Select.Input />
          <Select.Clear className="flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100">
            <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100 h-[34px]" />
          </Select.Clear>
          <Select.Affix className="flex items-center justify-center transition-all duration-100 text-[var(--text-color-400)] text-[14px]">
            <IconDownLine className="cursor-pointer" />
          </Select.Affix>
         </div>
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
                  // Layout & Interaction
                  'flex justify-between items-center px-3 py-2 transition-colors cursor-pointer',
                  // Conditionals
                  {
                    'opacity-50 cursor-not-allowed': isDisabled,
                    'text-[var(--text-color-400)] text-[12px] cursor-default bg-transparent': isTitle,
                    'pointer-events-none': isTitle || isDisabled,
                  },
                )}
              >
                <span className={cn('flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1', { 'pl-3': isGrouped })}>
                  {item.label}
                </span>
                <IconCheckLine className={cn('transition-all duration-200 opacity-0', '[[aria-selected="true"]_&]:opacity-100')} />
              </Select.Option>
            );
          }}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function GroupExample() {
  return <CodePreview2 code={code} />;
}
