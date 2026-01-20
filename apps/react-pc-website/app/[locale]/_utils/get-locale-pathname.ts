import { type Locale } from '@/_i18n';
import { defaultLang } from '../../../config';

const SUPPORTED_LOCALES: Locale[] = ['zh', 'en'];

export function getLocaleFromPathname(
  pathname: string,
  options?: {
    supported?: readonly Locale[];
    defaultLocale?: Locale;
  },
): Locale {
  const supported = options?.supported ?? SUPPORTED_LOCALES;
  const defaultLocale = options?.defaultLocale ?? defaultLang;

  if (!pathname) return defaultLocale;

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (supported.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return defaultLocale;
}
