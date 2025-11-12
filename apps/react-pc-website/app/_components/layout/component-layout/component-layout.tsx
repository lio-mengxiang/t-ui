import { ChangeThemeButton } from '@/_components/change-theme-button';
import { GithubButton } from '@/_components/github-button';
import { cs } from '@/_utils';
import { IconLeftLine, IconRightLine, IconTLogo } from '@t-headless-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { NavOverlay } from './nav-overlay';

export function ComponentLayout({ menu, children }: any) {
  const router = useRouter();
  const [open, setOpen] = useState({
    status: true,
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpen({
        status: false,
      });
    }
  }, []);

  return (
    <>
      <div className="px-6 py-2 bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-blue-500/15 text-[#9b8691] flex justify-center text-sm">
        组件仍在补充, 欢迎加群交流哦，微信: a2298613245
      </div>

      <nav className="sticky top-0 w-full flex justify-between items-center pl-6 pr-6 h-16 border-b border-solid border-color bg-color z-[999]">
        <div className="text-sm flex cursor-pointer items-center" onClick={() => router.push('/')}>
          <IconTLogo className="text-4xl" />
          <span className="text-xl mt-[6px] text-nowrap">
            headless <span className="text-primary-hover dark:text-[#4cc3fa]">ui</span>
          </span>
        </div>
        <div className="flex gap-x-2 items-center">
          <NavOverlay />
          <GithubButton />
          <ChangeThemeButton />
        </div>
      </nav>

      <main className="flex w-full">
        <div
          className={cs(
            'sticky top-[60px] overflow-hidden pt-4 pl-3 border-r border-solid border-color',
            'shrink-0 h-[calc(100vh_-_60px)]',
            'transition-all duration-300 ease-in-out',
          )}
          style={{
            width: open.status ? '250px' : '0px',
          }}
        >
          <div
            className="z-0 h-[calc(100vh-60px)] overflow-auto"
            style={{
              visibility: open.status ? 'visible' : 'hidden',
            }}
          >
            {menu}
          </div>
          <div
            className="fixed flex items-center justify-center text-lg text-color-500 border border-color-500 rounded-full p-1 bg-color top-56 translate-y-[-50%] cursor-pointer transition-all duration-300 ease-in-out"
            style={{
              left: open.status ? '236px' : '1px',
            }}
            onClick={() => {
              setOpen({
                status: !open.status,
              });
            }}
          >
            {open.status ? <IconLeftLine /> : <IconRightLine />}
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
