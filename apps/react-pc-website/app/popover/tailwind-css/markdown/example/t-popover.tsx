import React from 'react';
import { TButton } from '@/button/tailwind-button';
import { TPopover } from '../../../t-popover';

export function TPopoverExample() {
  return (
    <TPopover popoverContent="Popover Content" showArrow>
      <TButton status="success">Hover me!</TButton>
    </TPopover>
  );
}
