import React from 'react';
import { IconInterfaceLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { motion } from 'motion/react';
import { TButton } from '@/button/tailwind-button';
import { TModal } from '@/modal/t-modal';

export function ModalDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 + 640, y: height / 2 - 300 }}
      grid={16}
      className="rotate-[12deg] hover:rotate-[8deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconInterfaceLine size="1.4em" /> Modal 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex justify-center items-center">
          <TButton
            status="primary"
            onClick={() => {
              TModal.add({
                title: 'Modal Alert',
                content: 'This is a message!',
              });
            }}
          >
            Open Modal
          </TButton>
        </div>
      </motion.div>
    </DraggableItem>
  );
}
