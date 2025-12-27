'use client';

import { usePathname, useRouter as useNextRouter, useParams } from 'next/navigation';

export function useLocaleRouter() {
  const router = useNextRouter();
  const params = useParams(); // App Router 的动态参数
  const pathname = usePathname();

  // 提取 locale
  const locale = (params.locale as string) || 'zh';

  // 包装 push/replace 方法，自动加上 locale 前缀
  const push = (href: string) => {
    if (!href.startsWith('/')) href = '/' + href;
    // 如果没有 locale 前缀，则加上
    if (!/^\/(zh|en)(\/|$)/.test(href)) {
      href = `/${locale}${href}`;
    }
    router.push(href);
  };

  const replace = (href: string) => {
    if (!href.startsWith('/')) href = '/' + href;
    if (!/^\/(zh|en)(\/|$)/.test(href)) {
      href = `/${locale}${href}`;
    }
    router.replace(href);
  };

  const back = () => router.back();

  return {
    locale,
    pathname,
    push,
    replace,
    back,
    originalRouter: router, // 原生 router 方法和状态
  };
}

export type LocaleRouter = ReturnType<typeof useLocaleRouter>;
