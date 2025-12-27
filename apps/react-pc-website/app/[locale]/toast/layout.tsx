'use client';

import { ComponentLayout } from '@/_components/layout/nav-layout';
import { Menu, MenuItem, SubMenu } from '@/_components/menu/page-menu';
import { IconClickFill, IconHappyRabbitFill, IconPlatteFill, IconStarFill } from '@t-headless-ui/react';
import { menuLinks, TOAST_PATH } from '@/constants';
import { useLocaleRouter } from '@/_hooks';

const size = '1.4em';

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
  const router = useLocaleRouter();
  const data = [
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
          .filter((item) => item.path !== TOAST_PATH)
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
        router.push('/toast');
      },
      value: '/toast',
    },
    {
      content: (
        <MenuItem>
          <IconPlatteFill size={size} className="text-[#4cc3fa] mr-2" />
          自定义 Message
        </MenuItem>
      ),
      onClick: () => {
        router.push('/toast/custom');
      },
      value: '/toast/custom',
    },
    {
      content: (
        <SubMenu>
          <IconClickFill size="1.6em" className="text-[#4cc3fa]" /> Message 完整案例
        </SubMenu>
      ),
      value: '/toast/example',
      items: [
        {
          content: <MenuItem className="text-sm font-light">传统案例</MenuItem>,
          onClick: () => {
            router.push('/toast/example/tailwind-traditional-example');
          },
          value: '/toast/example/tailwind-traditional-example',
        },

        {
          content: <MenuItem className="text-sm font-light">创意案例</MenuItem>,
          onClick: () => {
            router.push('/toast/example/tailwind-creative-example');
          },
          value: '/toast/example/tailwind-creative-example',
        },
      ],
    },
  ];

  return <ComponentLayout menu={<Menu data={data} />}>{children}</ComponentLayout>;
}
