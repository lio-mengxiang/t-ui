'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconHappyRabbitFill, IconPlatteFill, IconStarFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';
import { menuLinks, DRAWER_PATH } from '@/constants';

const size = '1.4em';

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const data = [
    {
      content: (
        <SubMenu>
          <IconHappyRabbitFill size="3rem" className="pr-1" />
          其它组件
        </SubMenu>
      ),
      value: 'others',
      defaultCollapsed: true,
      items: [
        ...menuLinks
          .filter((item) => item.path !== DRAWER_PATH)
          .map((item) => ({
            content: <MenuItem className="text-sm font-light">{item.label}</MenuItem>,
            onClick: () => {
              router.push(item.path);
            },
            value: item.path,
          })),
      ],
    },
    {
      content: (
        <MenuItem>
          <IconStarFill size={size} className="text-[#FBCD2C] mr-2" />
          必读指南
        </MenuItem>
      ),
      onClick: () => {
        router.push('/drawer');
      },
      value: '/drawer',
    },
    {
      content: (
        <MenuItem>
          <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
          自定义 Drawer
        </MenuItem>
      ),
      onClick: () => {
        router.push('/drawer/custom');
      },
      value: '/drawer/custom',
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Drawer 完整案例
        </SubMenu>
      ),
      value: '/drawer/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/drawer/example/tailwind-traditional-example');
          },
          value: '/drawer/example/tailwind-traditional-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
