'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fragment, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Helper to get image URL (mock implementation if @/_utils is missing)

export default function GsapScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stickyBar = document.querySelector('.sticky-bar') as HTMLElement;
      const footerTrigger = document.querySelector('.trigger-footer') as HTMLElement;
      if (!stickyBar || !footerTrigger) {
        return;
      }
      // const footerTriggerHeight = footerTrigger.offsetHeight;

      // function getStickyBarCenter() {
      //   return stickyBar?.offsetTop + stickyBar?.offsetHeight / 2;
      // }

      document.querySelectorAll('.row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: () => `top center`,
          end: () => `top+=200px center`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = 10;
            const minGap = 1;
            const currentGap = minGap + (maxGap - minGap) * progress;
            (row as HTMLElement).style.gap = `${currentGap}em`;
          },
        });
      });

      document.querySelectorAll('.row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=200px center`,
          end: () => `top+=400px center`,
          scrub: true,
          immediateRender: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = 10;
            const minGap = 1;
            const currentGap = maxGap - (maxGap - minGap) * progress;
            (row as HTMLElement).style.gap = `${currentGap}em`;
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="container w-full" ref={containerRef}>
      <div className="sticky-bar fixed w-screen top-1/2 padding-[1em] flex mix-blend-difference">
        <div className="item flex-[2]">
          <p className="text-[1.25vw] text-white">Barrett</p>
        </div>
        <div className="item flex-1 text-center">
          <p className="text-[1.25vw] text-white">&</p>
        </div>
        <div className="item flex-[2] text-right">
          <p className="text-[1.25vw] text-white">Hale</p>
        </div>
      </div>
      <section className="hero h-screen w-screen flex items-center justify-center text-4xl">Scroll Down ↓</section>
      <section className="clients w-screen py-[10em] px-[1em] bg-white">
        {Array.from({ length: 20 }).map((_, index) => (
          <Fragment key={index}>
            <div className="row flex w-full justify-center gap-[1em]">
              <div className="logo text-[40px]">
                <p>Logo 1</p>
              </div>
              <div className="logo text-[40px]">
                <p>Logo 2</p>
              </div>
            </div>
          </Fragment>
        ))}
      </section>
      <section className="trigger-footer w-screen r h-screen flex items-center justify-center text-4xl">End</section>
    </div>
  );
}
