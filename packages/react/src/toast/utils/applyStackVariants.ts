import { type Variants } from 'motion/react';
import { type Direction } from '../interface';

interface StackVariantsOptions {
  index: number;
  maxVisible: number;
  offset: number;
  expanded: boolean;
}

export const applyStackVariants = (options: StackVariantsOptions & { direction: Direction }): Variants => {
  const { index, maxVisible, offset, expanded, direction } = options;

  // 根据方向确定动画的基础参数
  const isTopToBottom = direction === 'top-to-bottom';
  const cardHeight = 80; // 假设每个卡片高度约80px

  // 计算堆叠时的变换
  const getStackTransform = (isExpanded: boolean) => {
    if (isExpanded) {
      // 展开时，每个卡片按正常间距排列
      const expandedY = isTopToBottom
        ? index * cardHeight // 从上到下：正值向下
        : -index * cardHeight; // 从下到上：负值向上

      return {
        y: expandedY,
        scale: 1,
        opacity: 1,
      };
    } else {
      // 堆叠时的效果
      if (index >= maxVisible) {
        // 超出最大可见数量的卡片隐藏
        const hiddenY = isTopToBottom
          ? (maxVisible - 1) * offset // 从上到下：正值向下
          : -(maxVisible - 1) * offset; // 从下到上：负值向上

        return {
          y: hiddenY,
          scale: 0.95 - (maxVisible - 1) * 0.05,
          opacity: 0,
        };
      } else {
        // 可见的卡片堆叠效果
        const stackedY = isTopToBottom
          ? index * offset // 从上到下：正值向下
          : -index * offset; // 从下到上：负值向上

        return {
          y: stackedY,
          scale: 1 - index * 0.05,
          opacity: 1 - index * 0.1,
        };
      }
    }
  };

  // 根据方向确定初始和退出动画的位置
  const getInitialY = () => {
    return isTopToBottom ? -cardHeight : cardHeight;
  };

  const getExitY = () => {
    return isTopToBottom ? -20 : 20;
  };

  return {
    initial: {
      opacity: 0,
      scale: 1,
      y: getInitialY(),
    },
    animate: {
      ...getStackTransform(expanded),
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: getExitY(),
    },
  };
};
