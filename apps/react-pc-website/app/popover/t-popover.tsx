import React, { useContext } from 'react';
import { Popover, PopoverProps, PortalProps } from '@t-headless-ui/react';
import { TButton } from '@/button/tailwind-button';
import { cs } from '@/_utils';
import { type Variants } from 'motion/react';

interface TPopoverProps extends PopoverProps {
  attach?: PortalProps['attach'];
  children: React.ReactNode;
  showArrow?: boolean;
  popoverContent: React.ReactNode;
  contentClassName?: string;
  animateFn?: (placement: PopoverProps['placement']) => Variants;
}

export function TPopover({
  placement = 'top',
  trigger = 'hover',
  attach = 'body',
  disabled = false,
  children,
  offsetDistance = 0,
  offsetSkidding = 0,
  strategy = 'absolute',
  visible,
  defaultVisible,
  onVisibleChange,
  showArrow = false,
  contentClassName,
  popoverContent,
  animateFn,
}: TPopoverProps) {
  return (
    <Popover.Root
      placement={placement}
      trigger={trigger}
      disabled={disabled}
      strategy={strategy}
      offsetDistance={offsetDistance}
      offsetSkidding={offsetSkidding}
      visible={visible}
      defaultVisible={defaultVisible}
      onVisibleChange={onVisibleChange}
    >
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        attach={attach}
        animateFn={animateFn}
        className={cs(
          "p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]",
          `z-popup`,
          contentClassName,
        )}
      >
        {popoverContent}
        {showArrow && <Arrow />}
      </Popover.Content>
    </Popover.Root>
  );
}

function Arrow() {
  const { popperRef, placement } = useContext(Popover.PopoverContext);
  const { state } = popperRef!.current;

  return (
    <div
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
  );
}
export function TPopoverExample() {
  return (
    <TPopover popoverContent="Popover Content" showArrow>
      <TButton>Hover me!</TButton>
    </TPopover>
  );
}
