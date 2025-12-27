'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, TOOLTIP_PATH } from '@/constants';
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
      router.push(`${TOOLTIP_PATH}`);
    },
    value: `${TOOLTIP_PATH}`,
  },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Tooltip 完整案例
      </SubMenu>
    ),
    value: `${TOOLTIP_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${TOOLTIP_PATH}/example/tailwind-traditional-example`);
        },
        value: `${TOOLTIP_PATH}/example/tailwind-traditional-example`,
      },

      {
        content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
        onClick: () => {
          router.push(`${TOOLTIP_PATH}/example/tailwind-creative-example`);
        },
        value: `${TOOLTIP_PATH}/example/tailwind-creative-example`,
      },
    ],
  },
];

export default CommonLayout({ data });
