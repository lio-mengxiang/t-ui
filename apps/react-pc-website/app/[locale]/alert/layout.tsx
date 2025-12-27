'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { ALERT_PATH, menuLinks } from '@/constants';
import { CommonLayout } from '@/_components/layout/common-layout';
import { type LocaleRouter } from '@/_hooks';

const data = (router: LocaleRouter, size: string) => [
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
        .filter((item) => item.path !== ALERT_PATH)
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
        <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" /> 如何自定义 Alert
      </MenuItem>
    ),
    onClick: () => {
      router.push(ALERT_PATH);
    },
    value: ALERT_PATH,
  },
];

export default CommonLayout({ data });
