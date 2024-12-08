import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale, localePrefix} from './config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection: true
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/api/((?!auth|trpc).*)'
  ]
};
