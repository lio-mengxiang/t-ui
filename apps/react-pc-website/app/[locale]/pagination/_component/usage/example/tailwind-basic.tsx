import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { useState } from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, IconLeftLine, IconMoreFill, IconRightLine, InputComponent, Pagination, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const baseItemStyles = 'flex justify-center items-center w-8 h-8 rounded-lg cursor-pointer select-none outline-0 [&:not([aria-disabled="true"])]:hover:bg-[var(--bg-color-100)]';
const activeStyles = '[&[aria-current="true"]]:border [&[aria-current="true"]]:border-[var(--border-color)]';
const disabledStyles = '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-30';

function App() {

  return (
    <div className="flex items-center gap-4">
      <Pagination.Root 
        total={100} 
        defaultCurrent={1}
        defaultPageSize={10}
        className="flex items-center h-8 text-[14px] gap-1"
      >
        <Pagination.Total>
          {(total, range) => (
            <div className="flex items-center mr-1">
              {\`\${range[0]\} - \${range[1]} of \${total} items\`}
            </div>
          )}
        </Pagination.Total>

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

        <div className="flex items-center gap-2 ml-4">
          <span className="text-[14px]">Go to</span>
          <Pagination.Jumper className="box-border w-12 h-6 border border-[var(--border-color)] rounded-md outline-none text-center [&[aria-disabled='true']]:cursor-not-allowed" />
          <span className="text-[14px]">Page</span>
        </div>
      </Pagination.Root>
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
