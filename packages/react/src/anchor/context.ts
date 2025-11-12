'use client';

import React, { createContext, type RefObject } from 'react';

export interface AnchorContextProps {
  currentId: string;
  onLinkClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, href: string) => void;
  linkMap: RefObject<Map<string, HTMLElement>>;
}

export const AnchorContext = createContext<AnchorContextProps>({
  currentId: '',
  onLinkClick: () => {},
  linkMap: { current: new Map() },
});
