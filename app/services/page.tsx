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
import { HighlightedIcon } from "@/components/ui/highlighted-icon"
import { cn } from "@/lib/utils"

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
          <Card 
            key={service.title} 
            className={cn(
              "flex flex-col relative overflow-hidden",
              "transition-all duration-300 ease-in-out",
              "hover:shadow-lg hover:shadow-[hsl(var(--icon-highlight-1))]",
              "before:absolute before:inset-0 before:opacity-0 before:transition-opacity",
              "before:duration-300 hover:before:opacity-5",
              service.icon === Bank ? "before:bg-[hsl(var(--icon-highlight-1))]" :
              service.icon === CloudCog ? "before:bg-[hsl(var(--icon-highlight-2))]" :
              service.icon === ArrowUpCircle ? "before:bg-[hsl(var(--icon-highlight-3))]" :
              service.icon === Building2 ? "before:bg-[hsl(var(--icon-highlight-1))]" :
              service.icon === BarChart3 ? "before:bg-[hsl(var(--icon-highlight-2))]" :
              "before:bg-[hsl(var(--icon-highlight-3))]"
            )}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className={cn(
                  "p-3 rounded-xl transition-all duration-300",
                  "bg-opacity-15 group-hover:bg-opacity-25",
                  "backdrop-blur-[2px]",
                  service.icon === Bank ? "bg-[hsl(var(--icon-highlight-1))]" :
                  service.icon === CloudCog ? "bg-[hsl(var(--icon-highlight-2))]" :
                  service.icon === ArrowUpCircle ? "bg-[hsl(var(--icon-highlight-3))]" :
                  service.icon === Building2 ? "bg-[hsl(var(--icon-highlight-1))]" :
                  service.icon === BarChart3 ? "bg-[hsl(var(--icon-highlight-2))]" :
                  "bg-[hsl(var(--icon-highlight-3))]"
                )}>
                  <HighlightedIcon 
                    variant={
                      service.icon === Bank ? "1" :
                      service.icon === CloudCog ? "2" :
                      service.icon === ArrowUpCircle ? "3" :
                      service.icon === Building2 ? "1" :
                      service.icon === BarChart3 ? "2" :
                      "3"
                    }
                    glowEffect
                    className="transform transition-transform duration-300 hover:scale-110"
                  >
                    <service.icon className="h-7 w-7" />
                  </HighlightedIcon>
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-[hsl(var(--foreground))]">
                  {service.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <span className="block text-muted-foreground">
                  {service.description}
                </span>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="transition-colors duration-300 hover:text-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                asChild
                className={cn(
                  "w-full transition-all duration-300",
                  "transform hover:scale-[1.02]",
                  "shadow-sm hover:shadow-md",
                  service.icon === Bank ? 
                    "bg-[hsl(var(--icon-highlight-1))] hover:bg-[hsl(var(--icon-highlight-1))] hover:brightness-110" :
                  service.icon === CloudCog ? 
                    "bg-[hsl(var(--icon-highlight-2))] hover:bg-[hsl(var(--icon-highlight-2))] hover:brightness-110" :
                  service.icon === ArrowUpCircle ? 
                    "bg-[hsl(var(--icon-highlight-3))] hover:bg-[hsl(var(--icon-highlight-3))] hover:brightness-110" :
                  service.icon === Building2 ? 
                    "bg-[hsl(var(--icon-highlight-1))] hover:bg-[hsl(var(--icon-highlight-1))] hover:brightness-110" :
                  service.icon === BarChart3 ? 
                    "bg-[hsl(var(--icon-highlight-2))] hover:bg-[hsl(var(--icon-highlight-2))] hover:brightness-110" :
                    "bg-[hsl(var(--icon-highlight-3))] hover:bg-[hsl(var(--icon-highlight-3))] hover:brightness-110",
                  "text-background font-medium"
                )}
              >
                <Link href="/contact" className="w-full py-2">Learn More</Link>
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
        <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
