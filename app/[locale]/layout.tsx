import { ReactNode } from "react"
import { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeContainer } from '@/components/theme-container'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from 'next/navigation'
import { isValidLocale } from '@/src/i18n/config'
import { Inter } from 'next/font/google'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Harezm Technology",
  description: "SAP integration, localization, and custom software solutions",
  icons: {
    icon: [
      {
        url: "/logo/zero.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo/zero-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logo/zero.png",
    shortcut: "/logo/zero.svg",
  },
}

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
}

function isValidLocale(locale: string): locale is 'en' | 'tr' {
  return locales.includes(locale as any)
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const locale = params.locale
  
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(locale)) notFound()

  // Enable static rendering
  unstable_setRequestLocale(locale)

  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeContainer>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeContainer>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}
