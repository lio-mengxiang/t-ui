import { CodePreview } from '@/_components/code-preview';
import React from 'react';
import './arrow.css';

const code = `import { Popover } from '@t-headless-ui/react';

function App({showArrow = true}) {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
     <Popover.Content className="p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm z-[1001] relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]">
          Popover Content
          {showArrow && (
            <Arrow />
          )}
      </Popover.Content>
    </Popover.Root>
  );
}

function Arrow(){
  const { popperRef, placement } = useContext(Popover.PopoverContext);
  const { state } = popperRef.current;

  return <div
    data-placement={state?.placement || placement}
    className="absolute z-[1] bg-inherit
    before:absolute before:content-[''] before:w-[var(--popover-arrow-width)] before:h-[var(--popover-arrow-width)] before:rotate-45 before:bg-inherit
    data-[placement^='top']:before:rounded-tl-full data-[placement^='top']:before:border-b data-[placement^='top']:before:border-r data-[placement^='top']:before:border-[var(--border-color)]
    data-[placement^='bottom']:before:rounded-br-full data-[placement^='bottom']:before:border-t data-[placement^='bottom']:before:border-l data-[placement^='bottom']:before:border-[var(--border-color)]
    data-[placement^='left']:before:border-t data-[placement^='left']:before:border-r data-[placement^='left']:before:border-[var(--border-color)]
    data-[placement^='right']:before:border-b data-[placement^='right']:before:border-l data-[placement^='right']:before:border-[var(--border-color)]
    data-[placement='top']:left-1/2 data-[placement='top']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='top-start']:left-[var(--popover-arrow-width)]
    data-[placement='top-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='bottom']:-top-[calc(var(--popover-arrow-width)/2+1px)]
    data-[placement='bottom-start']:left-[var(--popover-arrow-width)]
    data-[placement='bottom']:left-1/2 data-[placement='bottom']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='bottom-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='left']:right-[calc(var(--popover-arrow-width)/2)]
    data-[placement='left-start']:top-[var(--popover-arrow-width)]
    data-[placement='left']:top-1/2 data-[placement='left']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='left-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='right']:left-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-start']:top-[var(--popover-arrow-width)]
    data-[placement='right']:top-1/2 data-[placement='right']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    "
  ></div>
}
`;

export function ArrowExample() {
  return <CodePreview code={code} />;
}
