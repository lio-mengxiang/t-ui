'use client';

import { getLocaleFromPathname } from '@/_utils';
import { usePathname } from 'next/navigation';

export function useLocale() {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
