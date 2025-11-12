'use client';

import React, { PropsWithChildren } from 'react';
import './index.css';

interface AvatarProps {
  text: string;
  des?: string;
}

export function Avatar(props: PropsWithChildren<AvatarProps>) {
  const { text, des, children } = props;
  return (
    <div className="flex gap-4 items-center">
      <div className="inline-flex items-center justify-center relative box-border bg-color-800 w-10 h-10 rounded-[50%] text-color-50">
        {children}
      </div>
      <div className="text-color flex flex-col text-sm">
        <span>{text}</span>
        <span className="text-color-400">{des}</span>
      </div>
    </div>
  );
}
