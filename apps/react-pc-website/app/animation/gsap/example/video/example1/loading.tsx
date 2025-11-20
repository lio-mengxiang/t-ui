'use client';

import { TUI } from '@/_components/layout/component-layout/t-ui';
import { getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// 待完善 1、加载动画，因为图片过多，体积较大，导致加载时间较长 2、nav 需要在第二屏复现，并且 sticky
export default function Home() {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

            if (progress <= 0.25) {
              const zProgress = progress / 0.25;
              const translateZ = zProgress * -500;
              let opacity = 1;
              if (progress >= 0.2) {
                const fadeProgress = Math.min((progress - 0.2) / (0.25 - 0.2), 1);
                opacity = 1 - fadeProgress;
              }
              gsap.set(headerRef.current, { transform: `translate(-50%, -50%) translateZ(${translateZ}px)`, opacity });
            } else {
              gsap.set(headerRef.current, { opacity: 0 });
            }

            if (progress < 0.6) {
              gsap.set(heroImgRef.current, { transform: `translateZ(1000px)`, opacity: 0 });
            } else if (progress >= 0.6 && progress <= 0.9) {
              const imgProgress = (progress - 0.6) / (0.9 - 0.6);
              const translateZ = 1000 - imgProgress * 1000;
              let opacity = 0;
              if (progress <= 0.8) {
                // opacity 从 0 到 1,到 0.8 就保持 1
                const opacityProgress = (progress - 0.6) / (0.8 - 0.6);
                opacity = opacityProgress;
              } else {
                opacity = 1;
              }

              gsap.set(heroImgRef.current, { transform: `translateZ(${translateZ}px)`, opacity });
            } else {
              gsap.set(heroImgRef.current, { transform: `translateZ(0px)`, opacity: 1 });
            }
          },
        });
      };
      const onLoad = () => {
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
      <div className="loader">
        <div className="overlay">
          <div className="block"></div>
          <div className="block"></div>
        </div>
        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1>
              <span>T</span>
            </h1>
          </div>
          <div className="word" id="word-2">
            <h1>UI</h1>
          </div>
        </div>
        <div className="divider"></div>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
        <div className="counter">
          <div className="count">
            <div className="digit">
              <h1>0</h1>
            </div>
            <div className="digit">
              <h1>0</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>2</h1>
            </div>
            <div className="digit">
              <h1>7</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>6</h1>
            </div>
            <div className="digit">
              <h1>5</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>8</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>9</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
