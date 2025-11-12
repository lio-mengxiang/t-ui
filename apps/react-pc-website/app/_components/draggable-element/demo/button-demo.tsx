import React from 'react';
import { TButton } from '@/button/tailwind-button';
import { ParticleButton } from '@/button/tailwind-button/particle-button';
import { RippleButton } from '@/button/tailwind-button/ripple-button';
import { IconClickLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { motion } from 'motion/react';

export function ButtonDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 - 500, y: height / 2 - 370 }}
      grid={16}
      className="-rotate-[4deg] hover:-rotate-[2deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[280px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.8 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconClickLine size="1.4em" /> Button 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex flex-col gap-5 items-center">
          <TButton status="primary" className="w-fit" onMouseDown={(e) => e.stopPropagation()}>
            基础按钮
          </TButton>
          <RippleButton status="primary" type="outline" onMouseDown={(e) => e.stopPropagation()}>
            水波点击效果
          </RippleButton>
          <ParticleButton status="primary" onMouseDown={(e) => e.stopPropagation()}>
            粒子点击效果
          </ParticleButton>
        </div>
      </motion.div>
    </DraggableItem>
  );
}
