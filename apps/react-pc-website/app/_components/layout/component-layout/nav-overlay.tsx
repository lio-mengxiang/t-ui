'use client';
import React, { type MouseEvent, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { NavButton } from './nav-button';

const menuLinks = [
  {
    label: '',
    children: [
      { path: '/solution/theme/css', label: '全局方案' },
      { path: '/button', label: '按钮 Button' },
      { path: '/t-icon', label: '图标 Icon' },
      { path: '/grid', label: '布局 Grid' },
      { path: '/space', label: '间距 Space' },
      { path: '/input', label: '输入框 Input' },
      { path: '/modal', label: '弹窗 Modal' },
      { path: '/popover', label: '弹出框 Popover' },
      { path: '/toast', label: '消息 Toast' },
      { path: '/alert', label: '警告 Alert' },
    ],
  },
];

export function NavOverlay() {
  const container = useRef(null);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<any>(null);

  const toggleMenu = (e: MouseEvent<HTMLDivElement | HTMLSpanElement>, value?: boolean) => {
    if (value) {
      setIsMenuOpen(value);
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true }).to('.menu-overlay', {
        duration: 1.25,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'power4.inOut',
      });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div ref={container} className="mr-2">
      <div className="hover:bg-slate-50 px-2 py-0.5 text-sm border border-color rounded-lg" onClick={toggleMenu}>
        <NavButton word="导 航" stagger={0.02} />
      </div>
      <div
        className="menu-overlay fixed top-0 left-0 w-screen h-screen px-6 py-5 bg-[#f6c646] z-[2] flex"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      >
        {/* nav bar */}
        <div
          className="absolute group bottom-20 left-1/2 g active:text-slate-400 px-4 py-2 rounded-md cursor-pointer w-7 h-7 flex justify-center items-center bg-[#0a0a0a] text-[#f5c747]"
          onClick={toggleMenu}
        >
          <div className="group-hover:rotate-180 duration-300">&#x2715;</div>
        </div>

        {/* menu content */}
        <div className="mt-2 px-12 w-full font-geist-sans">
          <div className="text-[#fff99f] mb-10">组件还在补充中，希望能够帮助你有一个亮点项目放入简历！</div>
          {menuLinks.map((item, index) => (
            <div key={index} className="md:w-1/4 w-full text-[#191919]">
              <div className="h-[1px] w-full bg-[#5f5635] overflow-hidden mb-[6px]"></div>
              <div className="px-1">
                <div key={item.label} className="text-base text-black/40">
                  {item.label}
                </div>
                <div className="mt-[24px]">
                  {item.children.map((child, index) => (
                    <div key={child.label} className={`text-xl tracking-wide cursor-pointer ${index !== 0 ? 'mt-3' : ''}`}>
                      <span
                        onClick={(e) => {
                          router.push(child.path);
                          toggleMenu(e, false);
                        }}
                        className="relative after:absolute after:bg-black after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                      >
                        {child.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
