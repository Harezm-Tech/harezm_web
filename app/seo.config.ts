import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Harezm Technology',
  title: 'Harezm - Modern Web Development Solutions',
  description: 'Cutting-edge technology company specializing in modern web development solutions.',
  images: [
    {
      url: 'https://harezm.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Harezm Technology',
    },
  ],
  locale: 'en_US',
}

const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: 'Harezm - Modern Web Development Solutions',
  description: 'Cutting-edge technology company specializing in modern web development solutions.',
  creator: '@HarezmTech',
  images: ['https://harezm.com/twitter-image.jpg'],
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://harezm.com'),
  title: {
    default: 'Harezm - Modern Web Development Solutions',
    template: '%s | Harezm Technology',
  },
  description: 'Cutting-edge technology company specializing in modern web development solutions.',
  keywords: [
    'web development',
    'next.js',
    'react',
    'typescript',
    'tailwind css',
    'modern web',
    'technology solutions',
    'software development',
    'digital solutions',
    'web applications',
  ],
  authors: [{ name: 'Harezm Technology Team' }],
  creator: 'Harezm Technology',
  publisher: 'Harezm Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://harezm.com',
    languages: {
      'en-US': 'https://harezm.com/en',
      'tr-TR': 'https://harezm.com/tr',
    },
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  other: {
    'google-site-verification': 'your-google-site-verification',
  },
}
