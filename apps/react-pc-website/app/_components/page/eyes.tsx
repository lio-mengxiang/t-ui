import { getAngleDom } from '@/_utils';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { type RefObject } from 'react';

export function Eyes({ container }: { container: RefObject<HTMLDivElement | null> }) {
  useGSAP(
    () => {
      const handleMouseMove = (event: MouseEvent) => {
        const eyes = container.current?.querySelectorAll('.eye-outer');
        if (!eyes) return;
        eyes.forEach((eye) => {
          const rot = getAngleDom(eye as HTMLDivElement, {
            x: event.clientX,
            y: event.clientY,
          });

          gsap.to(eye, {
            rotate: rot + '_short',
          });
        });
      };

      document.addEventListener('mousemove', handleMouseMove);

      // 返回清理函数
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    },
    { scope: container },
  );
  return (
    <div className="flex justify-center items-center absolute top-[2vh] left-[3.6vh] md:top-[5vh] md:left-[9.3vh]">
      <div className="eye-outer relative w-[2.6vh] h-[2.6vh] md:w-[4.6vh] md:h-[4.6vh] border-2 border-[#0f0f0f] bg-white rounded-full">
        <div className="absolute w-[0.6vh] h-[0.6vh] md:w-[1.6vh] md:h-[1.6vh] bg-[#0f0f0f] rounded-full top-[calc(50%-0.1vh)] left-[calc(50%+0.1vh)]"></div>
      </div>
      <div className="eye-outer relative w-[2.6vh] h-[2.6vh] md:w-[4.6vh] md:h-[4.6vh] border-2 border-[#0f0f0f] bg-white rounded-full">
        <div className="absolute w-[0.6vh] h-[0.6vh] md:w-[1.6vh] md:h-[1.6vh] bg-[#0f0f0f] rounded-full top-[calc(50%-0.1vh)] left-[calc(50%+0.1vh)]"></div>
      </div>
    </div>
  );
}
