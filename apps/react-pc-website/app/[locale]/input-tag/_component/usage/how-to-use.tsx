import { CodeBlock } from '@/_components/typography';

export function HowToUse() {
  return (
    <CodeBlock
      code={`
import { InputTag } from '@t-headless-ui/react';

<InputTag.Root>
  {/* <CustomInputWrapper> It is suggested to customize the input wrapper */}
  <InputTag.Input/>
  {/* <CustomInputWrapper> */}
</InputTag.Root>
`}
      language="jsx"
    />
  );
}
