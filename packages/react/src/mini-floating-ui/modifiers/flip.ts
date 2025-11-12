import { detectOverflow, getBasePlacement, getOppositePlacement } from '../utils';
// type
import type { ModifierArguments, Modifier, Padding, Placement, Boundary, RootBoundary } from '../interface';

export type Options = {
  mainAxis: boolean;
  altAxis: boolean;
  fallbackPlacements: Array<Placement>;
  padding: Padding;
  boundary: Boundary;
  rootBoundary: RootBoundary;
  allowedAutoPlacements: Array<Placement>;
};

function getExpandedFallbackPlacements(placement: Placement): Array<Placement> {
  const oppositePlacement = getOppositePlacement(placement);
  return [oppositePlacement];
}

function flip({ state, options, name }: ModifierArguments<Options>) {
  if (state.modifiersData[name]?._skip) {
    return;
  }

  const { mainAxis: checkMainAxis = true, boundary, rootBoundary } = options;

  const preferredPlacement = state.options.placement;
  const basePlacement = getBasePlacement(preferredPlacement);
  const isBasePlacement = basePlacement === preferredPlacement;

  const fallbackPlacements = isBasePlacement
    ? [getOppositePlacement(preferredPlacement)]
    : getExpandedFallbackPlacements(preferredPlacement);

  const placements = [preferredPlacement, ...fallbackPlacements];

  const checksMap = new Map();
  // let makeFallbackChecks = true;
  let firstFittingPlacement = placements[0];

  for (let i = 0; i < placements.length; i++) {
    const placement = placements[i];
    const basePlacement = getBasePlacement(placement);

    // 各个方位，popper 的 scroll 父元素组成的最小区域
    const overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
    });

    const checks = [];

    if (checkMainAxis) {
      checks.push(overflow[basePlacement] <= 0);
    }

    if (checks.every((check) => check)) {
      firstFittingPlacement = placement;
      // makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}

export type FlipModifier = Modifier<'flip', Options>;
export default {
  name: 'flip',
  fn: flip,
  data: { _skip: false },
} as FlipModifier;
