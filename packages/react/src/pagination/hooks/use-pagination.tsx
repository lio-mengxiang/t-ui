import { useMemo } from 'react';

export function usePagination({ allPages, current, bufferSize = 2 }: { allPages: number; current: number; bufferSize?: number }) {
  return useMemo(() => {
    // 0. 特殊情况快速返回
    if (allPages === 0) {
      return {
        pages: [],
        shouldShowFirst: false,
        shouldShowLast: false,
        shouldShowPrevEllipsis: false,
        shouldShowNextEllipsis: false,
      };
    }

    // 1. 计算理想的左右边界 (基于 current 向两边扩散)
    let left = current - bufferSize;
    let right = current + bufferSize;

    // 2. 边界吸附逻辑 (核心优化)
    // 规则：如果边界距离首尾仅差 2 页以内（产生 1...3 这种无意义间隙），
    // 则直接吸附到首尾，并相应扩展另一侧以保持视觉平衡。

    // 处理左侧：如果 left <= 3 (意味着范围是 3-xxx 或更小)，直接让 range 从 1 开始
    // 这样避免了 `1 ... 3` 的情况，直接变为 `1 2 3`
    if (left <= 3) {
      left = 1;
      // 当左侧吸附时，为了保持展示数量稳定，右侧尝试向后延伸 (可选，看设计需求)
      // 这里保持最小窗口大小： bufferSize * 2 + 1
      right = Math.max(right, 1 + bufferSize * 2);
    }

    // 处理右侧：同理，如果 right >= allPages - 2，直接延伸到末尾
    if (right >= allPages - 2) {
      right = allPages;
      // 当右侧吸附时，左侧尝试向前延伸
      left = Math.min(left, allPages - bufferSize * 2);
    }

    // 3. 最终的安全兜底 (防止 left < 1 或 right > allPages)
    if (left < 1) left = 1;
    if (right > allPages) right = allPages;

    // 4. 生成数组
    const pages: number[] = [];
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    return {
      pages,
      // 只有当 range 左边界 > 1 时，才显示首页按钮
      shouldShowFirst: left > 1,
      // 只有当 range 左边界 > 2 时，才显示省略号 (例如 1 ... 4)
      // 如果 left 是 2，则是 1 2 (无省略号)
      shouldShowPrevEllipsis: left > 2,
      shouldShowNextEllipsis: right < allPages - 1,
      shouldShowLast: right < allPages,
    };
  }, [allPages, current, bufferSize]);
}
