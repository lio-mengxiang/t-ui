import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { useState } from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, IconLeftLine, IconMoreFill, IconRightLine, Pagination, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const baseItemStyles = 'flex justify-center items-center w-8 h-8 rounded-lg cursor-pointer select-none outline-0 [&:not([aria-disabled="true"])]:hover:bg-[var(--bg-color-100)]';
const activeStyles = '[&[aria-current="true"]]:border [&[aria-current="true"]]:border-[var(--border-color)]';
const disabledStyles = '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-30';

function App() {

  return (
    <div className="flex items-center gap-4">
      <Pagination.Root
        total={200}
        defaultCurrent={1}
        defaultPageSize={10}
        className="flex items-center h-8 text-[14px] gap-1"
      >
        <Pagination.Previous className={cn(baseItemStyles, 'mr-1', disabledStyles)}>
          <IconLeftLine />
        </Pagination.Previous>

        <Pagination.StartItem className={cn(baseItemStyles, activeStyles, disabledStyles)}>
          {(page) => <span>{page}</span>}
        </Pagination.StartItem>

        <Pagination.StartEllipsis className={cn(baseItemStyles, disabledStyles)}>
          <IconMoreFill />
        </Pagination.StartEllipsis>

        <Pagination.Items className={cn(baseItemStyles, activeStyles, disabledStyles)}>
          {(page) => <span>{page}</span>}
        </Pagination.Items>

        <Pagination.EndEllipsis className={cn(baseItemStyles, disabledStyles)}>
          <IconMoreFill />
        </Pagination.EndEllipsis>

        <Pagination.EndItem className={cn(baseItemStyles, activeStyles, disabledStyles)}>
          {(page) => <span>{page}</span>}
        </Pagination.EndItem>

        <Pagination.Next className={cn(baseItemStyles, 'ml-1', disabledStyles)}>
          <IconRightLine />
        </Pagination.Next>

        <Pagination.Option>
          {({ sizeOptions, pageSize, disabled, onPageSizeChange }) => (
            <PageSizeSelect sizeOptions={sizeOptions} pageSize={pageSize} disabled={disabled} onPageSizeChange={onPageSizeChange} />
          )}
        </Pagination.Option>
      </Pagination.Root>
    </div>
  );
}


function PageSizeSelect({ sizeOptions, pageSize, disabled, onPageSizeChange }) {
  return (
    <Select.Root options={sizeOptions.map(size => ({ label: \`\${size} / Page\`, value: size }))} value={pageSize} onChange={onPageSizeChange} disabled={disabled}>
      <Select.View
        placeholder="Select page size"
        className={cn(
          'group flex h-7 w-28 items-center overflow-hidden px-3',
          'rounded border border-[var(--border-color)] [&:not([aria-disabled="true"])]:hover:border-[var(--border-color-200)]',
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
          '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-50',
          'cursor-pointer'
        )}
      >
        <div className="flex items-center text-[12px] w-full">
          <Select.Input />
          <Select.Affix className="flex items-center justify-center text-[var(--text-color-400)] text-[14px]">
            <IconDownLine />
          </Select.Affix>
        </div>
      </Select.View>

      <Select.Content className="z-popup py-1.5 rounded shadow-md bg-[var(--bg-color)] border border-[var(--border-color)] text-sm">
        <Select.Empty className="flex justify-center px-3 py-2 text-[var(--text-color-400)] text-8xl">
          <IconEmptyFill />
        </Select.Empty>

        <Select.List>
          {(item, index) => (
            <Select.Option
              key={index}
              item={item}
              activeClassName="bg-[var(--bg-color-100)]"
              className={cn(
                'flex justify-between items-center px-3 py-2 transition-colors cursor-pointer',
                {
                  'opacity-50 cursor-not-allowed': item.disabled,
                  'text-[var(--text-color-400)] text-[12px] cursor-default bg-transparent': item.isGroupTitle,
                  'pointer-events-none': item.isGroupTitle || item.disabled,
                },
              )}
            >
              <span className={cn('flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1', { 'pl-3': item.grouped })}>
                {item.label}
              </span>
            </Select.Option>
          )}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function ChangePageSizeExample() {
  return <CodePreview2 code={code} />;
}
