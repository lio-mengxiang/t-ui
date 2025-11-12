

import { left, bottom, right, start } from '../constants';
import type { Boundary, RootBoundary, ModifierArguments, Modifier } from '../interface';
import { detectOverflow, getBasePlacement, getVariation, within, getAltAxis } from '../utils';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';




// eslint-disable-next-line import/no-unused-modules
export type Options = {
  /* Prevents boundaries overflow on the main axis */
  mainAxis: boolean,
  /* Prevents boundaries overflow on the alternate axis */
  altAxis: boolean,
  /* The area to check the popper is overflowing in */
  boundary: Boundary,
  /* If the popper is not overflowing the main area, fallback to this one */
  rootBoundary: RootBoundary,
  /* Use the reference's "clippingParents" boundary context */
  altBoundary: boolean,
};

function preventOverflow({ state, options, name }: ModifierArguments<Options>) {
  const {
    mainAxis: checkMainAxis = true,
    altAxis: checkAltAxis = false,
    boundary,
    rootBoundary,
    altBoundary,
  } = options;

  const overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    altBoundary,
  });
  const basePlacement = getBasePlacement(state.placement);
  const variation = getVariation(state.placement);
  const isBasePlacement = !variation;
  const mainAxis = getMainAxisFromPlacement(basePlacement);
  const altAxis = getAltAxis(mainAxis);
  const popperOffsets = state.modifiersData.popperOffsets;
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;

  const data = { x: 0, y: 0 };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    const mainSide = mainAxis === 'y' ? top : left;
    const altSide = mainAxis === 'y' ? bottom : right;
    const len = mainAxis === 'y' ? 'height' : 'width';
    const offset = popperOffsets[mainAxis];


    // 左边界
    const min = popperOffsets[mainAxis] + overflow[mainSide as 'top' | 'left'];

    // 右边界
    const max = popperOffsets[mainAxis] - overflow[altSide];

    // popperRect 元素一般的宽度或高度（负数）
    const additive = -popperRect[len] / 2;

    const minLen = variation === start ? referenceRect[len] : popperRect[len];
    const maxLen = variation === start ? -popperRect[len] : -referenceRect[len];

    const minOffset = isBasePlacement
      ? referenceRect[len] / 2 -
        additive
      : minLen ;
    const maxOffset = isBasePlacement
      ? -referenceRect[len] / 2 +
        additive
      : maxLen;

    const offsetModifierValue = state.modifiersData.offset
      ? state.modifiersData.offset[state.placement][mainAxis]
      : 0;


    const tetherMin =
      popperOffsets[mainAxis] + minOffset - offsetModifierValue;

    const tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      const preventedOffset = within(
        Math.min(min, tetherMin),
        offset, //
        Math.max(max, tetherMax)
      );

      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      const mainSide = mainAxis === 'x' ? top : left;
      const altSide = mainAxis === 'x' ? bottom : right;
      const offset = popperOffsets[altAxis];

      const min = offset + overflow[mainSide as 'top' | 'left'];
      const max = offset - overflow[altSide];

      const preventedOffset = within(
        Math.min(min, tetherMin),
        offset,
        Math.max(max, tetherMax)
      );

      popperOffsets[altAxis] = preventedOffset;
      data[altAxis] = preventedOffset - offset;
    }
  }

  state.modifiersData[name] = data;
}

// eslint-disable-next-line import/no-unused-modules
export type PreventOverflowModifier = Modifier<'preventOverflow', Options>;
export default ({
  name: 'preventOverflow',
  phase: 'main',
  fn: preventOverflow,
} as PreventOverflowModifier);
