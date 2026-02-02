import { CodeBlock } from '@/_components/typography';

export function HowToUse() {
  return (
    <CodeBlock
      code={`
import { InputTag, IconCloseLine } from '@t-headless-ui/react';

<InputTag.Root>
  <InputTag.Tag />
  <InputTag.Input />
  <InputTag.Clear>
      <IconCloseLine />
  </InputTag.Clear>
</InputTag.Root>
`}
      language="jsx"
    />
  );
}
