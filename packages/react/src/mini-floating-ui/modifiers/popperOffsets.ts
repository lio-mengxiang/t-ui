import type { ModifierArguments, Modifier } from '../interface';
import { computeOffsets } from '../utils';

/**
 * 计算 popper 元素的初始位置
 * 根据之前计算的 reference 和 popper 、position 信息，计算出最基本初始位置，并保存到 state.modifiersData.popperOffsets 中
 */
function popperOffsets({ state, name }: ModifierArguments<object>) {
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement,
  });
}

export type PopperOffsetsModifier = Modifier<'popperOffsets', object>;
export default {
  name: 'popperOffsets',
  fn: popperOffsets,
  data: {},
} as PopperOffsetsModifier;
