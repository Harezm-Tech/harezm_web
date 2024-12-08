"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "@/components/motion"
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

const jobListings = [
  {
    title: "SAP FICO Consultant",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "We are looking for an experienced SAP FICO consultant to join our team. The ideal candidate will have strong experience in SAP Financial Accounting and Controlling modules.",
    requirements: [
      "5+ years of SAP FICO experience",
      "Experience with SAP S/4HANA",
      "Strong understanding of financial processes",
      "Excellent communication skills",
    ],
  },
  {
    title: "SAP Technical Consultant",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "Join our team as a SAP Technical Consultant to help design and implement SAP solutions for our clients.",
    requirements: [
      "3+ years of SAP technical development experience",
      "ABAP programming expertise",
      "Experience with SAP Fiori",
      "Knowledge of SAP integration technologies",
    ],
  },
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Istanbul, Turkey",
    description: "We're seeking a talented Software Developer to join our R&D team and work on innovative solutions.",
    requirements: [
      "Strong programming skills in modern languages",
      "Experience with web technologies",
      "Knowledge of software development best practices",
      "Problem-solving mindset",
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Join Our Team
        </h1>
        <span className="block max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Be part of a team that's shaping the future of 
          <PaintStroke variant="purple" className="mx-2">SAP solutions</PaintStroke> and 
          <PaintStroke variant="cyan" className="mx-2">digital transformation</PaintStroke>
        </span>
      </div>

      <div className="mt-16 grid gap-6">
        {jobListings.map((job) => (
          <Card key={job.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    <PaintStroke variant="yellow">{job.title}</PaintStroke>
                  </CardTitle>
                  <CardDescription className="mt-2">{job.location}</CardDescription>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <span className="block">{job.description}</span>
                <div>
                  <h4 className="font-medium mb-2">
                    <PaintStroke variant="purple">Requirements:</PaintStroke>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/careers/apply">Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <span className="block text-muted-foreground mb-4">
          Don't see a position that matches your skills? 
          <PaintStroke variant="cyan" className="mx-2">Send us your CV anyway!</PaintStroke>
        </span>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
