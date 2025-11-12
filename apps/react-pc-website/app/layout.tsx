'use client';

import React from 'react';
import { ThemeTypeProps } from '@/_theme';
import Metadata from '@/metadata';
import { config } from '../config';

import '@/globals.css';

import { NextLocalStorage } from './localstorage';
import { createToastStore, createModalStore, ToastProvider, ModalProvider } from '@t-headless-ui/react';
import { cs } from './_utils';

export const toastStore = createToastStore();
export const modalStore = createModalStore();

export const toastBottomStore = createToastStore({ maxCount: 6 });
export const toastBottomStackStore = createToastStore({ maxCount: 3 });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const script = (defaultTheme: ThemeTypeProps, themeKey: string) => {
    const theme = localStorage.getItem(themeKey) || defaultTheme;
    localStorage.setItem(themeKey, theme);
    document.documentElement.setAttribute('class', theme);
  };

  return (
    <html lang="zh" suppressHydrationWarning>
      <Metadata />
      <body className="text-color bg-color font-sans">
        <NextLocalStorage scriptContent={script} defaultTheme={config.defaultTheme}>
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
        </NextLocalStorage>
      </body>
    </html>
  );
}
