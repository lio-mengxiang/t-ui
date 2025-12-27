import { locales } from '@/_i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
