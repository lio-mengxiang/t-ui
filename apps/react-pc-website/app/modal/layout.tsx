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
        router.push('/modal');
      },
      value: '/modal',
    },
    {
      content: (
        <MenuItem>
          <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
          自定义 Modal
        </MenuItem>
      ),
      onClick: () => {
        router.push('/modal/custom');
      },
      value: '/modal/custom',
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Modal 完整案例
        </SubMenu>
      ),
      value: '/modal/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/modal/example/tailwind-traditional-example');
          },
          value: '/modal/example/tailwind-traditional-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
