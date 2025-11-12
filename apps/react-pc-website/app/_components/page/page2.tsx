'use client';

import React, { useRef } from 'react';
import { Eyes } from './eyes';
import { Card } from './card';
import { motion } from 'motion/react';
import { ScrollIcon } from './scroll-icon';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Page2({ goToPage, router }: { goToPage: (isOverlay?: boolean) => void; router: any }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 返回清理函数
      if (!container.current) return;
      const tl = gsap.timeline();

      gsap.utils
        .toArray('.detail')
        .reverse()
        .forEach((detail: any) => {
          tl.to(detail, { y: '-100vh', ease: 'power2.inOut' });
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: container.current,
        start: 'top top',
        end: '+=400',
        pin: true,
        scrub: true,
      });
    },
    { scope: container },
  );

  return (
    <div>
      <div className="h-screen bg-[#f6c646] relative overflow-hidden no-scrollbar" ref={container}>
        <motion.div className="flex justify-center" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
          <div className="absolute top-[5vh] md:top-[3vh]">
            <div className="text-[8vh] md:text-[18vh] font-extrabold italic leading-[1.1] tracking-wide">增简历亮点</div>
            <div className="text-[8vh] md:text-[18vh] font-extrabold italic leading-[1.1] tracking-wide pl-4">促技术提升</div>
            <Eyes container={container} />
          </div>
          <Card />
          <div className="absolute bottom-[11vh] md:bottom-[2vh] left-[50%] translate-x-[-50%] flex items-center">
            <ScrollIcon />
            <span className="text-xs mt-2 ml-2 text-[#2e2e2e]">
              <div className="mb-1">滚动查看更多</div>
              <div>
                <span onClick={() => goToPage()} className="mr-2 cursor-pointer">
                  返回
                </span>
                |
                <span onClick={() => router.push('/button')} className="ml-2 cursor-pointer">
                  进入组件库网站
                </span>
              </div>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
