'use client';

import { getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // gsap.utils.toArray('section').forEach((section: any, index) => {
      //   const image = document.querySelector(`#preview-${index + 1} img`) as HTMLImageElement;
      //   const startCondition = index === 0 ? 'top top' : 'bottom bottom';

      //   gsap.to(image, {
      //     scrollTrigger: {
      //       trigger: section,
      //       start: startCondition,
      //       end: () => {
      //         const viewportHeight = window.innerHeight;
      //         const sectionBottom = section.offsetTop + section.offsetHeight;
      //         const additionalDistance = viewportHeight * 0.5;
      //         const endValue = sectionBottom - viewportHeight + additionalDistance;
      //         return `+=${endValue}px`;
      //       },
      //       scrub: 1,
      //     },
      //     scale: 2,
      //     ease: 'none',
      //   });

      //   // const sections = gsap.utils.toArray('.section');
      //   // sections.map((section: any, index) => {
      //   //   gsap.to(section.querySelector('img'), {
      //   //     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      //   //     scrollTrigger: {
      //   //       trigger: section,
      //   //       start: 'top top',
      //   //       end: '+=300',
      //   //       scrub: 1,
      //   //       pin: true,
      //   //       markers: true,
      //   //       toggleActions: 'play none reverse none',
      //   //     },
      //   //   });
      //   // gsap.to(section.querySelector('img'), {
      //   //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      //   //   scrollTrigger: {
      //   //     trigger: section.querySelector('img'),
      //   //     start: 'top +=300',
      //   //     end: '+=300',
      //   //     scrub: 1,
      //   //     pin: true,
      //   //     markers: true,
      //   //   },
      //   // });
      // });
      function animateClipPath(sectionId: any, previewId: any, endClipPath: any, start = 'center center', end = 'bottom top') {
        const section = document.querySelector(sectionId) as any;
        const preview = document.querySelector(previewId) as any;

        gsap.to(preview, {
          clipPath: endClipPath,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start,
            end,
            scrub: 0.2,
            // markers: true,
          },
        });
      }

      animateClipPath('#section-1', '#preview-1', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');
      // scrollTrigger window
      //  'top bottom';
      const totalSections = 3;
      for (let i = 2; i <= totalSections; i++) {
        animateClipPath(`#section-${i}`, `#preview-${i - 1}`, 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 'top bottom', 'center center');

        if (i <= totalSections) {
          animateClipPath(`#section-${i}`, `#preview-${i}`, 'polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)', 'center center', 'bottom top');
        }
      }
    },
    { scope: containerRef },
  );

  return (
    <div className="bg-black relative pt-[1px]" ref={containerRef} data-url="https://gabrielcontassot.com/">
      <div className="headers">
        <section id="section-1" className="my-[150vh]">
          <h1 className="text-white text-[14vw] text-center">Vaccum</h1>
        </section>
        <section id="section-2" className="my-[150vh]">
          <h1 className="text-white text-[14vw] text-center">Ember</h1>
        </section>
        <section id="section-3" className="my-[150vh]">
          <h1 className="text-white text-[14vw] text-center">Scratch</h1>
        </section>
        <div className="h-[200px]"></div>
      </div>
      <div className="section-previews fixed  inset-0 flex items-center justify-center">
        <div className="absolute w-[500px] h-[700px] [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]" id="preview-1">
          <img className="w-full h-full object-cover" src={getImageUrl(`/gsap/scroll/01.webp`)} alt="" />
        </div>
        <div className="absolute w-[500px] h-[700px] [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]" id="preview-2">
          <img className="w-full h-full object-cover" src={getImageUrl(`/gsap/scroll/02.webp`)} alt="" />
        </div>
        <div className="absolute w-[500px] h-[700px] [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]" id="preview-3">
          <img className="w-full h-full object-cover" src={getImageUrl(`/gsap/scroll/03.webp`)} alt="" />
        </div>
      </div>
    </div>
  );
}

// [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]  rotate-[15deg] scale-[0.5]
