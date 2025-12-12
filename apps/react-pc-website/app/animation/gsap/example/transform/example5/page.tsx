'use client';

import { getImageUrl } from '@/_utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Helper to get image URL (mock implementation if @/_utils is missing)

export default function GsapScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const imagesContainer = containerRef.current?.querySelector('.images') as HTMLElement;
      const preview = containerRef.current?.querySelector('.preview') as HTMLElement;
      const minimap = containerRef.current?.querySelector('.minimap') as HTMLElement;

      const items = containerRef.current?.querySelectorAll('.item');
      if (!imagesContainer || !preview || !minimap || !items || items.length === 0) return;
      function getElementTop(element: HTMLElement) {
        let top = 0;
        let current: HTMLElement | null = element;
        while (current) {
          top += current.offsetTop;
          current = current.offsetParent as HTMLElement;
        }
        return top;
      }
      // Calculate dimensions
      const imagesStart = getElementTop(imagesContainer);
      const imagesEnd = imagesStart + imagesContainer.offsetHeight;
      const viewportHeight = window.innerHeight;
      // Preview item height (125px) + padding/margin if any
      // Based on CSS: h-[125px]
      const previewItemHeight = 125;
      const totalItems = items.length;
      // Indicator position relative to minimap top
      function handleScroll() {
        const scrollY = window.scrollY; // 当前页面滚动距离
        const scrollRange = imagesEnd - imagesStart - viewportHeight; // 可滚动区间长度（负值表示无需滚动）
        // 找到“最靠近视口中心”的图片索引
        const viewportCenter = scrollY + viewportHeight / 2; // 视口中心线位置
        let currentActiveIndex = 0;
        let minDistance = Infinity;
        items?.forEach((item, index) => {
          const itemTop = getElementTop(item as HTMLElement); // 图片顶部到文档顶部距离
          const itemCenter = itemTop + (item as HTMLElement).offsetHeight / 2; // 图片中心线位置
          const distance = Math.abs(viewportCenter - itemCenter); // 与视口中心距离
          if (distance < minDistance) {
            minDistance = distance;
            currentActiveIndex = index; // 记录最近索引
          }
        });
        // 如果“最近索引”发生变化，更新 React 状态
        if (currentActiveIndex !== activeIndex) {
          setActiveIndex(currentActiveIndex);
        }
        if (scrollRange <= 0) return; // 无可滚动区间，直接退出
        // 计算滚动进度（0~1）
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - imagesStart) / scrollRange));
        // 预览条需要移动的总距离 = (图片总数-1) * 单个预览高度
        const totalPreviewTravel = (totalItems - 1) * previewItemHeight;
        // 预览条初始位置：让第 0 张预览图与指示框对齐（指示框固定在 minimap 的 300px 处）
        // const startY = indicatorTop;
        // 根据滚动进度，计算预览条当前应偏移的 Y 值
        const currentY = scrollProgress * totalPreviewTravel;
        // 应用偏移，使预览条随滚动“向上”移动，实现指示框与当前图片联动
        preview.style.transform = `translateX(0) translateY(-${currentY}px)`;
      }
      // Initial call
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      const togglePoint = window.innerHeight * 4;
      function checkScroll() {
        if (window.scrollY >= togglePoint) {
          setIsWhiteBg(true);
        } else {
          setIsWhiteBg(false);
        }
      }
      checkScroll();
      window.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        window.removeEventListener('scroll', checkScroll);
      };
    },
    { scope: containerRef },
  );

  return (
    <div className={`wrapper w-full duration-500 transition-colors ${isWhiteBg ? 'bg-white' : 'bg-black'}`} ref={containerRef}>
      <div className="gallery relative w-full flex z-[0]">
        <div className={`minimap sticky top-0 w-[25%] h-screen  duration-500 transition-colors ${isWhiteBg ? 'bg-white' : 'bg-black'}`}>
          <div className="preview absolute w-full h-full top-0 left-0 pointer-events-none">
            {/*
               Added top-0 to ensure it starts at the very top of the container.
               The transform will handle the positioning relative to the indicator.
            */}
            <div className="preview-track absolute w-full flex flex-col items-center left-1/2 -translate-x-1/2 top-[300px]">
              {Array.from({ length: 7 }).map((_, index) => (
                <div className="item-preview relative w-[100px] h-[125px] p-[10px]" key={index}>
                  <img
                    className="w-full h-full object-cover"
                    src={getImageUrl(`/gsap/scroll/0${index + 1}.webp`)}
                    alt={`Preview ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="active-img-indicator absolute top-[300px] left-[50%] translate-x-[-50%] w-[100px] h-[125px] border border-[#fff] rounded-sm mix-blend-difference z-[2]"></div>
        </div>
        <div className="images relative top-0 w-[75%]">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="item relative w-[500px] h-[600px] overflow-hidden my-[50px] mx-auto" key={index}>
              <div className="item-img w-[500px] h-[600px]">
                <img
                  className="w-full h-full object-cover"
                  src={getImageUrl(`/gsap/scroll/0${index + 1}.webp`)}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to ensure scrolling happens */}
      <div className="h-screen"></div>
    </div>
  );
}
