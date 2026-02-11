import React from 'react';
import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { ReactNode } from 'react';
import { 
  IconLeftLine, 
  IconRightLine, 
  IconMoreFill, 
  Pagination 
} from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const baseItemStyles = 'flex justify-center items-center w-8 h-8 rounded-lg cursor-pointer select-none outline-0 [&:not([aria-disabled="true"])]:hover:bg-[var(--bg-color-100)]';
const activeStyles = '[&[aria-current="true"]]:border [&[aria-current="true"]]:border-[var(--border-color)]';
const disabledStyles = '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-30';


function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <MyPagination
        total={200}
        renderTotal={(total) => (
          <div className="flex items-center mr-1">
            Total {total} pages
          </div>
        )}
      />
      <MyPagination total={100} renderTotal={(total, range) => (
          <div className="flex items-center mr-1">
            {\`\${range[0]\} - \${range[1]} of \${total} items\`}
          </div>
        )} />
    </div>
  );
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const MyPagination = ({
  total, 
  defaultCurrent = 1, 
  defaultPageSize = 10, 
  renderTotal,
  className 
}) => {
  return (
    <Pagination.Root 
      total={total} 
      defaultCurrent={defaultCurrent} 
      defaultPageSize={defaultPageSize} 
      className={cn("flex items-center h-8 text-[14px] gap-1", className)}
    >
      {renderTotal && (
        <Pagination.Total>
          {(totalCount, range) => renderTotal(totalCount, range)}
        </Pagination.Total>
      )}

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
    </Pagination.Root>
  );
};


`;

export function TotalExample() {
  return <CodePreview2 code={code} />;
}
