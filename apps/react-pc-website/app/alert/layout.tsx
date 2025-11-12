'use client';

import React from 'react';
import { ComponentLayout } from '@/_components/layout/component-layout';
import { Menu, MenuItem } from '@/_components/menu/page-menu';
import { IconPlatteFill } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';

const size = '1.4em';

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const data = [
    {
      content: (
        <MenuItem>
          <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" /> 如何自定义 Alert
        </MenuItem>
      ),
      onClick: () => {
        router.push('/alert');
      },
      value: '/alert',
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
