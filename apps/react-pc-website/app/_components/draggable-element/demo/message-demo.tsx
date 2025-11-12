import React from 'react';
import { IconMessageLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { TButton } from '@/button/tailwind-button';
import { TMessage } from '@/toast/message';
import { TAlert } from '@/alert/t-alert';
import { toastBottomStackStore, toastStore } from '@/layout';
import { motion } from 'motion/react';

let index1 = 0;
let index2 = 0;
export function MessageDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 + 240, y: height / 2 + 80 }}
      grid={16}
      className="rotate-[8deg] hover:rotate-[4deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[360px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.8 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconMessageLine size="1.4em" /> Message 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex flex-col gap-5 items-center">
          <TButton
            status="primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() =>
              TMessage.info({
                message: '这是一条通知',
              })
            }
          >
            点击打开消息
          </TButton>
          <TButton
            status="primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() =>
              toastBottomStackStore.add({
                duration: 3,
                component: <TAlert message={`这是第${index1++}条通知`} title="Alter" containerClassName="pb-2" />,
              })
            }
          >
            堆叠效果通知
          </TButton>
          <TButton
            status="primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() =>
              toastStore.add({
                duration: 4,
                showProgress: true,
                component: <TAlert message={`这是第${index2++}条通知`} title="Alter" containerClassName="pb-2" />,
              })
            }
          >
            倒计时效果通知
          </TButton>
        </div>
      </motion.div>
    </DraggableItem>
  );
}
