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
  const total = 200;
  return (
    <div className="flex items-center gap-4">
      <Pagination.Root
        total={total}
        defaultCurrent={1}
        defaultPageSize={10}
        className={cn('flex items-center h-8 text-[14px] gap-1 [&[aria-disabled="true"]]:cursor-not-allowed')}
      >
        <Pagination.Previous className={cn(baseItemStyles, 'mr-1', disabledStyles)}>
          <IconLeftLine />
        </Pagination.Previous>

         <div className="flex items-center gap-2">
          <Pagination.Jumper showCurrent className="box-border w-12 h-6 border border-[var(--border-color)] rounded-md outline-none text-center [&[aria-disabled='true']]:cursor-not-allowed [&[aria-disabled='true']]:opacity-50" />
          <Pagination.Total>
            {(totalCount, range, allPages) => <span className="ml-1">/ <span className="ml-1">{allPages}</span></span>}
          </Pagination.Total>
        </div>

        <Pagination.Next className={cn(baseItemStyles, 'ml-1', disabledStyles)}>
          <IconRightLine />
        </Pagination.Next>
      </Pagination.Root>
    </div>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function SimpleJumperExample() {
  return <CodePreview2 code={code} />;
}
