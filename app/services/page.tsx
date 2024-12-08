'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import PaintStroke from "@/components/PaintStroke"
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

const services = [
  {
    title: "SAP FICO Implementation",
    description: "End-to-end implementation of SAP Financial Accounting and Controlling modules with Turkish localization.",
    icon: Bank,
    features: [
      "System setup and configuration",
      "Turkish accounting standards integration",
      "User training and documentation",
      "Post-implementation support"
    ]
  },
  {
    title: "SAP Integration Services",
    description: "Seamless integration of SAP with third-party systems and local regulatory requirements.",
    icon: CloudCog,
    features: [
      "E-Invoice integration",
      "Banking interface setup",
      "API development",
      "Custom integration solutions"
    ]
  },
  {
    title: "SAP Migration & Upgrade",
    description: "Expert assistance in SAP system migrations and version upgrades.",
    icon: ArrowUpCircle,
    features: [
      "S/4HANA migration",
      "System landscape optimization",
      "Data migration",
      "Performance tuning"
    ]
  },
  {
    title: "SAP Real Estate",
    description: "Specialized solutions for real estate management in SAP.",
    icon: Building2,
    features: [
      "RE-FX implementation",
      "Contract management",
      "Property accounting",
      "Regulatory compliance"
    ]
  },
  {
    title: "SAP Analytics",
    description: "Advanced analytics and reporting solutions for better business insights.",
    icon: BarChart3,
    features: [
      "Custom report development",
      "Dashboard creation",
      "Data visualization",
      "Performance analytics"
    ]
  },
  {
    title: "SAP Support Services",
    description: "Comprehensive support for your SAP landscape.",
    icon: Globe2,
    features: [
      "24/7 system monitoring",
      "Issue resolution",
      "Performance optimization",
      "Regular maintenance"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Services
        </h1>
        <span className="block max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Expert solutions in 
          <PaintStroke variant="purple">SAP implementation and consulting</PaintStroke>
        </span>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  service.icon === Bank ? 'bg-mint/40' :
                  service.icon === CloudCog ? 'bg-gold/40' :
                  service.icon === ArrowUpCircle ? 'bg-lavender/40' :
                  service.icon === Building2 ? 'bg-mint/40' :
                  service.icon === BarChart3 ? 'bg-gold/40' :
                  'bg-lavender/40'
                }`}>
                  <service.icon className={`h-6 w-6 ${
                    service.icon === Bank ? 'text-mint' :
                    service.icon === CloudCog ? 'text-gold' :
                    service.icon === ArrowUpCircle ? 'text-lavender' :
                    service.icon === Building2 ? 'text-mint' :
                    service.icon === BarChart3 ? 'text-gold' :
                    'text-lavender'
                  }`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <span className="block text-muted-foreground">
                  {service.description}
                </span>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                asChild
                className={`w-full ${
                  service.icon === Bank ? 'bg-mint hover:bg-mint/90 text-primary-foreground' :
                  service.icon === CloudCog ? 'bg-gold hover:bg-gold/90 text-primary-foreground' :
                  service.icon === ArrowUpCircle ? 'bg-lavender hover:bg-lavender/90 text-primary-foreground' :
                  service.icon === Building2 ? 'bg-mint hover:bg-mint/90 text-primary-foreground' :
                  service.icon === BarChart3 ? 'bg-gold hover:bg-gold/90 text-primary-foreground' :
                  'bg-lavender hover:bg-lavender/90 text-primary-foreground'
                }`}
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <span className="block text-muted-foreground mb-4">
          Looking for a specific solution? 
          <PaintStroke variant="cyan">Let's discuss your requirements</PaintStroke>
        </span>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
