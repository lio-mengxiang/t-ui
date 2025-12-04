'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { interiors } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      function init() {
        const gallery: any = document.querySelector('.gallery');
        // 清理旧内容
        gallery.innerHTML = '';

        // 清理旧 ScrollTrigger
        ScrollTrigger.getAll().forEach((t) => t.kill());
        const numberOfItems = 60;
        const radius = 1100;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const angleIncrement = (2 * Math.PI) / numberOfItems;

        for (let i = 0; i < numberOfItems; i++) {
          const item = document.createElement('div');
          item.className = 'item absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[80px]';
          const p = document.createElement('p');
          const count = document.createElement('span');
          p.className = 'text-[42px] font-medium text-white';
          p.textContent = interiors[i].name;
          count.textContent = `(${Math.floor(Math.random() * 50) + 1})`;
          item.appendChild(p);
          p.appendChild(count);
          gallery.appendChild(item);

          const angle = angleIncrement * i;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const rotation = angle * (180 / Math.PI);

          gsap.set(item, {
            left: `${x}px`,
            top: `${y}px`,
            rotation,
          });
        }

        gsap.to(gallery, {
          rotation: 360,
          ease: 'linear',
          scrollTrigger: {
            trigger: gallery,
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: true,
          },
        });
      }
      init();
      window.addEventListener('resize', init);

      return () => {
        window.removeEventListener('resize', init);
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="bg-black min-h-[100vh]" ref={containerRef} data-url="https://gabrielcontassot.com/">
      <div className="container">
        <div className="gallery w-screen h-screen transform left-[-90%]"></div>
      </div>
    </div>
  );
}
