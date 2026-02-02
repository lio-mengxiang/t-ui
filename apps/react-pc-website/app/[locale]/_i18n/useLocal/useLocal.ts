import { transformLocale } from './transformLocale';
import { locales } from '../routing';
import { useLocale } from '@/_hooks/use-locale';
import { localeMessage } from '@/_message';

export function useTransformLocale() {
  const lang = useLocale();
  if (!locales.includes(lang)) {
    console.error('There is an error in the passed language property');
  }
  const getLocalConfig = localeMessage[lang];

  return [getLocalConfig, transformLocale] as [
    typeof getLocalConfig,
    (pattern: string, placement?: Record<string, string | number>) => string,
  ];
}

export type LocaleMessageType = (typeof localeMessage)['zh'];
