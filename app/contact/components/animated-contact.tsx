"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

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

export function AnimatedContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "info@harezm.com",
      link: "mailto:info@harezm.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+90 (216) 504 74 94",
      link: "tel:+902165047494"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Sahrayıcedit Mah. Atatürk Cad. No: 21/5 Kadıköy İstanbul",
      link: "https://maps.google.com"
    }
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-3"
    >
      {contactInfo.map((info, index) => {
        const Icon = info.icon
        return (
          <motion.a
            key={index}
            href={info.link}
            variants={item}
            className="block"
          >
            <Card className="h-full hover:bg-muted/50 transition-colors">
              <CardHeader className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>{info.title}</CardTitle>
                <CardDescription>{info.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export function AnimatedContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="john@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter your message here."
            />
          </div>
          <Button className="w-full">Send message</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
