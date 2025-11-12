import React from 'react';
import { Cell, Grid, IconNineGridLine } from '@t-headless-ui/react';
import { DraggableItem } from '../draggable-card';
import { motion } from 'motion/react';

export function GridDemo({ width, height }: { width: number; height: number }) {
  return (
    <DraggableItem
      defaultPosition={{ x: width / 2 - 840, y: height / 2 - 280 }}
      grid={16}
      className="-rotate-[12deg] hover:-rotate-[8deg] transition-transform duration-600"
      onDragClassName="scale-[1.04]"
    >
      <motion.div
        className="p-1 rounded-3xl shadow bg-[rgba(251,251,251,1)] w-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      >
        <div className="px-2 py-3 text-sm flex gap-2 text-[#656565]">
          <IconNineGridLine size="1.4em" /> Grid 组件
        </div>
        <div className="bg-[rgba(255,255,255,1)] py-8 rounded-3xl flex items-center">
          <Grid columns={6} gap="8px" minRowHeight="40px" className="w-full px-3">
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>
              2/6
            </Cell>
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>
              2/6
            </Cell>
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={2} middle center>
              2/6
            </Cell>
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>
              1/3
            </Cell>
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={3} middle center>
              1/3
            </Cell>
            <Cell className="bg-[var(--bg-color-100)] rounded-md text-color-400" width={6} middle center>
              1/1
            </Cell>
          </Grid>
        </div>
      </motion.div>
    </DraggableItem>
  );
}
