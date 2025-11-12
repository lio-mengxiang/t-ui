'use client';

import React, { forwardRef, type PropsWithChildren } from 'react';
import { AnchorContext } from './context';
import { useStore } from './store';
import { useComposedRefs } from '../hooks';

import type { AnchorProps } from './interface';

export const Anchor = forwardRef((props: PropsWithChildren<AnchorProps>, ref) => {
  const {
    scrollContainer: propScrollContainer,
    offset = 0,
    children,
    onChange,
    queryKey = 'anchor-id',
    isCloseInitAnchor,
    ...restProps
  } = props;

  // store
  const { currentId, onLinkClick, wrapperRef, linkMap } = useStore({
    propScrollContainer,
    onChange,
    offset,
    queryKey,
    isCloseInitAnchor,
  });

  return (
    <AnchorContext.Provider
      value={{
        currentId,
        linkMap,
        onLinkClick,
      }}
    >
      <div {...restProps} ref={useComposedRefs(wrapperRef, ref)}>
        {children}
      </div>
    </AnchorContext.Provider>
  );
});
