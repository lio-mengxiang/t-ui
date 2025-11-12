'use client';

import { createContext } from 'react';
import { SubMenuContextProps } from './interface-context';

export const SubMenuContext = createContext<Partial<SubMenuContextProps>>({});
