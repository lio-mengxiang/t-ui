import { locales } from './routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
