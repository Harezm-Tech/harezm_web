"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Link } from '@/src/i18n/routing'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChartIcon as ChartBar, BanknoteIcon as Bank, Lightbulb, Globe2, ArrowUpCircle, FileStack } from 'lucide-react'
import PaintStroke from "@/components/PaintStroke"

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            {t('home.title')}
          </h1>
          <div className="space-y-4">
            <span className="block max-w-[42rem] leading-normal text-foreground/80 sm:text-xl sm:leading-8">
              {t('home.description')}
            </span>
            <span className="block max-w-[42rem] leading-normal text-foreground/80 sm:text-xl sm:leading-8">
              {t('home.mission')}
            </span>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/services">{t('navigation.services')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">{t('navigation.contact')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-foreground">
            {t('navigation.services')}
          </h2>
          <span className="block max-w-[85%] leading-normal text-foreground/80 sm:text-lg sm:leading-7">
            {t('services.description')}
          </span>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Globe2 className="h-10 w-10" />
              <CardTitle>
                <PaintStroke variant="cyan" className="text-xl">
                  {t('services.sap_consultancy.title')}
                </PaintStroke>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="block">
                {t('services.sap_consultancy.description')}
              </span>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/sap-consultancy">{t('common.learn_more')}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <ArrowUpCircle className="h-10 w-10" />
              <CardTitle>
                <PaintStroke variant="yellow" className="text-xl">
                  {t('services.sap_localization.title')}
                </PaintStroke>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="block">
                {t('services.sap_localization.description')}
              </span>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/sap-localisation">{t('common.learn_more')}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Bank className="h-10 w-10" />
              <CardTitle>
                <PaintStroke variant="purple" className="text-xl">
                  {t('services.bank_integration.title')}
                </PaintStroke>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="block">
                {t('services.bank_integration.description')}
              </span>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/bank-integrations">{t('common.learn_more')}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-foreground">
            {t('why_choose_us.title')}
          </h2>
          <span className="block max-w-[85%] leading-normal text-foreground/80 sm:text-lg sm:leading-7">
            {t('why_choose_us.description')}
          </span>
        </div>
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-2">
          <Card>
            <CardHeader>
              <FileStack className="h-10 w-10" />
              <CardTitle>
                <PaintStroke variant="cyan" className="text-xl">
                  {t('why_choose_us.comprehensive_solutions.title')}
                </PaintStroke>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="block">
                {t('why_choose_us.comprehensive_solutions.description')}
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-10 w-10" />
              <CardTitle>
                <PaintStroke variant="yellow" className="text-xl">
                  {t('why_choose_us.innovation_focus.title')}
                </PaintStroke>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="block">
                {t('why_choose_us.innovation_focus.description')}
              </span>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
