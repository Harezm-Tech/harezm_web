"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  Globe2, 
  ArrowUpCircle, 
  BanknoteIcon as Bank,
  BookOpen,
  Building2,
  CloudCog,
  Calculator,
  BarChart3,
} from 'lucide-react'
import { motion } from "@/components/motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ServicesPage() {
  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services & Solutions
        </motion.h1>
        <motion.p 
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive SAP solutions tailored to your business needs, delivering innovation and efficiency at every step.
        </motion.p>
      </section>

      {/* Main Services */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div variants={item}>
          <Card className="h-full">
            <CardHeader>
              <Globe2 className="h-12 w-12 mb-2" />
              <CardTitle>SAP Consultancy</CardTitle>
              <CardDescription>Expert guidance for your SAP journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <CloudCog className="h-5 w-5 text-muted-foreground" />
                <p>SAP Public & Private Cloud</p>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-muted-foreground" />
                <p>SAP FICO Implementation</p>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <p>Asset Accounting (AA)</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full">
            <CardHeader>
              <ArrowUpCircle className="h-12 w-12 mb-2" />
              <CardTitle>SAP Localization</CardTitle>
              <CardDescription>Tailored solutions for local compliance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
                <p>Inflation Accounting</p>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-muted-foreground" />
                <p>VAT Return Solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <p>IFRS Compliance</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full">
            <CardHeader>
              <Bank className="h-12 w-12 mb-2" />
              <CardTitle>Bank Integrations</CardTitle>
              <CardDescription>Seamless banking connectivity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowUpCircle className="h-5 w-5 text-muted-foreground" />
                <p>Direct Debit System (DBS)</p>
              </div>
              <div className="flex items-center gap-2">
                <Bank className="h-5 w-5 text-muted-foreground" />
                <p>e-Payment Integration</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <p>e-Account Statement</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Case Studies Preview */}
      <section className="bg-muted/50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <p className="text-muted-foreground">
            See how we&apos;ve helped businesses transform their operations with our SAP solutions
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Add case study cards here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground">
            Contact us today to discuss how our SAP solutions can help your business grow and succeed.
          </p>
          <Button size="lg" className="mt-4">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}
