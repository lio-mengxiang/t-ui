'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconPlatteFill } from '@t-headless-ui/react';
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
        router.push('/button');
      },
      value: '/button',
    },
    {
      content: (
        <SubMenu>
          <IconPlatteFill size={size} className="text-[#4cc3fa]" /> 如何自定义 Button
        </SubMenu>
      ),
      value: '/custom',
      items: [
        {
          content: <MenuItem className="text-sm font-light">CSS / Less / Sass Button</MenuItem>,
          onClick: () => {
            router.push('/button/custom-css');
          },
          value: '/button/custom-css',
        },
        {
          content: <MenuItem className="text-sm font-light">Tailwind Button</MenuItem>,
          onClick: () => {
            router.push('/button/tailwind-css');
          },
          value: '/button/tailwind-css',
        },
      ],
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Button 完整案例
        </SubMenu>
      ),
      value: '/button/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/button/example/tailwind-traditional-example');
          },
          value: '/button/example/tailwind-traditional-example',
        },

        {
          content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
          onClick: () => {
            router.push('/button/example/tailwind-creative-example');
          },
          value: '/button/example/tailwind-creative-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
