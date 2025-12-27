'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, RADIO_PATH } from '@/constants';
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
        .filter((item) => item.path !== RADIO_PATH)
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
      router.push(RADIO_PATH);
    },
    value: RADIO_PATH,
  },
  {
    content: (
      <MenuItem>
        <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
        自定义 Radio
      </MenuItem>
    ),
    onClick: () => {
      router.push(`${RADIO_PATH}/custom`);
    },
    value: `${RADIO_PATH}/custom`,
  },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Radio 完整案例
      </SubMenu>
    ),
    value: `${RADIO_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${RADIO_PATH}/example/tailwind-traditional-example`);
        },
        value: `${RADIO_PATH}/example/tailwind-traditional-example`,
      },
      {
        content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
        onClick: () => {
          router.push(`${RADIO_PATH}/example/tailwind-creative-example`);
        },
        value: `${RADIO_PATH}/example/tailwind-creative-example`,
      },
    ],
  },
];

export default CommonLayout({ data });
