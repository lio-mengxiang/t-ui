'use client';

import { getImageUrl, getStyleImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import styles from './index.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to('.sticky1', {
        scrollTrigger: {
          trigger: '.sticky1',
          start: 'top top',
          end: () => '+=100%',
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
        y: 50,
        scale: 0.75,
        rotation: -6,
        ease: 'linear',
      });

      gsap.fromTo(
        '.web-content',
        {
          scale: 0.5,
          rotation: 15,
        },
        {
          scrollTrigger: {
            trigger: '.web-content',
            start: '-20% bottom',
            end: '+=100%',
            scrub: 1,
          },
          scale: 1,
          rotation: 0,
          ease: 'linear',
        },
      );

      const wrapper = document.querySelector('.tracker');
      const emoji = document.querySelector('.emoji');
      const emojiFace = document.querySelector('.emoji-face');

      const moveEvent = (e: { clientX: number; clientY: number }) => {
        const wrapperRect = wrapper?.getBoundingClientRect();
        if (!wrapperRect) {
          return;
        }
        const relX = e.clientX - (wrapperRect?.left + wrapperRect?.width / 2);
        const relY = e.clientY - (wrapperRect?.top + wrapperRect?.height / 2);

        const emojiMaxDisplacement = 50;
        const emojiFaceMaxDisplacement = 75;

        // 计算表情符号在 X 和 Y 方向上的位移量
        // 位移量 = (鼠标相对于容器中心的偏移量 / 容器尺寸) * 最大允许位移
        const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
        const emojiDisplacementY = (relY / wrapperRect?.height) * emojiMaxDisplacement;
        const emojiFaceDisplacementX = (relX / wrapperRect?.width) * emojiFaceMaxDisplacement;
        const emojiFaceDisplacementY = (relY / wrapperRect?.height) * emojiFaceMaxDisplacement;

        gsap.to(emoji, {
          x: emojiDisplacementX,
          y: emojiDisplacementY,
          ease: 'linear',
          duration: 0.35,
        });
        gsap.to(emojiFace, {
          x: emojiFaceDisplacementX,
          y: emojiFaceDisplacementY,
          ease: 'linear',
          duration: 0.35,
        });
      };
      const leaveEvent = () => {
        gsap.to([emoji, emojiFace], {
          x: 0,
          y: 0,
          ease: 'linear',
          duration: 1,
        });
      };

      wrapper?.addEventListener('mouseleave', leaveEvent);
      (wrapper as any)?.addEventListener('mousemove', moveEvent);
    },
    { scope: containerRef },
  );

  return (
    <div className="w-screen h-[calc(var(--dvh)*100)] relative bg-black" ref={containerRef} data-url="https://www.joinflowparty.com/">
      <section className="sticky1 fixed top-0 left-0 w-screen h-[calc(var(--dvh)*100)] bg-[#5546ff]">
        <div className="tracker absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80%] w-[75%] py-[2em]">
          <div
            className="emoji absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] h-[360px]"
            style={{
              backgroundImage: `${getStyleImageUrl('/gsap/ball-bg.png')}`,
              backgroundSize: 'cover',
            }}
          >
            <div className="emoji-face absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] flex flex-col">
              <div className={styles.eyes1 + ' flex justify-between'}>
                <img src={getImageUrl('/gsap/eye.svg')} className="w-[70px] h-[70px] object-cover" alt="" />
                <img src={getImageUrl('/gsap/eye.svg')} className="w-[70px] h-[70px] object-cover" alt="" />
              </div>
              <div className="mouth-wrapper flex center justify-center">
                <div className={styles.mouth1 + ' w-[40px] h-[40px] rounded-[50px] bg-black'}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="web-content absolute top-[calc(var(--dvh)*100)] w-full h-[300vh] bg-[#252525] px-[2em] py-[6em]">
        <div className="section-header">
          <h1>Events</h1>
          <p>Loop through events and display them on the website.</p>
        </div>
        <div className="section-images">欢迎加入！</div>
      </div>
    </div>
  );
}
