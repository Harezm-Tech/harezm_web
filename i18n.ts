import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './config';

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Istanbul',
    now: new Date(),
  }
});

// Re-export for convenience
export {locales, defaultLocale};
