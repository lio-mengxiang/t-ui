'use client';

import { ThemeTypeProps } from '@/_theme';
import { defaultTheme } from '../../config';
import { NextLocalStorage } from './localstorage';
import { createToastStore, createModalStore, ToastProvider, ModalProvider } from '@t-headless-ui/react';
import { cs } from './_utils';

export const toastStore = createToastStore();
export const modalStore = createModalStore();
export const drawerStore = createModalStore();

export const toastBottomStore = createToastStore({ maxCount: 6 });
export const toastBottomStackStore = createToastStore({ maxCount: 3 });

export function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const script = (defaultTheme: ThemeTypeProps, themeKey: string) => {
    const theme = localStorage.getItem(themeKey) || defaultTheme;
    localStorage.setItem(themeKey, theme);
    document.documentElement.setAttribute('class', theme);
    // ------- 初始化 dvh，自定义兼容 css 的 dvh, 为了移动端的优化 -----
    // 将值设置为CSS自定义属性
    function updateViewportHeight() {
      // 计算动态视口高度，并转换为1dvh对应的像素值
      const dvh = window.innerHeight * 0.01;
      // 将值设置为CSS自定义属性
      document.documentElement.style.setProperty('--dvh', `${dvh}px`);
    }
    updateViewportHeight();
    // 监听窗口大小变化和横竖屏切换事件，及时更新
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);
    // ------- ↑ -----
  };

  return (
    <NextLocalStorage scriptContent={script} defaultTheme={defaultTheme}>
      {children}
      <ToastProvider
        store={toastStore}
        containerProps={{
          className: cs('w-full fixed top-8 flex flex-col items-center pointer-events-none', `z-message`),
        }}
        // stack
      />
      <ToastProvider
        store={toastBottomStackStore}
        containerProps={{
          className: cs('w-full fixed bottom-28 flex flex-col items-end pr-12 pointer-events-none', `z-message`),
        }}
        direction="bottom-to-top"
        stack
      />
      <ToastProvider
        store={toastBottomStore}
        containerProps={{
          className: cs('w-full fixed bottom-12 flex flex-col items-end pr-12 pointer-events-none', `z-message`),
        }}
        direction="bottom-to-top"
      />
      <ModalProvider store={modalStore} />
      <ModalProvider store={drawerStore} />
    </NextLocalStorage>
  );
}
