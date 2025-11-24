'use client';

import { cs, getImageUrl } from '@/_utils';
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
    <div className="relative" ref={containerRef} data-url="https://www.sageeast.com/">
      <div className="container w-screen">
        <div className="active-slide fixed w-screen">
          {Array.from({ length: 7 }).map((_, index) => (
            <img
              style={{ zIndex: 7 - index }}
              className="absolute w-full object-cover blur-[100px]"
              key={index}
              src={getImageUrl(`/gsap/scroll/0${index + 1}.webp`)}
              alt=""
            />
          ))}
        </div>
        <div className="fixed top-0 w-screen h-[calc(var(--dvh)_*_100)] [transform-style:preserve-3d] [perspective:750px] overflow-hidden">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              className={cs('slide absolute w-[400px] h-[500px] overflow-hidden top-[50%]', {
                'left-[30%]': index % 2 === 0,
                'left-[70%]': index % 2 === 1,
              })}
              style={{
                transform: `translateX(-50%) translateY(-50%) translateZ(-${index * 2500}px)`,
              }}
              key={index}
              id={`slide-${index + 1}`}
            >
              <div className="slide-img">
                <img src={getImageUrl(`/gsap/scroll/0${index + 1}.webp`)} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
