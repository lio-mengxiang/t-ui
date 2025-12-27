'use client';

import { ComponentLayout } from '@/_components/layout/nav-layout';
import { Menu } from '@/_components/menu/page-menu';
import { useLocaleRouter } from '@/_hooks';
import { type BasicMenuProps } from '@/_components/menu/basic-collapse';

export function CommonLayout({
  size = '1.4em',
  data,
}: {
  size?: string;
  data: (router: ReturnType<typeof useLocaleRouter>, size: string) => BasicMenuProps['data'];
}) {
  return function CommonLayout({ children }: { children: React.ReactNode }) {
    const router = useLocaleRouter();
    const list = data(router, size);
    return <ComponentLayout menu={<Menu data={list} />}>{children}</ComponentLayout>;
  };
}
