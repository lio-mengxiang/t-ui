import React from 'react';
import { IconEditLine, IconSearchLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { TInput } from '@/input/t-input';
import { motion } from 'motion/react';
import { TMotionInput } from '@/input/t-input-creative';

export function InputDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 + 240, y: height / 2 - 280 }}
      grid={16}
      className="rotate-[4deg] hover:rotate-[2deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.9 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconEditLine size="1.4em" /> Input 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex flex-col gap-5 items-center">
          <TInput placeholder="Enter" allowClear className="w-64" onWrapperMouseDown={(e) => e.stopPropagation()} />
          <TInput
            placeholder="Enter"
            className="w-64"
            prefixElement="+86"
            suffixElement={<IconSearchLine />}
            onWrapperMouseDown={(e) => e.stopPropagation()}
          />
          <TMotionInput
            allowClear
            className="w-64 h-14 cursor-text"
            placeholder="placeholder 动画"
            onWrapperMouseDown={(e) => e.stopPropagation()}
          />
        </div>
      </motion.div>
    </DraggableItem>
  );
}
