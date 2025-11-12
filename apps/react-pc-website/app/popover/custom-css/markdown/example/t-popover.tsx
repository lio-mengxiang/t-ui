import React from 'react';
import { Popover, PopoverProps, PortalProps } from '@t-headless-ui/react';
import { TButton } from '@/button/tailwind-button';
import './t-popover.css';

interface TPopoverProps extends PopoverProps {
  attach?: PortalProps['attach'];
  children: React.ReactNode;
  showArrow?: boolean;
  popoverContent: React.ReactNode;
}

function TPopover({
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
  popoverContent,
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
      <Popover.Content attach={attach} className="t-popup popover-content">
        {popoverContent}
        {showArrow && <div className="popover-content-arrow"></div>}
      </Popover.Content>
    </Popover.Root>
  );
}

export function TPopoverExample() {
  return (
    <TPopover popoverContent="Popover Content" showArrow>
      <TButton status="success">Hover me!</TButton>
    </TPopover>
  );
}
