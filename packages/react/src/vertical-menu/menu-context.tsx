'use client';

import { createContext } from 'react';
import type { MenuContextProps } from './interface-context';

export const MenuContext = createContext<Partial<MenuContextProps>>({});
