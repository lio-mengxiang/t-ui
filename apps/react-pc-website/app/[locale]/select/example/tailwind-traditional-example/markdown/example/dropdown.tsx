import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { useState } from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, IconPlusLine, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


const initialFrameworks = [
  { label: 'fruits', value: 'fruits', isGroupTitle: true }, 
  { label: 'Apple', value: 'apple', grouped: true }, 
  { label: 'Banana', value: 'banana', grouped: true }
];

const showSearch = true;

function App() {
  const [options, setOptions] = useState(initialFrameworks);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue && !options.find(opt => opt.value === inputValue)) {
      const newItem = { label: inputValue, value: inputValue, grouped: true };
      setOptions([...options, newItem]);
      setInputValue('');
    }
  };

  return (
    <Select.Root
      options={options}
      showSearch={showSearch}
    >
      <Select.View
        placeholder="Select city"
        className={cn(
          // 1. Layout & Size
          'group flex h-[34px] w-52 items-center overflow-hidden px-3',
          // 2. Visuals (Border & Radius)
          'rounded border border-[var(--border-color)]',
          // 3. Interactions
          'hover:border-[var(--border-color-200)]',
          
          // 4. State: Focus
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
          
          // 5. State: Disabled (Sorted)
          '[&[aria-disabled="true"]]:cursor-not-allowed',
          '[&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-disabled="true"]]:bg-[var(--bg-color-100)]',
          '[&[aria-disabled="true"]]:text-[var(--text-color-400)]',
          
          // 6. State: ReadOnly
          '[&[aria-readOnly="true"]]:cursor-default',
          '[&[aria-readOnly="true"]]:border-[var(--border-color)]',
          
          // 7. Dynamic Logic
          {
            'cursor-text': showSearch,
            'cursor-default': !showSearch,
          },
        )}
      >
        <div className="flex items-center text-[14px] w-full">
          <Select.Input />
          <Select.Clear className={cn(
            'flex items-center justify-center transition-all duration-200',
            'opacity-0 group-hover:opacity-100'
          )}>
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

        <div className="max-h-[200px] overflow-y-auto">
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
                  <IconCheckLine className={cn(
                    'transition-all duration-200 opacity-0',
                    '[[aria-selected="true"]_&]:opacity-100'
                  )} />
                </Select.Option>
              );
            }}
          </Select.List>
        </div>

        {/* Footer: Add Item Section */}
        <div className="border-t border-[var(--border-color)] mt-1 px-3 py-2 box-border pb-1 flex items-center gap-2">
          <input 
            className={cn(
              "flex-1 h-7 min-w-0 px-2 outline-none rounded text-xs",
              "border border-[var(--border-color)] focus:border-[var(--border-color-200)]"
            )}
            value={inputValue}
            placeholder="New item..."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              e.stopPropagation(); 
              if (e.key === 'Enter') addItem();
            }}
          />
          <button 
            onClick={addItem}
            className={cn(
              "flex items-center gap-1 text-xs transition-colors whitespace-nowrap",
              "text-[var(--text-color-400)] hover:text-[var(--text-color)]"
            )}
          >
            <IconPlusLine />
            Add
          </button>
        </div>
      </Select.Content>
    </Select.Root>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function DropdownExample() {
  return <CodePreview2 code={code} />;
}
