'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, POPOVER_PATH } from '@/constants';
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
        .filter((item) => item.path !== POPOVER_PATH)
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
      router.push(POPOVER_PATH);
    },
    value: POPOVER_PATH,
  },
  {
    content: (
      <SubMenu>
        <IconPlatteFill size={size} className="text-[#4cc3fa]" /> 如何自定义 Popover
      </SubMenu>
    ),
    value: `${POPOVER_PATH}/custom`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">CSS / Less / Sass Popover</MenuItem>,
        onClick: () => {
          router.push(`${POPOVER_PATH}/custom-css`);
        },
        value: `${POPOVER_PATH}/custom-css`,
      },
      {
        content: <MenuItem className="text-sm font-light">Tailwind Popover</MenuItem>,
        onClick: () => {
          router.push(`${POPOVER_PATH}/tailwind-css`);
        },
        value: `${POPOVER_PATH}/tailwind-css`,
      },
    ],
  },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Popover 完整案例
      </SubMenu>
    ),
    value: `${POPOVER_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${POPOVER_PATH}/example/tailwind-traditional-example`);
        },
        value: `${POPOVER_PATH}/example/tailwind-traditional-example`,
      },

      {
        content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
        onClick: () => {
          router.push(`${POPOVER_PATH}/example/tailwind-creative-example`);
        },
        value: `${POPOVER_PATH}/example/tailwind-creative-example`,
      },
    ],
  },
];

export default CommonLayout({ data });
