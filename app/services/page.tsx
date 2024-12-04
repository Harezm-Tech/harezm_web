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
    </div>
  )
}
