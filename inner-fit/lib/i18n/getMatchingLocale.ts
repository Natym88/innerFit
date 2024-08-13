import { Locale, i18nConfig } from '@/i18n';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

/**
 * Get best matching locale based on available client and app/server locales.
 * @param request
 * @returns
 */
export function getMatchingLocale(request: NextRequest): Locale {
  // Initialize user headers object.
  // let userHeaders: Record<string, string> = {};

  // // Fill user headers object with headers from the request.
  // request.headers.forEach(
  //   (headerValue, headerKey) => (userHeaders[headerKey] = headerValue)
  // );

  // // Get all availabl locales from the client.
  // const clientLocales = new Negotiator({ headers: userHeaders }).languages();

  // // Initialize app/server locales object.
  // let appLocales: Locale[] = [];

  // // Fill app/server locales with locales from the i18n config.
  // i18nConfig.locales.forEach((locale: Locale) => {
  //   appLocales.push(locale);
  // });

  // // Call match function from intl-localematcher and get best matching locale
  // // based on available client locales, app/server locales and app/server default locale.
  // const localeMatch: Locale = match(
  //   clientLocales,
  //   appLocales,
  //   i18nConfig.defaultLocale
  // ) as Locale;

  // // Return matched locale.
  // return localeMatch;
   // Obtener el encabezado Accept-Language del request.
   const acceptLanguage = request.headers.get('accept-language') || '';

   // Extraer los locales preferidos del cliente.
   const clientLocales = acceptLanguage
     .split(',')
     .map(lang => lang.split(';')[0].trim());
 
   // Iterar sobre los locales del cliente y encontrar la mejor coincidencia.
   const matchedLocale = clientLocales.find(locale =>
     i18nConfig.locales.includes(locale as Locale)
   );
 
   // Retornar el locale encontrado o el locale por defecto si no hay coincidencias.
   return matchedLocale as Locale || i18nConfig.defaultLocale;
 }

