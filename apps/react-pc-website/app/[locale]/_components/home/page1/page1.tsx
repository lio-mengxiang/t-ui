'use client';

import { DraggableElement } from '@/_components/draggable-element';
import { ButtonDemo, IconDemo, MessageDemo, PopoverDemo, GridDemo, ModalDemo } from '@/_components/draggable-element/demo';
import { InputDemo } from '@/_components/draggable-element/demo/input-demo';
import { IconHandDragLine, IconTLogo } from '@t-headless-ui/react';
import { motion } from 'motion/react';
import { useLocaleRouter } from '@/_hooks';
import { IconScrew } from './icon-screw';
import { IconWatch } from './Icon-watch';
import { Button } from './button';

const width = 3201;
const height = 2760;

export function Page1({ goToPage }: { goToPage: (isOverlay?: boolean) => void }) {
  const router = useLocaleRouter();

  return (
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
  );
}
