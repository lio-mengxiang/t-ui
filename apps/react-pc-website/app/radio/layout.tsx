'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconPlatteFill, IconStarFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';

const size = '1.4em';

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
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
        router.push('/radio');
      },
      value: '/radio',
    },
    {
      content: (
        <MenuItem>
          <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
          自定义 Radio
        </MenuItem>
      ),
      onClick: () => {
        router.push('/radio/custom');
      },
      value: '/radio/custom',
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Radio 完整案例
        </SubMenu>
      ),
      value: '/radio/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/radio/example/tailwind-traditional-example');
          },
          value: '/radio/example/tailwind-traditional-example',
        },
        {
          content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
          onClick: () => {
            router.push('/radio/example/tailwind-creative-example');
          },
          value: '/radio/example/tailwind-creative-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
