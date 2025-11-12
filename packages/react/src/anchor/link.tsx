'use client';

import React, { forwardRef, useContext, useEffect, useRef, type PropsWithChildren } from 'react';

import { AnchorContext } from './context';
import { AnchorLinkProps } from './interface';
import { addLink, removeLink } from './utils';
import { useComposedRefs } from '../hooks';

export const AnchorLink = forwardRef<HTMLDivElement, AnchorLinkProps>((props: PropsWithChildren<AnchorLinkProps>, ref) => {
  // context
  const anchorContext = useContext(AnchorContext);
  const { onLinkClick, linkMap, currentId } = anchorContext;

  // props
  const { onClick, targetId, children, className, activeClassName, ...restProps } = props;

  // ref
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addLink(linkMap, targetId, linkRef.current);
    return () => {
      removeLink(linkMap, targetId);
    };
  }, [targetId, linkMap]);

  return (
    <div
      ref={useComposedRefs(ref, linkRef)}
      {...restProps}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
        onLinkClick?.(e, targetId);
      }}
      data-target-id={targetId}
      className={currentId === targetId ? activeClassName : className}
    >
      {children}
    </div>
  );
});
