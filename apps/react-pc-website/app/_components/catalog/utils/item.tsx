'use client';

import { cs } from '@/_utils';
import { Anchor } from '@t-headless-ui/react';
import React, { useContext } from 'react';
import type { NestedAnchorLinkProps } from './createNestedLink';

export const LinkItem = ({ item }: { item: NestedAnchorLinkProps }) => {
  const { currentId } = useContext(Anchor.Context);
  return (
    <div
      className={cs('text-color-500 text-[12px] cursor-pointer hover:text-primary-color mb-3', {
        ['ml-2']: item.level === 3,
        ['text-primary-color']: currentId === item.text,
      })}
    >
      {item.text}
    </div>
  );
};
