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
      // gsap.to('.clip-path-header .letters:first-child', {
      //   x: () => '-320%',
      //   scale: 4,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: 'top top',
      //     end: '+=2000px',
      //     pin: true,
      //     scrub: 1,
      //   },
      // });
      // gsap.to('.clip-path-header .letters:last-child', {
      //   x: () => window.innerWidth * 1,
      //   scale: 4,
      //   ease: 'none',
      //   scrollTrigger: {
      //     start: 'top top',
      //     end: '+=50%',
      //     scrub: 1,
      //   },
      // });
      gsap.to('.clip-path-img-holder>div', {
        rotation: 0,
        scale: 1,
        clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
        ease: 'none',
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
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="h-screen" ref={containerRef}>
      {/* <div className="clip-path-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full z-[2]">
        <div className="letters flex uppercase">
          <div className=" text-[10vw] text-center">欢</div>
          <div className=" text-[10vw] text-center">迎</div>
          <div className=" text-[10vw] text-center">加</div>
          <div className=" text-[10vw] text-center">入</div>
        </div>
        <div className="letters flex uppercase">
          <div className=" text-[10vw] text-center">动</div>
          <div className=" text-[10vw] text-center">画</div>
          <div className=" text-[10vw] text-center">社</div>
          <div className=" text-[10vw] text-center">群</div>
        </div>
      </div> */}
      {/* clip-path-img 不能放在 img 上，这会导致 scrollTrigger 内部布局问题 */}
      <div className="clip-path-img-holder w-full h-full">
        {/* scale 不能放在父元素上，这会让整个图片很小, clip-path 中的 inset 目前不支持动画 */}
        <div className="w-full h-full [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)] rotate-[15deg]">
          <img className={`w-full h-full object-cover scale-[${initScale}] `} src={getImageUrl('/animation/scroll/example1.webp')} alt="" />
        </div>
      </div>
      <div className="b h-[600px] bg-black mt-[1200px] z-[1] scale-100 text-white text-[10vw] flex items-center justify-center">next</div>
    </div>
  );
}

// [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]  rotate-[15deg] scale-[0.5]
