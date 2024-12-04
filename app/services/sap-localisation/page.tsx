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
import { ArrowUpCircle, FileCheck, Calculator } from 'lucide-react'

const products = [
  {
    icon: Calculator,
    title: "Inflation Accounting Package",
    description: "Control the impact of inflation with our integrated SAP solution",
    details: "Prepare financial statements compliant with local regulations and ready your company for the future.",
    href: "/products/inflation-accounting",
    benefits: [
      "Compliance with Tax Procedure Law",
      "Integrated with SAP systems",
      "Automated calculations",
      "Future-ready solution",
    ],
  },
  {
    icon: FileCheck,
    title: "VAT Return Package",
    description: "Automated VAT return processing and compliance",
    details: "Streamline your VAT return process with our automated solution integrated with SAP.",
    href: "/products/vat-return",
    benefits: [
      "Automated VAT calculations",
      "Compliance with local regulations",
      "Integrated reporting",
      "Time-saving automation",
    ],
  },
]

export default function SAPLocalisationPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          SAP Localization Solutions
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Specialized solutions for local compliance and regulatory requirements
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <product.icon className="h-8 w-8" />
                <div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p>{product.details}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={product.href}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Need help with SAP localization? Contact our experts for a consultation.
        </p>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
