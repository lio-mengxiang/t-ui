import React from 'react';
import { motion, useAnimation } from 'motion/react';
import copy from 'copy-to-clipboard';
import { TMessage } from '@/_components/ui-lib';

function IconItem({ Icon, Item }: any) {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ scale: 1.2 });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1 });
  };

  const handleClick = (Item: any) => {
    const result = copy(`<${Item} />`);
    if (result) {
      TMessage.success({
        type: 'success',
        message: `复制成功 <${Item} />`,
      });
    }
  };

  return (
    <motion.div
      onClick={() => handleClick(Item)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      className="flex p-5 items-center cursor-pointer border-r border-b border-color"
    >
      <div className="flex flex-col justify-center items-center w-[80px] h-[80px]">
        <motion.div animate={controls}>
          <Icon size="2em" />
        </motion.div>
        <span className="mt-5 text-xs">{Item}</span>
      </div>
    </motion.div>
  );
}

export default IconItem;
