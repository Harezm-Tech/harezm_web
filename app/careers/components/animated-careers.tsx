"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobListings = [
  {
    title: "SAP FICO Consultant",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "We are looking for an experienced SAP FICO consultant to join our team. The ideal candidate will have strong experience in SAP Financial Accounting and Controlling modules.",
    requirements: [
      "5+ years of SAP FICO experience",
      "Strong understanding of financial processes",
      "Excellent communication skills",
      "Turkish and English fluency"
    ]
  },
  {
    title: "SAP Technical Consultant",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "Join our technical team to help implement and maintain SAP solutions. You&apos;ll work on challenging projects and help our clients succeed.",
    requirements: [
      "3+ years of SAP technical experience",
      "ABAP development skills",
      "Integration experience",
      "Problem-solving abilities"
    ]
  },
  {
    title: "Business Analyst",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "We&apos;re seeking a business analyst to bridge the gap between business needs and technical solutions. You&apos;ll work closely with clients and our development team.",
    requirements: [
      "3+ years of business analysis experience",
      "SAP knowledge preferred",
      "Strong analytical skills",
      "Excellent documentation abilities"
    ]
  }
]

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

export function AnimatedJobListings() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6"
    >
      {jobListings.map((job, index) => (
        <motion.div key={index} variants={item}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.location}</CardDescription>
                </div>
                <Badge>{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
