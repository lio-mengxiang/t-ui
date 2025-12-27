'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, MODAL_PATH } from '@/constants';
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
        .filter((item) => item.path !== MODAL_PATH)
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
      router.push(MODAL_PATH);
    },
    value: MODAL_PATH,
  },
  {
    content: (
      <MenuItem>
        <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
        自定义 Modal
      </MenuItem>
    ),
    onClick: () => {
      router.push(`${MODAL_PATH}/custom`);
    },
    value: `${MODAL_PATH}/custom`,
  },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Modal 完整案例
      </SubMenu>
    ),
    value: `${MODAL_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${MODAL_PATH}/example/tailwind-traditional-example`);
        },
        value: `${MODAL_PATH}/example/tailwind-traditional-example`,
      },
    ],
  },
];

export default CommonLayout({ data });
