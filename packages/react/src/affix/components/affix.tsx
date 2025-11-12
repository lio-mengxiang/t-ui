'use client';

import React, { forwardRef, useImperativeHandle } from 'react';
import { useStore } from '../store';
// type
import type { AffixProps, AffixRef } from '../interface';

const defaultProps: Partial<AffixProps> = { container: () => window, offsetBottom: 0, offsetTop: 0, fixedClassName: '' };

function Affix(baseProps: AffixProps, ref) {
  // props
  const props = { ...defaultProps, ...baseProps };
  const { fixedClassName, children, zIndex, container, offsetBottom, offsetTop, className, style, onFixedChange, isInScrollContainer } =
    props;
  // data store
  const { handleScroll, affixWrapRef, affixRef } = useStore({
    fixedClassName,
    zIndex,
    container,
    offsetBottom,
    offsetTop,
    onFixedChange,
    isInScrollContainer,
  });

  // export handleScroll
  useImperativeHandle<any, AffixRef>(ref, () => ({
    handleScroll,
  }));

  return (
    <div ref={affixWrapRef} className={className} style={style}>
      <div ref={affixRef}>{children}</div>
    </div>
  );
}

const AffixComponent = forwardRef<any, AffixProps>(Affix);

export { AffixComponent as Affix };
