import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChartIcon as ChartBar, BanknoteIcon as Bank, Lightbulb, Globe2, ArrowUpCircle, FileStack } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Harezm Technology
          </h1>
          <div className="space-y-4">
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Harezm Technology is a leading tech firm specializing in SAP integration, localization, and custom software solutions.
            </p>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Our mission is to provide high-quality, reliable, and innovative solutions to help our clients digitize their businesses.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/services">Our Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Services & Solutions
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Comprehensive SAP solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Globe2 className="h-10 w-10" />
              <CardTitle>SAP Consultancy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Expert consultancy for SAP Public Cloud, Private Cloud, FICO, AA (Asset Accounting), and RE-FX solutions.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/sap-consultancy">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <ArrowUpCircle className="h-10 w-10" />
              <CardTitle>SAP Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Specialized solutions including Inflation Accounting, VAT Return, and IFRS compliance packages.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/sap-localisation">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Bank className="h-10 w-10" />
              <CardTitle>Bank Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Complete banking solutions including Direct Debit System, e-Payment, and e-Account Statement integration.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/services/bank-integrations">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why Choose Us
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Leading the way in SAP solutions and digital transformation
          </p>
        </div>
        <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-2">
          <Card>
            <CardHeader>
              <FileStack className="h-10 w-10" />
              <CardTitle>Comprehensive Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From SAP implementation to custom integrations, we provide end-to-end solutions for your business needs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-10 w-10" />
              <CardTitle>Innovation Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We stay ahead of technological trends to deliver cutting-edge solutions that drive your business forward.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
