'use client';
// code form @popper-js（Modify parts of the source code）
import { areValidElements, getCompositeRect, getOffsetParent, listScrollParents, mergeByName } from './utils';
import getLayoutRect from './utils/getLayoutRect';
import { INVALID_ELEMENT_ERROR } from './constants';
import debounce from './debounce';
import { computeStyles, flip, offset, popperOffsets } from './modifiers';
import { isElement } from './utils/isElement';
// type
import type { State, OptionsGeneric, Instance, VirtualElement, Options } from './interface';

const defaultModifiers = [popperOffsets, offset, flip, computeStyles];

const DEFAULT_OPTIONS = {
  placement: 'bottom' as const,
  modifiers: [],
  strategy: 'absolute' as const,
};

export function createPopper(
  reference: Element | VirtualElement,
  popper: HTMLElement,
  options: Partial<OptionsGeneric<any>> = {},
): Instance {
  let state: Partial<Instance['state']> = {
    placement: 'bottom',
    orderedModifiers: [],
    options: { ...DEFAULT_OPTIONS, ...options },
    modifiersData: {},
    elements: {
      reference,
      popper,
    },
    styles: {},
  };

  let isDestroyed = false;

  const instance = {
    state,
    setOptions(options: OptionsGeneric<any>) {
      state.options = {
        ...state.options,
        ...options,
      };

      state.scrollParents = {
        reference: isElement(reference) ? listScrollParents(reference as Element) : [],
        popper: listScrollParents(popper),
      };

      const orderedModifiers = mergeByName([...defaultModifiers, ...state.options.modifiers]);
      state.orderedModifiers = orderedModifiers;

      return instance.update();
    },

    // Sync update – it will always be executed, even if not necessary. This
    // is useful for low frequency updates where sync behavior simplifies the
    // logic.
    // For high frequency updates (e.g. `resize` and `scroll` events), always
    // prefer the async Popper#update method
    forceUpdate() {
      if (isDestroyed) {
        return;
      }

      const { reference, popper } = state.elements;

      // Validate reference and popper us element type
      if (!areValidElements(reference, popper)) {
        console.error(INVALID_ELEMENT_ERROR);
        return;
      }

      state.rects = {
        // getOffsetParent 在某些情况下，会强制设置为 window
        // reference, popper 到 reference 元素的距离，以及 reference 元素的宽度高度
        reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
        popper: getLayoutRect(popper),
      };
      // Modifiers have the ability to reset the current update cycle. The
      // most common use case for this is the `flip` modifier changing the
      // placement, which then needs to re-run all the modifiers, because the
      // logic was previously ran for the previous placement and is therefore
      // stale/incorrect
      state.reset = false;

      state.placement = state.options.placement;

      state.orderedModifiers.forEach(
        // eslint-disable-next-line no-return-assign
        (modifier) =>
          (state.modifiersData[modifier.name] = {
            ...modifier.data,
          }),
      );

      for (let index = 0; index < state.orderedModifiers.length; index++) {
        if (state.reset === true) {
          state.reset = false;
          index = -1;
          continue;
        }

        const { fn, options = {}, name } = state.orderedModifiers[index];

        if (typeof fn === 'function') {
          state = fn({ state, options, name, instance } as { state: State; instance: Instance; options: Options; name: string }) || state;
        }
      }
    },

    // Async and optimistically optimized update – it will not be executed if
    // not necessary (debounced to run at most once-per-tick)
    update: debounce<State>(
      () =>
        new Promise<Partial<Instance['state']>>((resolve) => {
          instance.forceUpdate();
          resolve(state);
        }),
    ),

    destroy() {
      isDestroyed = true;
    },
  };

  instance.setOptions(options as OptionsGeneric<any>);

  return instance as Instance;
}
