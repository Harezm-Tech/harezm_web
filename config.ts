export const locales = ['en', 'tr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

// Paths that don't require locale prefix
export const localePrefix = 'always'; // Type: 'as-needed' | 'always'

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/about': '/about',
} as const;

// Type-safe locale-specific pathnames
export type Pathnames = typeof pathnames;

// Locale-specific configurations
export const localeConfigs = {
  en: {
    label: 'English',
    direction: 'ltr',
  },
  tr: {
    label: 'Türkçe',
    direction: 'ltr',
  },
} as const;
