import { CodeBlock } from '@/_components/typography';

export function HowToUse() {
  return (
    <CodeBlock
      code={`
import { Anchor } from '@t-headless-ui/react';

<Anchor.Root>
  <Anchor.Link targetId="Anchor 1">
    Anchor 1
    <Anchor.Link targetId="Anchor 2">
      Anchor 2
    </Anchor.Link>
  </Anchor.Link>
  <Anchor.Link targetId="Anchor 3">
    Anchor 3
  </Anchor.Link>
</Anchor.Root>
`}
      language="jsx"
    />
  );
}
