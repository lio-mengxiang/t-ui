'use client';

import { cs, getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
// import './index.css';

gsap.registerPlugin(ScrollTrigger);

// Helper to get image URL (mock implementation if @/_utils is missing)

export default function GsapScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const newCards = Array.from({ length: 7 }, (_, index) => ({
      src: `/gsap/scroll/0${index + 1}.webp`,
      id: index + 1,
    }));
    setCards(newCards);
  }, []);

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
    <div className="w-screen h-[800vh] overflow-hidden bg-black">
      <div
        className="slider fixed top-[50%] left-[50%] [transform-style:preserve-3d]"
        style={{
          transform: 'translateY(-50%) translateX(-50%)  rotateZ(-120deg)',
        }}
        ref={containerRef}
      >
        {cards.map((item) => (
          <div
            key={item.id}
            className="card w-[400px] h-[400px]"
            style={{
              transform: 'rotateX(20deg) rotateY(-10deg) rotateZ(130deg)',
            }}
          >
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
