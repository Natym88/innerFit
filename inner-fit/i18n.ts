export type SupportedLocale = 'en' | 'es' | 'en-nz';

export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en-nz', 'en', 'es'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
