"use client"

import { AnimatedTitle, AnimatedDescription, AnimatedServiceCards } from "./components/animated-services"

export default function ServicesPage() {
  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <AnimatedTitle />
        <AnimatedDescription />
      </section>

      {/* Services Grid */}
      <section>
        <AnimatedServiceCards />
      </section>

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
