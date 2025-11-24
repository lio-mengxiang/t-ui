'use client';

import { getImageUrl, getStyleImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const preIndex = useRef(-1);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray('.slide') as any[];
      const activeSlideImages: any[] = gsap.utils.toArray('.active-slide img');

      function getInitialTranslateZ(slide: any) {
        const style = window.getComputedStyle(slide);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if (!matrix) return 0;
        const values = matrix[1].split(', ');
        return parseFloat(values[14] || '0');
      }
      function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
        const clampedValue = Math.min(Math.max(value, inMin), inMax);
        return ((clampedValue - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.container',
          start: 'top top',
          end: '+=6000px',
          pin: true,
          scrub: 1,
        },
      });
      slides.forEach((slide, index) => {
        const initialZ = getInitialTranslateZ(slide);
        const i = index;
        tl.to(
          slide,
          {
            duration: 1.5,
            xPercent: -50,
            yPercent: -50,
            z: initialZ + 15000,
            ease: 'power3.out',
            onUpdate: function () {
              // 通过 gsap.getProperty 获取当前动画对象的 translateZ 值
              const slide = this.targets()[0]; // 获取到当前正在动画的 slide 元素
              const currentZ = gsap.getProperty(slide, 'z') as number;

              if (currentZ > -2500) {
                gsap.set(slide, { opacity: mapRange(currentZ, -2500, 0, 0.5, 1) });
              } else {
                gsap.set(slide, { opacity: mapRange(currentZ, -5000, -2500, 0, 0.5) });
              }

              // 只在阈值变化时更新
              // 正向滚动：当当前 slide 的 Z 值越过阈值且未触发过时，淡出对应背景图
              if (currentZ >= 100 && preIndex.current < i) {
                gsap.to(activeSlideImages[i], { opacity: 0, duration: 0.2 });
                preIndex.current = i;
              }
              // 反向滚动：当当前 slide 的 Z 值退回阈值以下且已触发过时，淡入对应背景图
              else if (currentZ < 100 && preIndex.current >= i) {
                gsap.to(activeSlideImages[i], { opacity: 1, duration: 0.2 });
                preIndex.current = i - 1;
              }
            },
          },
          '<',
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-screen h-[calc(var(--dvh)*100)] relative bg-black" ref={containerRef} data-url="https://www.joinflowparty.com/">
      <section className="sticky1 fixed top-0 left-0 w-screen h-[calc(var(--dvh)*100)] bg-[#5546ff]">
        <div className="tracker absolute top-[50%] left-[50%] translate-x-[-50%] h-[75%] w-[75%] py-[2em]">
          <div
            className="emoji absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] h-[350px]"
            style={{
              backgroundImage: `url(${getStyleImageUrl('/gsap/ball-bg.png')})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="emoji-face absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[225px] h-[200px] flex flex-col">
              <div className="eyes flex justify-between">
                <img src={getImageUrl('/gsap/eye.svg')} className="w-[100px] h-[100px] object-cover" alt="" />
                <img src={getImageUrl('/gsap/eye.svg')} className="w-[100px] h-[100px] object-cover" alt="" />
              </div>
            </div>
            <div className="mouth-wrapper flex center items-start">
              <div className="mouth w-[40x] h-[40px] rounded-[50px] bg-black"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[calc(var(--dvh)*100)] w-full h-[300vh] bg-[#252525] px-[2em] py-[6em]">
        <div className="section-header">
          <h1>Events</h1>
          <p>Loop through events and display them on the website.</p>
        </div>
        <div className="section-images">欢迎加入！</div>
      </div>
    </div>
  );
}
