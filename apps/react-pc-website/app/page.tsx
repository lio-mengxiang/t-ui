'use client';

import React, { useState, useRef } from 'react';
import { DraggableElement } from './_components/draggable-element';
import { createIcon, IconHandDragLine, IconTLogo } from '@t-headless-ui/react';

import { type AnimationPlaybackControls, motion, useAnimate } from 'motion/react';
import Overlay from './overlay';
import { Page2 } from './_components/page';
import { ButtonDemo, GridDemo, IconDemo, MessageDemo, ModalDemo, PopoverDemo } from './_components/draggable-element/demo';
import { InputDemo } from './_components/draggable-element/demo/input-demo';
import { useRouter } from 'next/navigation';

const width = 3201;
const height = 2760;
export default function Home() {
  const [isShow, setShow] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const router = useRouter();
  const time = 750;

  const goToPage = (isOverlay = true) => {
    setShow(true);
    setTimeout(() => {
      setIsOverlay(isOverlay);
      setShow(false);
    }, time);
  };

  return (
    <div>
      <Overlay isShow={isShow} time={time} />
      {isOverlay ? (
        <Page2 goToPage={() => goToPage(false)} router={router} />
      ) : (
        <DraggableElement width={width} height={height}>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="flex justify-center items-center gap-2 text-sm text-[#666666]"
            >
              <IconHandDragLine className="w-8 h-8 text-[#a7a7a7]" />
              页面和卡片可拖动
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="my-10 p-[32px] bg-[rgba(255,255,255,0.3)] rounded-3xl w-[340px] backdrop-blur-[2px] flex flex-col items-center text-sm shadow-[0_48px_72px_-12px_rgba(0,0,0,0.05),0_32px_44px_-12px_rgba(0,0,0,0.08)] relative"
            >
              <div className="text-sm flex mb-8">
                <IconTLogo className="text-3xl" />
                <span className="text-lg mt-[6px]">
                  headless <span className="text-primary-hover dark:text-[#4cc3fa]">ui</span>
                </span>
              </div>
              <p className="leading-8 break-all whitespace-normal text-[#0009] tracking-wide text-center">
                什么项目既能覆盖常见前端开发难点？ 又能在面试项目介绍中亮出锋芒？ 这套企业级组件库项目，你不能错过 ！
              </p>
              <Button onClick={() => goToPage(true)} />
              <IconScrew className="w-6 h-6 text-[#dddddd] absolute top-[4px] left-[4px]" />
              <IconScrew className="w-6 h-6 text-[#dddddd] absolute top-[4px] right-[4px]" />
              <IconScrew className="w-6 h-6 text-[#dddddd] absolute bottom-[4px] left-[4px]" />
              <IconScrew className="w-6 h-6 text-[#dddddd] absolute bottom-[4px] right-[4px]" />
              <motion.span
                initial={{ opacity: 0, right: -22, top: -22 }}
                animate={{ opacity: 1, right: -32, top: -32 }}
                transition={{ delay: 0.5 }}
                className="absolute"
              >
                <IconWatch className="w-12 h-12 text-[#5bb8f3]" />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, left: -22, bottom: -22 }}
                animate={{ opacity: 1, left: -32, bottom: -32 }}
                transition={{ delay: 0.5 }}
                className="absolute rotate-180"
              >
                <IconWatch className="w-12 h-12 text-[#5bb8f3]" />
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="flex flex-col justify-center items-center gap-2 text-sm text-[#666666]"
            >
              <div>组件还在丰富中...</div>
              <div>第一期为 24 个组件</div>
              <div>最终会对标大厂的组件库</div>
              <div onClick={() => router.push('/button')} className="ml-2 cursor-pointer text-cyan-700">
                进入组件库网
              </div>
            </motion.div>
          </div>
          <ButtonDemo width={width} height={height} />
          <IconDemo width={width} height={height} />
          <MessageDemo width={width} height={height} />
          <PopoverDemo width={width} height={height} />
          <InputDemo width={width} height={height} />
          <GridDemo width={width} height={height} />
          <ModalDemo width={width} height={height} />
        </DraggableElement>
      )}
    </div>
  );
}

const IconScrew = createIcon({
  iconProps: { useFillCurrentColor: true },
  viewBox: '0 0 29 29',
  paths: (
    <>
      <path d="M14.5 8C18.0899 8 21 10.9101 21 14.5C21 18.0899 18.0899 21 14.5 21C10.9101 21 8 18.0899 8 14.5C8 10.9101 10.9101 8 14.5 8ZM14 10V14H10V15H14V19H15V15H19V14H15V10H14Z"></path>
    </>
  ),
});

