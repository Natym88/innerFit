// import { NextRequest, NextResponse } from 'next/server';
// import { Locale, i18nConfig } from './i18n';
// import { getMatchingLocale } from './lib/i18n/getMatchingLocale';

// export default function middleware(request: NextRequest) {
//   // Internationalization.

//   // Loop through available locales in i18n config, set to true when
//   // iterated locale is not found in current request url.
//   const localeNotFound: boolean = i18nConfig.locales.every(
//     (locale: Locale) =>
//       !request.nextUrl.pathname.startsWith(`/${locale}/`) &&
//       request.nextUrl.pathname !== `/${locale}`
//   );

//   // Locale not found in request url, redirect to matched locale url.
//   if (localeNotFound) {
//     // Get matching locale for user.
//     const newLocale: Locale = getMatchingLocale(request);

//     // Preserve query parameters.
//     const url = new URL(request.url);
//     const pathname = `/${newLocale}${url.pathname}`;
//     const searchParams = url.search;

//     // Redirect with query parameters.
//     return NextResponse.redirect(new URL(`${pathname}${searchParams}`, request.url));
//   }
// }

// export const config = {
//   // Matcher ignoring /_next/ and /api/
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'de', 'es'],

  // Default locale if no match
  defaultLocale: 'en'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|es|en)/:page*']
};