'use client';

import { MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconStarFill, IconCarrotFill, IconCheeryFill } from '@t-headless-ui/react';
import { ANCHOR_PATH, menuLinks } from '@/constants';
import { CommonLayout } from '@/_components/layout/common-layout';
import { type LocaleRouter } from '@/_hooks';

const data = (router: LocaleRouter, size: string) => [
  {
    content: (
      <SubMenu>
        <IconCarrotFill size={size} />
        其它组件
      </SubMenu>
    ),
    value: 'others',
    defaultCollapsed: true,
    items: [
      ...menuLinks
        .filter((item) => item.path !== ANCHOR_PATH)
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
        <IconCheeryFill size={size} className="text-[#FBCD2C] mr-2" />
        基础用法
      </MenuItem>
    ),
    onClick: () => {
      router.push(ANCHOR_PATH);
    },
    value: ANCHOR_PATH,
  },
  {
    content: (
      <MenuItem>
        <IconStarFill size={size} className="text-[#FBCD2C] mr-2" />
        面试亮点
      </MenuItem>
    ),
    onClick: () => {
      router.push(`${ANCHOR_PATH}/interview`);
    },
    value: `${ANCHOR_PATH}/interview`,
  },
  // {
  //   content: (
  //     <SubMenu>
  //       <IconChiliPepperFill size="1.6em" /> Anchor 技术文章
  //     </SubMenu>
  //   ),
  //   value: `${ANCHOR_PATH}/example`,
  //   items: [
  //     {
  //       content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
  //       onClick: () => {
  //         router.push(`${ANCHOR_PATH}/example/tailwind-traditional-example`);
  //       },
  //       value: `${ANCHOR_PATH}/example/tailwind-traditional-example`,
  //     },
  //   ],
  // },
  {
    content: (
      <SubMenu>
        <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Anchor 完整案例
      </SubMenu>
    ),
    value: `${ANCHOR_PATH}/example`,
    items: [
      {
        content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
        onClick: () => {
          router.push(`${ANCHOR_PATH}/example/tailwind-traditional-example`);
        },
        value: `${ANCHOR_PATH}/example/tailwind-traditional-example`,
      },
    ],
  },
];
export default CommonLayout({ data });
