import React, { useRef, useEffect, useState } from 'react';

import { LineIcon, FillIcon } from '@t-headless-ui/react';
import IconItem from './iconItem';

const getLineDirectionIndicatorIcon = () =>
  Object.keys(LineIcon).map((Item, index) => {
    // eslint-disable-next-line import-x/namespace
    const I = LineIcon[Item as keyof typeof LineIcon];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

const getFillDirectionIndicatorIcon = () =>
  Object.keys(FillIcon).map((Item, index) => {
    // eslint-disable-next-line import-x/namespace
    const I = FillIcon[Item as keyof typeof FillIcon];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

export function IconsExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstRowItems, setFirstRowItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    // 计算第一行的图标
    const calculateFirstRow = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const items = container.children;
      if (items.length === 0) return;

      const firstRowY = items[0].getBoundingClientRect().top;
      const firstRowSet = new Set<number>();

      Array.from(items).forEach((item, index) => {
        if (Math.abs(item.getBoundingClientRect().top - firstRowY) < 2) {
          firstRowSet.add(index);
        }
      });

      setFirstRowItems(firstRowSet);
    };

    calculateFirstRow();
    // 监听窗口大小变化，重新计算第一行
    window.addEventListener('resize', calculateFirstRow);
    return () => window.removeEventListener('resize', calculateFirstRow);
  }, []);

  return (
    <div className="flex flex-wrap border-l border-color" ref={containerRef}>
      {[...getLineDirectionIndicatorIcon(), ...getFillDirectionIndicatorIcon()].map((item, index) => (
        <div key={index} className={firstRowItems.has(index) ? 'border-t border-color' : ''}>
          {item}
        </div>
      ))}
    </div>
  );
}
