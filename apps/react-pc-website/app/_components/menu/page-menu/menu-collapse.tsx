'use client';
import { type BasicMenuProps, useRenderBasicCollapse } from '@/_components/menu/basic-collapse';
import React from 'react';

import { VerticalMenu } from '@t-headless-ui/react';

export function CollapseMenu({ data, subMenuClassName }: BasicMenuProps) {
  const [menu] = useRenderBasicCollapse({ data, subMenuClassName });

  return <VerticalMenu.Root>{menu}</VerticalMenu.Root>;
}
