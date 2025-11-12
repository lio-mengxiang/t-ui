import React from 'react';
import { IconFloatLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { TButton } from '@/button/tailwind-button';
import { TPopover } from '@/popover/t-popover';
import { motion } from 'motion/react';

function PopoverContent() {
  return <div onMouseDown={(e) => e.stopPropagation()}>Popover Content</div>;
}

export function PopoverDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 + 640, y: height / 2 - 80 }}
      grid={16}
      className="rotate-[4deg] hover:rotate-[2deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[360px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.8 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconFloatLine size="1.4em" /> Popover 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex flex-col gap-5 items-center">
          <TPopover popoverContent={<PopoverContent />} contentClassName="rotate-[2deg]">
            <TButton status="primary" onMouseDown={(e) => e.stopPropagation()}>
              Hover 浮层!
            </TButton>
          </TPopover>
          <TPopover popoverContent={<PopoverContent />} contentClassName="rotate-[2deg]" trigger="click" placement="bottom">
            <TButton status="primary" onMouseDown={(e) => e.stopPropagation()}>
              Click 浮层!
            </TButton>
          </TPopover>
        </div>
      </motion.div>
    </DraggableItem>
  );
}
