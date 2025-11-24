'use client';

import { getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const initScale = 0.7;

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const img = document.querySelector('.clip-path-img-holder img') as HTMLImageElement;
      if (!img) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          onUpdate: (self) => {
            const progress = Number(self.progress.toFixed(2));
            img.style.transform = `scale(${initScale + progress * (1 - initScale)})`;
          },
          trigger: '.clip-path-img-holder',
          start: 'top top',
          end: '+=2000px',
          pin: true,
          pinSpacing: false,
          markers: true,
          scrub: 1.2,
        },
      });

      tl.to('.clip-path-img-holder>div:first-child', {
        rotation: 0,
        scale: 1,
        clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
        ease: 'none',
      })
        .to(
          '.clip-path-header .letters:first-child',
          {
            x: () => '-320%',
            scale: 4,
            ease: 'none',
          },
          0,
        )
        .to(
          '.clip-path-header .letters:last-child',
          {
            x: () => '320%',
            scale: 4,
            ease: 'none',
          },
          0,
        );
    },
    { scope: containerRef },
  );

  return (
    <div className="h-[calc(var(--dvh)_*_100)] relative" ref={containerRef} data-url="https://artworks.joe8lee.com/">
      {/* 为什么这里 absolute 不行，怎么解决？fixed ? 还是 dom 结构改变一下 */}
      {/* <div className="clip-path-header fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full z-[2] justify-between">
        <div className="letters flex uppercase">
          <div className="text-[10vw] text-center">欢</div>
          <div className="text-[10vw] text-center">迎</div>
          <div className="text-[10vw] text-center">加</div>
          <div className="text-[10vw] text-center">入</div>
        </div>
        <div className="letters flex uppercase">
          <div className="text-[10vw] text-center">动</div>
          <div className="text-[10vw] text-center">画</div>
          <div className="text-[10vw] text-center">交</div>
          <div className="text-[10vw] text-center">流</div>
          <div className="text-[10vw] text-center">群</div>
          <div className="text-[10vw] text-center">！</div>
        </div>
      </div> */}
      {/* clip-path-img 不能放在 img 上，这会导致 scrollTrigger 内部布局问题, 为什么？ clip-path-img-holder 莫名多了一个 top: xx; 而且是 fixed 布局，上面就有留白 */}
      <div className="clip-path-img-holder w-full h-full relative">
        {/* scale 不能放在父元素上，这会让整个图片很小, clip-path 中的 inset 目前不支持动画 */}
        {/* 这里的 clip-path 是为了在 md 屏幕下，mobile 兼容 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:[clip-path:polygon(40%_20vh,60%_20vh,60%_80vh,40%_80vh)] [clip-path:polygon(20%_20vh,80%_20vh,80%_80vh,20%_80vh)] rotate-[15deg]">
          <img className={`w-full h-full object-cover scale-[${initScale}] `} src={getImageUrl('/gsap/scroll/example1.webp')} alt="" />
        </div>
        <div className="clip-path-header absolute flex w-full h-full z-[2] justify-between items-center">
          <div className="letters flex uppercase tracking-[1vw]">
            <div className="text-[10vw] text-center">一</div>
            <div className="text-[10vw] text-center">起</div>
            <div className="text-[10vw] text-center">成</div>
            <div className="text-[10vw] text-center">为</div>
          </div>
          <div className="letters flex uppercase tracking-[1vw]">
            <div className="text-[10vw] text-center">动</div>
            <div className="text-[10vw] text-center">画</div>
            <div className="text-[10vw] text-center">高</div>
            <div className="text-[10vw] text-center">手</div>
            <div className="text-[10vw] text-center">!</div>
          </div>
        </div>
      </div>
      <div className="b h-[calc(var(--dvh)_*_100)] bg-black mt-[1200px] z-[1] scale-100 text-white text-[10vw] flex items-center justify-center">
        next
      </div>
    </div>
  );
}

// [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]  rotate-[15deg] scale-[0.5]
