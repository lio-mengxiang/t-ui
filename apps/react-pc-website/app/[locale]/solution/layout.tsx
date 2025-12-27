'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconPlatteFill, IconHappyRabbitFill } from '@t-headless-ui/react';
import { menuLinks, SOLUTION_THEME_PATH, SOLUTION_THEME_PATH_PREFIX } from '@/constants';
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
        .filter((item) => item.path !== SOLUTION_THEME_PATH)
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
      <SubMenu>
        <IconPlatteFill size={size} className="text-[#4cc3fa]" /> 换肤方案
      </SubMenu>
    ),
    value: `${SOLUTION_THEME_PATH_PREFIX}/theme`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">CSS 换肤方案</MenuItem>,
        onClick: () => {
          router.push(`${SOLUTION_THEME_PATH_PREFIX}/theme/css`);
        },
        value: `${SOLUTION_THEME_PATH_PREFIX}/theme/css`,
      },
      {
        content: <MenuItem className="text-sm font-light">Tailwind 换肤方案</MenuItem>,
        onClick: () => {
          router.push(`${SOLUTION_THEME_PATH_PREFIX}/theme/tailwind`);
        },
        value: `${SOLUTION_THEME_PATH_PREFIX}/theme/tailwind`,
      },
      {
        content: <MenuItem className="text-sm font-light">Next.js 换肤方案</MenuItem>,
        onClick: () => {
          router.push(`${SOLUTION_THEME_PATH_PREFIX}/theme/next`);
        },
        value: `${SOLUTION_THEME_PATH_PREFIX}/theme/next`,
      },
    ],
  },
];

export default CommonLayout({ data });
