import { CodeBlock } from '@/_components/typography';

export function HowToUse() {
  return (
    <CodeBlock
      code={`
import { Select, IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, } from '@t-headless-ui/react';

// single select
<Select.Root>
  <Select.View>
    <Select.Input />
    <Select.Clear />
    <Select.Affix />
  </Select.View>
  <Select.Content>
    <Select.Empty />
    <Select.List>
      {(item) => (
        <Select.Option
          key={item.value}
          item={item}
        />
      )}
    </Select.List>
  </Select.Content>
</Select.Root>

// multiple select
<Select.Root isMultiple>
  <Select.View>
    <Select.MultiInputRoot>
      <Select.MultiTag />
      <Select.MultiInput />
    </Select.MultiInputRoot>
    <Select.Clear />
    <Select.Affix />
  </Select.View>
  <Select.Content>
    <Select.Empty />
    <Select.List>
      {(item) => (
        <Select.Option
          key={item.value}
          item={item}
        />
      )}
    </Select.List>
  </Select.Content>
</Select.Root>
`}
      language="jsx"
    />
  );
}
