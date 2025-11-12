import React from 'react';
import { IconAllLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { TagCloud3DExample } from '@/t-icon/example/tailwind-creative-example/markdown/example';
import { motion } from 'motion/react';

export function IconDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 - 580, y: height / 2 - 40 }}
      grid={16}
      className="-rotate-[8deg] hover:-rotate-[2deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[360px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.7 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconAllLine size="1.4em" /> Icon 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex flex-col gap-5 items-center">
          <TagCloud3DExample />
        </div>
      </motion.div>
    </DraggableItem>
  );
}
