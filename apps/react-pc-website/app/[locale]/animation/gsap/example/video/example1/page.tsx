'use client';

import { AnimateNumber } from '@/_components/animate-number';
import { TUI } from '@/_components/layout/nav-layout/t-ui';
import { getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ReactNode, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

// 待完善 1、加载动画，因为图片过多，体积较大，导致加载时间较长 2、nav 需要在第二屏复现，并且 sticky
export default function Home() {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animateTime = useRef(0);
  const [loadProgress, setLoadProgress] = useState<ReactNode[] | string>('20');

  const setCanvasSize = () => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    const pixelRatio = window.devicePixelRatio || 1;
    // canvas 元素的 style 上的 width 和 height 值和 canvas 属性的 width 和 height 的值的关系;
    // canvas 元素的 style 上的 width 和 height 值是 css 的宽度和高度，而 canvas 属性的 width 和 height 值是元素的实际宽度和高度，
    // 它们之间的关系是：canvas 属性的 width 和 height 值 = canvas 元素的 style 上的 width 和 height 值 * pixelRatio
    canvasRef.current.width = window.innerWidth * pixelRatio;
    canvasRef.current.height = window.innerHeight * pixelRatio;
    canvasRef.current.style.width = `${window.innerWidth}px`;
    canvasRef.current.style.height = `${window.innerHeight}px`;
    context?.scale(pixelRatio, pixelRatio);
    return context;
  };
  useGSAP(
    () => {
      if (!canvasRef.current) return;
      const context = setCanvasSize();
      if (!context) return;
      const frameCount = 100;
      const currentFrame = (index: number) => getImageUrl(`/gsap/frames/bridge/${String(index + 1).padStart(3, '0')}.webp`);

      const images: any[] = [];
      const videoFrames = { frame: 0 };
      let imagesToLoad = frameCount;

      const render = () => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        const img = images[videoFrames.frame];
        if (img && img.complete && img.naturalWidth && img.naturalHeight) {
          const imageAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvasWidth / canvasHeight;
          let drawWidth, drawHeight, drawX, drawY;
          // 图片的宽高比更大 → 图片比画布更“宽”（横向更长）
          // 图片比画布更宽 → 让图片高度铺满画布，同时左右裁剪溢出的部分（常用于 cover 模式）
          if (imageAspect > canvasAspect) {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imageAspect;
            drawX = (canvasWidth - drawWidth) / 2; // 裁剪左右溢出的部分
            drawY = 0;
          } else {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imageAspect;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2; // 裁剪上下溢出的部分
          }

          context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
      };

      const setupScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: '.hero',
          start: 'top top',
          end: `+=${window.innerHeight * 6}px`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const targetFrame = Math.round(progress * (frameCount - 1));
            videoFrames.frame = targetFrame;
            render();

            if (progress <= 0.1) {
              const navProgress = progress / 0.1;
              const opacity = 1 - navProgress;
              gsap.set(navRef.current, { opacity });
            } else {
              gsap.set(navRef.current, { opacity: 0 });
            }

            if (progress <= 0.3) {
              const zProgress = progress / 0.3;
              const scale = 1 - zProgress * 0.2;
              let opacity = 1;
              if (progress >= 0.2) {
                const fadeProgress = (progress - 0.2) / (0.3 - 0.2);
                opacity = 1 - fadeProgress;
              }
              gsap.set(headerRef.current, { transform: `translate(-50%, -50%) scale(${scale})`, opacity });
            } else {
              gsap.set(headerRef.current, { opacity: 0 });
            }

            if (progress < 0.6) {
              gsap.set(heroImgRef.current, { transform: `translateZ(1000px)`, opacity: 0 });
            } else if (progress >= 0.6 && progress <= 0.8) {
              const imgProgress = (progress - 0.6) / (0.8 - 0.6);
              const translateZ = 1000 - imgProgress * 1000;
              let opacity = 0;

              // opacity 从 0 到 1,到 0.8 就保持 1
              const opacityProgress = (progress - 0.6) / (0.7 - 0.6);
              opacity = opacityProgress;

              gsap.set(heroImgRef.current, { transform: `translateZ(${translateZ}px)`, opacity });
            } else {
              gsap.set(heroImgRef.current, { transform: `translateZ(0px)`, opacity: 1 });
            }
          },
        });
      };

      let currentLoadProgress = 0;
      let timer: any = null;
      function updateLoadProgress() {
        const progress = Math.round((currentLoadProgress / frameCount) * 100);
        if (animateTime.current === 1) {
          setLoadProgress(String(60));
          return;
        }

        // if (animateTime.current === 2) {
        //   setLoadProgress(String(60));
        //   return;
        // }
        if (progress <= 60) {
          return;
        }
        if (progress > 60 && progress <= 90) {
          setLoadProgress(String(90));
          return;
        }

        if (progress >= 99) {
          setLoadProgress(String(100));
          clearTimeout(timer);
          setTimeout(() => {
            gsap.to('.overlay', {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              duration: 1.25,
              ease: 'power4.inOut',
            });
          }, 1000);
        }
      }
      timer = setInterval(() => {
        animateTime.current++;
        updateLoadProgress();
      }, 700);

      const onLoad = () => {
        currentLoadProgress++;
        imagesToLoad--;
        if (!imagesToLoad) {
          render();
          setupScrollTrigger();
        }
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();

        img.onload = onLoad;

        img.onerror = () => {
          onLoad();
        };
        img.src = currentFrame(i);
        // 别用 push，异步加载图片，会导致 images 数组不是按顺序填充的
        images[i] = img;
      }

      window.addEventListener('resize', () => {
        setCanvasSize();
        render();
        // ScrollTrigger.refresh();
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="relative"
      ref={containerRef}
      data-url="https://www.adaline.ai/"
      data-video="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmRFcFNrYVZGcmlnUkxNaVEwVDlEMUFhY0lqQXxBQ3Jtc0ttdDhDN2EwSHF5dGhEMGZQeU0xODZkSlBoaDRiRDBTSzhXSG1tcWFhSjBXbU5KdTFmempkUlRzMENqZldyQ203cllHck9Mb3JycDZOckxvSEh5dDdLdldmWFdrcTNHa1QyNmlzZWNvQTBMbTZuTWRxOA&q=https%3A%2F%2Fwww.pexels.com%2Fvideo%2Fa-desert-with-sand-dunes-and-some-bushes-19376556%2F&v=DTTNSjyEtes"
      data-convert="https://imagestool.com/zh_CN/convert-images"
    >
      <div
        className="overlay fixed top-0 left-0 w-screen h-[calc(var(--dvh)_*_100)] flex place-items-end text-[10vw] z-[999] bg-[#f6f1eb]"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        <AnimateNumber value={loadProgress} stagger={0.03} className="mb-[4vh] ml-[8vh] opacity-80" />
      </div>
      <nav ref={navRef} className="fixed w-screen px-[2rem] py-[1.5rem] grid grid-cols-3 gap-[2rem] z-[2]">
        <div className="flex gap-[3rem] items-center">
          <a className="no-underline text-sm font-medium text-[#49413a] tracking-wider [text-shadow:0_0_4px_rgba(255,255,255,1)]" href="#">
            简历精装
          </a>
          <a className="no-underline text-sm font-medium text-[#49413a] tracking-wider [text-shadow:0_0_4px_rgba(255,255,255,1)]" href="#">
            技术提升
          </a>
          <a className="no-underline text-sm font-medium text-[#49413a] tracking-wider [text-shadow:0_0_4px_rgba(255,255,255,1)]" href="#">
            经验分享
          </a>
        </div>
        <div className="flex justify-center">
          <TUI logoClassName="stroke-[#fff] stroke-[4px]" textClassName="[text-shadow:0_0_4px_rgba(255,255,255,1)]" />
        </div>
        <div className="flex gap-[1.5rem] justify-end">
          <button className="px-[1.5rem] py-[0.75rem] bg-[#fefbf4] text-[#241910] rounded-full">联系我吧</button>
          <button className="px-[1.5rem] py-[0.75rem] bg-[#241910] text-[#fefbf4] rounded-full">马上开始</button>
        </div>
      </nav>
      <section className="hero relative w-screen h-[calc(var(--dvh)_*_100)] overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full object-cover"></canvas>
        <div className="absolute top-[160px] left-[50%] translate-x-[-50%] [transform-style:preserve-3d] [perspective:1000px] py-[0.5rem]">
          <div
            ref={headerRef}
            className="absolute top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen flex flex-col items-center gap-[1.5rem] text-[#49413a]"
          >
            <h1 className="text-[3rem] font-normal leading-[1.1] text-white">在这里，助你成为动画高手！</h1>
            <p className="uppercase text-sm font-medium text-[#fff]">孟祥 by</p>
          </div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] [transform-style:preserve-3d] [perspective:1000px]">
          <div ref={heroImgRef} className="relative w-full h-full [transform:translateZ(1000px)] opacity-0">
            <img className="w-full h-full object-cover" src={getImageUrl('/gsap/video1.webp')} alt="" />
          </div>
        </div>
      </section>
      <section className=" relative w-screen h-[calc(var(--dvh)_*_100)] overflow-hidden flex justify-center items-center p-[2rem] bg-[#fefbf4] text-[#241910]">
        <h1 className="text-[3rem] font-normal leading-[1.1]">欢迎加入哟！</h1>
      </section>
    </div>
  );
}
