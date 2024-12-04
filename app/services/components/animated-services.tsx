"use client"

import { motion } from "framer-motion"
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

export function AnimatedTitle() {
  return (
    <motion.h1 
      className="text-4xl font-bold md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Our Services & Solutions
    </motion.h1>
  )
}

export function AnimatedDescription() {
  return (
    <motion.p
      className="text-xl text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      We offer a comprehensive suite of services to help your business thrive in the digital age.
    </motion.p>
  )
}

export function AnimatedServiceCards() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: Globe2,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: ArrowUpCircle,
    },
    {
      title: "Financial Software",
      description: "Secure and efficient financial software solutions.",
      icon: Bank,
    },
    {
      title: "Education Technology",
      description: "Digital learning platforms and educational software.",
      icon: BookOpen,
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable software solutions for large organizations.",
      icon: Building2,
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure and deployment solutions.",
      icon: CloudCog,
    },
    {
      title: "Data Analytics",
      description: "Business intelligence and data visualization tools.",
      icon: Calculator,
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services.",
      icon: BarChart3,
    },
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <motion.div key={index} variants={item}>
            <Card className="h-full">
              <CardHeader>
                <Icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
