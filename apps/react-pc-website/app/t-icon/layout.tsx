'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';

const size = '1.4em';

export default function IconLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const data = [
    {
      content: (
        <MenuItem>
          <IconStarFill size={size} className="text-[#FBCD2C] mr-2" />
          必读指南
        </MenuItem>
      ),
      onClick: () => {
        router.push('/t-icon');
      },
      value: '/t-icon',
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Icon 完整案例
        </SubMenu>
      ),
      value: '/t-icon/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/t-icon/example/tailwind-traditional-example');
          },
          value: '/t-icon/example/tailwind-traditional-example',
        },

        {
          content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
          onClick: () => {
            router.push('/t-icon/example/tailwind-creative-example');
          },
          value: '/t-icon/example/tailwind-creative-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
