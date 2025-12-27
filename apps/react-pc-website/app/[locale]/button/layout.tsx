'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, BUTTON_PATH } from '@/constants';
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
        .filter((item) => item.path !== BUTTON_PATH)
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
      router.push(`${BUTTON_PATH}/guide`);
    },
    value: `${BUTTON_PATH}/guide`,
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
          router.push(`${BUTTON_PATH}/custom-css`);
        },
        value: `${BUTTON_PATH}/custom-css`,
      },
      {
        content: <MenuItem className="text-sm font-light">Tailwind Button</MenuItem>,
        onClick: () => {
          router.push(`${BUTTON_PATH}/tailwind-css`);
        },
        value: `${BUTTON_PATH}/tailwind-css`,
      },
    ],
  },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Button 完整案例
      </SubMenu>
    ),
    value: `${BUTTON_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${BUTTON_PATH}/example/tailwind-traditional-example`);
        },
        value: `${BUTTON_PATH}/example/tailwind-traditional-example`,
      },
      {
        content: <MenuItem className="text-sm font-light">像素 Button</MenuItem>,
        onClick: () => {
          router.push(`${BUTTON_PATH}/example/tailwind-pixel-example`);
        },
        value: `${BUTTON_PATH}/example/tailwind-pixel-example`,
      },
      {
        content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
        onClick: () => {
          router.push(`${BUTTON_PATH}/example/tailwind-creative-example`);
        },
        value: `${BUTTON_PATH}/example/tailwind-creative-example`,
      },
    ],
  },
];

export default CommonLayout({ data });
