export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const EN = 'en';
export const ZH = 'zh';
