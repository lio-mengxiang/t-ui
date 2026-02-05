import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { useState, useRef, useCallback } from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function App() {
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const refFetchId = useRef(null);

  const fetchUser = (inputValue) => {
    if (!inputValue) {
      setOptions([]);
      return;
    }
    refFetchId.current = Date.now();
    const fetchId = refFetchId.current;
    
    setFetching(true);
    fetch(\`https://randomuser.me/api/?results=5\`)
      .then((res) => res.json())
      .then((body) => {
        if (refFetchId.current === fetchId) {
          const newOptions = body.results.map((user) => ({
            label: \`\${user.name.first} \${user.name.last}\`,
            value: user.email,
          }));
          setOptions(newOptions);
          setFetching(false);
        }
      })
      .catch(() => {
        if (refFetchId.current === fetchId) setFetching(false);
      });
  };

  const debouncedFetchUser = useCallback(debounce(fetchUser, 500), []);

  return (
    <MultiSelectSearch
      options={options}
      fetching={fetching}
      onSearch={debouncedFetchUser}
      placeholder="Search by user name"
      className="w-64"
    />
  );
}

const MultiSelectSearch = ({
  options,
  value,
  defaultValue,
  onChange,
  onSearch,      // 新增：处理搜索回调
  fetching,      // 新增：处理加载状态
  placeholder = "Select...",
  disabled = false,
  showSearch = true,
  className,
}) => {
  const isMultiple = true;

  return (
    <Select.Root
      options={options}
      showSearch={showSearch}
      isMultiple={isMultiple}
      onSearch={onSearch}
      filterOption={false} // 远程搜索通常关闭本地过滤
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      onValueChange={onChange}
      disabled={disabled}
    >
      <Select.View
        placeholder={placeholder}
        className={cn('w-52', className)}
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
            
            // 5. States: Disabled
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
              renderTag={({ label, closable, onClose, disabled: tagDisabled }, index) => (
                <div
                  key={index}
                  className={cn(
                    // Layout
                    'flex items-center h-[24px] overflow-hidden px-1 pl-2',
                    // Visuals (Border & Bg & Radius)
                    'rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)]',
                    // Typography
                    'text-[12px]',
                    // State
                    { 'opacity-50 cursor-not-allowed': tagDisabled },
                  )}
                >
                  <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1">
                    {label}
                  </span>
                  {closable && !tagDisabled && (
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); onClose(e); }}
                      className="px-[2px] text-[var(--text-color-400)] hover:text-[var(--border-color-200)]"
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
                'flex items-center justify-center transition-all duration-200',
                'opacity-0 group-hover:opacity-100',
                '[&[aria-disabled="true"]]:cursor-not-allowed'
              )}
            >
              <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100 h-[34px]" />
            </Select.Clear>
            
            <Select.Affix 
              className={cn(
                'flex items-center justify-center transition-all duration-100',
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
          "z-popup py-1.5 rounded shadow-md relative",
          "bg-[var(--bg-color)] border border-[var(--border-color)]",
          "text-sm text-[var(--text-color)]"
        )}
      >
        {fetching ? (
          <div className="flex justify-center items-center py-6 text-[var(--text-color-400)]">
            <div className="animate-spin h-4 w-4 border-2 border-[var(--border-color-200)] border-t-transparent rounded-full mr-2" />
            Searching...
          </div>
        ) : (
          <>
            <Select.Empty className="flex flex-col items-center justify-center px-3 py-4 text-[var(--text-color-400)]">
              <IconEmptyFill className="text-6xl" />
            </Select.Empty>
            
            <Select.List>
              {(item, index) => (
                <Select.Option
                  key={index}
                  item={item}
                  className={cn(
                    'flex justify-between items-center px-3 py-2 cursor-pointer transition-colors',
                    'hover:bg-[var(--bg-color-100)]',
                    { 'opacity-50 pointer-events-none': item.disabled }
                  )}
                >
                  <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1">
                    {item.label}
                  </span>
                  <IconCheckLine className="transition-all duration-200 opacity-0 [[aria-selected='true']_&]:opacity-100 text-[var(--primary-color)]" />
                </Select.Option>
              )}
            </Select.List>
          </>
        )}
      </Select.Content>
    </Select.Root>
  );
};

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { fn.apply(this, args); }, delay);
  };
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function RemoteSearchExample() {
  return <CodePreview2 code={code} />;
}
