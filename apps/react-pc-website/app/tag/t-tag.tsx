'use client';

import { cs } from '@/_utils';
import { IconCloseLine, IconLoadingLine, useMergeValue } from '@t-headless-ui/react';
import React, { useState } from 'react';

function isPromiseInstance(value: any): value is Promise<any> {
  return value && value instanceof Promise;
}
export function TTag(props: {
  children: React.ReactNode;
  className?: string;
  onClose?: (e: React.MouseEvent) => Promise<void> | void;
  closable?: boolean;
  visible?: boolean;
}) {
  const { children, className, onClose, closable, visible: visibleProp, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useMergeValue(true, {
    value: visibleProp,
  });

  const handleOnClose = (e: React.MouseEvent) => {
    const ret = onClose?.(e);
    if (ret && isPromiseInstance(ret)) {
      setLoading(true);
      ret
        .then(() => {
          setLoading(false);
          setVisible(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setVisible(false);
    }
  };

  return (
    <div
      className={cs('inline-flex box-border items-center nowrap h-6 px-2 rounded-sm bg-color-100 text-[12px]', className, {
        hidden: !visible,
      })}
      {...rest}
    >
      {children}
      {closable && visible && !loading && (
        <IconCloseLine onClick={handleOnClose} className="ml-1 cursor-pointer hover:text-color-400 duration-200 transition-colors" />
      )}
      {loading && <IconLoadingLine className="ml-1 animate-spin" />}
    </div>
  );
}
