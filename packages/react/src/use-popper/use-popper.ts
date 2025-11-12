import { useEffect, useMemo, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import type {
  VirtualElement,
  Options as PopperOptions,
  State as PopperState,
  Instance as PopperInstance,
  Placement,
  PositioningStrategy,
} from '../mini-floating-ui/interface';
import { createPopper as defaultCreatePopper } from '../mini-floating-ui/createPopper';
import { fromEntries } from './utils';
import type { Options, UsePopperResult, State } from './interface';

export const usePopper = (referenceElement?: Element | VirtualElement, popperElement?: HTMLElement, options?: Options): UsePopperResult => {
  const prevOptions = useRef<PopperOptions>(null);
  const popperInstanceRef = useRef<PopperInstance>(null);

  const optionsWithDefaults = {
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    offsetSkidding: options.offsetSkidding || 0,
    offsetDistance: options.offsetDistance || 0,
  };

  const [state, setState] = useState<State>({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0',
      },
    },
  });

  const updateStateModifier = useMemo(
    () => ({
      name: 'updateState',
      fn: ({ state }: { state: PopperState }) => {
        const elements = Object.keys(state.elements);
        ReactDOM.flushSync(() => {
          setState({
            styles: fromEntries(elements.map((element) => [element, state.styles[element] || {}])),
          });
        });
      },
    }),
    [],
  );

  const offsetStateModifier = useMemo(
    () => ({
      name: 'offset',
      options: {
        offset: [optionsWithDefaults.offsetSkidding, optionsWithDefaults.offsetDistance],
      },
    }),
    [optionsWithDefaults.offsetSkidding, optionsWithDefaults.offsetDistance],
  );

  const popperOptions = useMemo(() => {
    const newOptions = {
      placement: optionsWithDefaults.placement as Placement,
      strategy: optionsWithDefaults.strategy as PositioningStrategy,
      modifiers: [offsetStateModifier, updateStateModifier],
      offsetSkidding: optionsWithDefaults.offsetSkidding,
      offsetDistance: optionsWithDefaults.offsetDistance,
    };

    prevOptions.current = newOptions;
    return newOptions;
  }, [optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.offsetSkidding, optionsWithDefaults.offsetDistance]);

  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);

  useEffect(() => {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    const createPopper = defaultCreatePopper;
    const popperInstance = createPopper(referenceElement as Element, popperElement, popperOptions);

    popperInstanceRef.current = popperInstance;

    return () => {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement]);

  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null,
  };
};
