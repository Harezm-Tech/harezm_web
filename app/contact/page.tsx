"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="max-w-5xl mx-auto">
        {/* Contact Info Section */}
        <motion.div 
          className="grid gap-8 md:grid-cols-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <Mail className="w-8 h-8 mb-2" />
              <CardTitle className="text-lg">Email Us</CardTitle>
              <CardDescription className="text-primary-foreground/60">
                info@harezm.com
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <Phone className="w-8 h-8 mb-2" />
              <CardTitle className="text-lg">Call Us</CardTitle>
              <CardDescription className="text-primary-foreground/60">
                +90 (xxx) xxx-xxxx
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <MapPin className="w-8 h-8 mb-2" />
              <CardTitle className="text-lg">Visit Us</CardTitle>
              <CardDescription className="text-primary-foreground/60">
                Istanbul, Turkey
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[150px]"
                      id="message"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
