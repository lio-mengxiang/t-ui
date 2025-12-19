'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconHappyRabbitFill, IconStarFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';
import { menuLinks, TOOLTIP_PATH } from '@/constants';

const size = '1.4em';
const basePath = `${TOOLTIP_PATH}`;

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
          .filter((item) => item.path !== TOOLTIP_PATH)
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
        router.push(`${basePath}`);
      },
      value: `${basePath}`,
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Tooltip 完整案例
        </SubMenu>
      ),
      value: `${basePath}/example`,
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push(`${basePath}/example/tailwind-traditional-example`);
          },
          value: `${basePath}/example/tailwind-traditional-example`,
        },

        {
          content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
          onClick: () => {
            router.push(`${basePath}/example/tailwind-creative-example`);
          },
          value: `${basePath}/example/tailwind-creative-example`,
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
