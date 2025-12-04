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
        y: 250,
        scale: 0.75,
        rotation: -15,
        ease: 'power3.out',
      });

      // gsap.fromTo(
      //   '.web-content',
      //   {
      //     x: -100,
      //     scale: 0.3,
      //     rotation: 15,
      //   },
      //   {
      //     scrollTrigger: {
      //       trigger: '.web-content',
      //       start: 'top 0%',
      //       end: 'top 50%',
      //       markers: true,
      //       scrub: 1,
      //     },
      //     x: 0,
      //     scale: 1,
      //     rotation: 0,
      //     ease: 'power3.out',
      //   },
      // );
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
