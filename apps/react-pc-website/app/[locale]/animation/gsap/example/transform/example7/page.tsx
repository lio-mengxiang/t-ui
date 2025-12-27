'use client';

import { cs, getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

// Helper to get image URL (mock implementation if @/_utils is missing)

export default function GsapScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // const cards = [
      //   { id: '#card-1', endTranslatesX: -1000, rotate: 45 },
      //   { id: '#card-2', endTranslatesX: -1000, rotate: -30 },
      //   { id: '#card-3', endTranslatesX: -1000, rotate: 45 },
      //   { id: '#card-4', endTranslatesX: -1000, rotate: 45 },
      // ];

      const wrapper404Ref = document.querySelector('.wrapper-404');
      if (!wrapper404Ref) {
        return;
      }
      ScrollTrigger.create({
        trigger: '.wrapper-404',
        start: 'top top',
        end: '+=900vh',
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to('.wrapper-404', {
            x: `-${(wrapper404Ref?.clientWidth + window.innerWidth) * progress}px`,
            duration: 0.5,
            ease: 'power3.out',
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="container2 w-screen h-screen relative" ref={containerRef}>
      <section className="wrapper-404 h-screen overflow-y-hidden flex items-center absolute">
        <h1 className="text-white text-[80vh] font-medium whitespace-nowrap w-max">Page Not Found</h1>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={cs('card absolute w-[40vh] h-[40vh] rounded-[20px] ', {
              'top-[50%] left-[20%]': index === 0,
              'top-[25%] left-[40%]': index === 1,
              'top-[45%] left-[60%]': index === 2,
              'top-[15%] left-[80%]': index === 3,
            })}
            key={index}
            id={`card-${index + 1}`}
          >
            <img className="w-full h-full object-cover" src={getImageUrl(`/gsap/scroll/0${index + 1}.webp`)} alt="" />
          </div>
        ))}
      </section>
      <section className="outro text-white w-screen h-screen text-6xl flex justify-center items-center absolute top-[150vh]">
        <h1>Next</h1>
      </section>
    </div>
  );
}
