'use client';

import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { ModeToggle } from "./mode-toggle"
import { LanguageToggle } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full py-6 bg-background">
      <div className="container flex flex-col gap-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h4 className="font-medium">{t('company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">{t('about')}</Link>
              </li>
              <li>
                <Link href="/careers">{t('careers')}</Link>
              </li>
              <li>
                <Link href="/blog">{t('blog')}</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">{t('services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">{t('all_services')}</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">{t('support')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">{t('contact')}</Link>
              </li>
              <li>
                <Link href="/privacy">{t('privacy')}</Link>
              </li>
              <li>
                <Link href="/terms">{t('terms')}</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">{t('newsletter')}</h4>
            <form className="space-y-2">
              <Input type="email" placeholder={t('email_placeholder')} />
              <Button type="submit" className="w-full">
                {t('subscribe')}
              </Button>
            </form>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 items-center justify-between">
          <div className="flex gap-4">
            <Link href="https://linkedin.com/company/harezm" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:info@harezm.com">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ModeToggle />
            <span className="text-sm font-medium">Harezm {t('company_suffix')}</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground text-center">
          <p>{t('description')}</p>
          <p className="mt-2">&copy; 2024 Harezm {t('company_suffix')}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}