const IconWatch = createIcon({
  iconProps: { useFillCurrentColor: true },
  viewBox: '0 0 43 41',
  paths: (
    <>
      <path d="M0.348667 8.25936C-0.0835381 7.58379 -0.11367 6.94969 0.256859 6.35847C0.628799 5.76583 1.19846 5.44856 1.96723 5.39954C2.736 5.35051 3.34848 5.65455 3.80465 6.30602C4.62235 7.46561 5.57259 8.54021 6.65114 9.53121C8.88149 6.13 11.4846 3.14898 14.4576 0.593803C15.1526 -0.00850296 15.8748 -0.152615 16.6184 0.16148C17.3635 0.476997 17.7717 1.08021 17.8443 1.97251C18.2083 5.42548 18.3312 9.19174 18.2131 13.2713C21.3817 11.8256 26.1326 9.77682 32.4686 7.12791C33.0214 6.90991 33.6153 6.91748 34.2503 7.1478C34.8853 7.37812 35.337 7.76999 35.6012 8.32484C35.8669 8.88112 35.7827 9.44846 35.3515 10.0269C33.1941 12.8749 30.9884 17.1684 28.736 22.9115C29.5756 23.2257 31.4805 23.9337 34.4452 25.0354C37.4113 26.1358 39.6874 27.0015 41.2707 27.6298C42.1371 27.9681 42.6892 28.6452 42.9284 29.6596C43.1705 30.674 42.7986 31.3858 41.8129 31.795C38.2127 33.2886 34.9494 34.4917 32.0215 35.4085C32.8631 36.3511 33.8485 37.3647 34.9765 38.4536C35.3365 38.8156 35.4638 39.2441 35.3556 39.7391C35.2474 40.2341 34.9782 40.6013 34.5454 40.8435C34.1139 41.0843 33.6935 41.047 33.2855 40.7332C31.5325 39.4523 29.5618 37.7854 27.3751 35.731C27.0391 35.3931 26.8596 34.9944 26.8338 34.5347C26.8095 34.0765 26.9291 33.678 27.1926 33.3392C27.4575 33.0018 27.8043 32.7354 28.2358 32.5429C30.7814 31.6754 33.121 30.7737 35.256 29.8335C29.2289 27.1491 25.9874 25.6981 25.5287 25.4807C25.3128 25.36 25.1265 25.1953 24.9711 24.9909C24.8144 24.7851 24.707 24.5325 24.6461 24.2303C24.5852 23.9281 24.6047 23.6813 24.6991 23.487C25.562 21.2195 26.6405 18.6359 27.9332 15.7403C28.2444 15.0412 28.6655 14.1834 29.1923 13.171C24.2721 15.2678 20.0965 16.9794 16.6654 18.3029C16.09 18.4954 15.52 18.3672 14.9554 17.9214C14.3922 17.4741 14.1336 16.9618 14.1797 16.3817C14.441 13.2682 14.4637 9.91203 14.2436 6.3145C12.1562 8.55832 10.3581 10.9712 8.84794 13.5517C8.48871 14.1542 8.00933 14.4801 7.40843 14.5278C6.80893 14.577 6.23324 14.395 5.67993 13.9832C3.61485 12.3885 1.83588 10.4805 0.345844 8.25652L0.348667 8.25936Z"></path>
    </>
  ),
});
function Button({ onClick }: { onClick: () => void }) {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls>(null);

  const handleHoverStart = async () => {
    controlsRef.current?.stop();
    // 再从 208px 动画到 70px
    animate([
      [scope.current, { '--offset': '208px' }, { duration: 0 }],
      [scope.current, { '--offset': '70px' }, { duration: 0.6, ease: 'easeIn' }],
    ]);
  };

  const handleHoverEnd = async () => {
    controlsRef.current = animate(scope.current, { '--offset': '-161px' }, { duration: 0.8, ease: 'easeOut' });
  };

  return (
    <div
      className="h-11 overflow-hidden mt-10 flex justify-center w-full cursor-pointer relative"
      ref={scope}
      onClick={onClick}
      style={
        {
          '--radius': '160px',
          '--offset': '208px',
        } as any
      }
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="flex items-center justify-center bg-[#e1ff01] text-[#202023] h-10 w-full rounded-[6.8rem] tracking-[0.4rem] border border-[#202023]">
        了解一下~
      </div>
      <motion.div className="absolute left-0 top-0 flex items-center justify-center h-10 bg-[#202023] text-[#e1ff01] w-full rounded-[6.8rem] tracking-[0.4rem] [clip-path:circle(var(--radius)_at_center_var(--offset))]">
        了解一下~
      </motion.div>
    </div>
  );
}
