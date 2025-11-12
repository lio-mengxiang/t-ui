'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconPlatteFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';

const size = '1.4em';

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const data = [
    {
      content: (
        <SubMenu>
          <IconPlatteFill size={size} className="text-[#4cc3fa]" /> 换肤方案
        </SubMenu>
      ),
      value: '/solution/theme',
      items: [
        {
          content: <MenuItem className="text-sm font-light">CSS 换肤方案</MenuItem>,
          onClick: () => {
            router.push('/solution/theme/css');
          },
          value: '/solution/theme/css',
        },
        {
          content: <MenuItem className="text-sm font-light">Tailwind 换肤方案</MenuItem>,
          onClick: () => {
            router.push('/solution/theme/tailwind');
          },
          value: '/solution/theme/tailwind',
        },
        {
          content: <MenuItem className="text-sm font-light">Next.js 换肤方案</MenuItem>,
          onClick: () => {
            router.push('/solution/theme/next');
          },
          value: '/solution/theme/next',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
