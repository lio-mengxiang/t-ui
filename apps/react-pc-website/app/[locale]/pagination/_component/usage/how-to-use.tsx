import { CodeBlock } from '@/_components/typography';

export function HowToUse() {
  return (
    <CodeBlock
      code={`
import { Select, IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, } from '@t-headless-ui/react';

<Pagination.Root
  total={100}
>
  <Pagination.Total>
    {(total, range) => (
      <div>
        {\`\${range[0]\} - \${range[1]} of \${total} items\`}
      </div>
    )}
  </Pagination.Total>

  <Pagination.Previous>
    <IconLeftLine />
  </Pagination.Previous>

  <Pagination.StartItem>
    {(page) => <span>{page}</span>}
  </Pagination.StartItem>

  <Pagination.StartEllipsis>
    <IconMoreFill />
  </Pagination.StartEllipsis>

  <Pagination.Items>
    {(page) => <span>{page}</span>}
  </Pagination.Items>

  <Pagination.EndEllipsis>
    <IconMoreFill />
  </Pagination.EndEllipsis>

  <Pagination.EndItem>
    {(page) => <span>{page}</span>}
  </Pagination.EndItem>

  <Pagination.Next>
    <IconRightLine />
  </Pagination.Next>

  <div>
    <span>Go to</span>
    <Pagination.Jumper />
    <span>Page</span>
  </div>

  <Pagination.Option>
      {({ sizeOptions, pageSize, disabled, onPageSizeChange }) => (
        // this is a select component to change page size
        // you can find an example in Pagination demo page
        <PageSizeSelect sizeOptions={sizeOptions} pageSize={pageSize} disabled={disabled} onPageSizeChange={onPageSizeChange} />
      )}
    </Pagination.Option>
  </Pagination.Root>
`}
      language="jsx"
    />
  );
}
