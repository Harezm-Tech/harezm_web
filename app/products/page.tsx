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
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "SAP FICO Localization Package",
    category: "Financial Solutions",
    description: "Complete localization package for SAP FICO module, tailored for Turkish accounting standards and regulations.",
    features: [
      "Turkish Chart of Accounts integration",
      "E-Invoice and E-Archive compliance",
      "Automated tax reporting",
      "Local regulatory reporting",
      "Multi-currency support"
    ],
  },
  {
    title: "SAP S/4HANA Migration Toolkit",
    category: "Migration Tools",
    description: "Comprehensive toolkit for seamless migration from legacy SAP systems to S/4HANA, minimizing business disruption.",
    features: [
      "Data migration tools",
      "Business process mapping",
      "Custom code adaptation",
      "Testing automation",
      "Go-live support"
    ],
  },
  {
    title: "SAP RE-FX Enhancement Pack",
    category: "Real Estate",
    description: "Enhanced functionality for SAP Real Estate Management, optimized for the Turkish market.",
    features: [
      "Local real estate regulations compliance",
      "Advanced contract management",
      "Automated billing and invoicing",
      "Property valuation tools",
      "Maintenance management"
    ],
  },
  {
    title: "SAP Asset Accounting Solution",
    category: "Financial Solutions",
    description: "Specialized solution for asset accounting in SAP, incorporating Turkish depreciation rules and reporting requirements.",
    features: [
      "Turkish depreciation methods",
      "Asset lifecycle management",
      "Revaluation processing",
      "Integration with FICO",
      "Regulatory reporting"
    ],
  }
];

export default function ProductsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Products
        </h1>
        <span className="block max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Discover our specialized solutions for 
          <PaintStroke variant="purple">SAP and Turkish market</PaintStroke>
        </span>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader>
              <div className="flex flex-col space-y-2">
                <CardTitle className="text-xl">
                  {product.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {product.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <span className="block text-muted-foreground">
                  {product.description}
                </span>
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/contact">Request Info</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <span className="block text-muted-foreground mb-4">
          Need a custom solution? 
          <PaintStroke variant="cyan">Contact us to discuss your needs</PaintStroke>
        </span>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
