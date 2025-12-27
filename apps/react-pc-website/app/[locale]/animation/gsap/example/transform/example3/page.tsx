'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Copy from './copy';

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
      <section className="intro relative h-[calc(var(--dvh)_*_100)] flex items-center overflow-hidden w-3/4">
        <Copy>
          <h1 className="uppercase font-medium leading-[1] text-[3rem]">
            Redefining limits,fighting for wins,bringing it all inall ways. Defining alegacy in Formula 1onand off thetrack.
          </h1>
        </Copy>
      </section>
      <section className="about relative h-[calc(var(--dvh)_*_100)] flex items-center overflow-hidden w-3/4">
        <Copy>
          <h1 className="uppercase font-medium leading-[1] text-[3rem]">
            Lando is proud to collaborate with a rangeof partners, who share his passion forperformance across a range of industries.
          </h1>
        </Copy>
      </section>
    </div>
  );
}

// [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]  rotate-[15deg] scale-[0.5]
