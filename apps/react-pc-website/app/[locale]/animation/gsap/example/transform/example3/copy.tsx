'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = '#000',
  stagger = 0.15,
  duration = 0.75,
}: {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRefs = useRef<any[]>([]);
  const lines = useRef<any[]>([]);
  const blocks = useRef<any[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];

      let elements: any[] = [];

      if (containerRef.current.hasAttribute('data-copy-wrapper')) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        // 将 element 中的文本按行拆分，每行添加 class "block-line++"，行高判定阈值为 0.1
        // lineThreshold: 行高判定阈值，用于判断两行之间是否属于同一段落（值越小越严格，0.1 表示行间距小于当前行高 10% 即视为同一段落）
        const split = new SplitText(element, { type: 'lines', lineClass: 'block-line++', lineThreshold: 0.1 });
        splitRefs.current.push(split);
        split.lines.forEach((line) => {
          const wrapper = document.createElement('div');
          wrapper.className = 'relative w-max';
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement('div');
          block.className = 'absolute top-0 left-0 w-[100%] h-[100%] z-[1]';
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line);
          blocks.current.push(block);
        });
      });

      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, { scaleX: 0, transformOrigin: 'left center' });

      const createBlockRevealAnimation = (block: gsap.TweenTarget, line: gsap.TweenTarget, index: number) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, { scaleX: 1, duration, ease: 'power4.inOut' });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: 'right center' });
        tl.to(block, { scaleX: 0, duration, ease: 'power4.inOut' });

        return tl;
      };

      if (animateOnScroll) {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(block, lines.current[index], index);
          tl.pause();

          ScrollTrigger.create({
            trigger: block,
            start: 'top 90%',
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blocks.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lines.current[index], index);
        });
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, blockColor, stagger, duration] },
  );

  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}
