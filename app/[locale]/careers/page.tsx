'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/src/i18n/routing';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Briefcase,
  Code2,
  Database,
  Cloud,
  LineChart,
  Users2,
  Heart,
  Laptop,
  GraduationCap,
  Coffee,
  Zap
} from 'lucide-react';

const perks = [
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family'
  },
  {
    icon: Coffee,
    title: 'Free Snacks & Drinks',
    description: 'Enjoy complimentary refreshments throughout the day'
  },
  {
    icon: Laptop,
    title: 'Remote Work Options',
    description: 'Flexible work arrangements to suit your lifestyle'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional growth'
  },
  {
    icon: Users2,
    title: 'Team Activities',
    description: 'Regular team building and social events'
  },
  {
    icon: Zap,
    title: 'Performance Bonus',
    description: 'Competitive bonus structure based on performance'
  }
];

const positions = [
  {
    title: 'SAP ABAP Developer',
    location: 'Istanbul, Turkey',
    type: 'Full-time',
    requirements: [
      'Bachelor\'s degree in Computer Science, Engineering, or related field',
      'Minimum 3+ years of experience in SAP ABAP development',
      'Strong knowledge of ABAP programming and SAP modules',
      'Experience with SAP S/4HANA',
      'Good understanding of business processes',
      'Strong analytical and problem-solving skills',
      'Excellent communication skills in English'
    ],
    responsibilities: [
      'Develop and maintain ABAP programs',
      'Create technical specifications',
      'Debug and resolve issues',
      'Collaborate with functional consultants',
      'Provide technical support',
      'Document development work'
    ]
  },
  {
    title: 'SAP Consultant',
    location: 'Istanbul, Turkey',
    type: 'Full-time',
    requirements: [
      'Bachelor\'s degree in relevant field',
      'Minimum 5+ years of SAP consulting experience',
      'Strong knowledge of SAP modules (FI/CO, MM, SD)',
      'Experience with SAP implementation projects',
      'Understanding of business processes',
      'Strong communication and presentation skills',
      'Fluent in English'
    ],
    responsibilities: [
      'Lead SAP implementation projects',
      'Provide business process consulting',
      'Configure SAP modules',
      'Train end users',
      'Provide post-implementation support',
      'Document solutions and processes'
    ]
  },
  {
    title: 'Software Engineer',
    location: 'Istanbul, Turkey / Remote',
    type: 'Full-time',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'Strong knowledge of modern web technologies',
      'Experience with React, Node.js, and TypeScript',
      'Understanding of cloud services (AWS/Azure)',
      'Good problem-solving skills',
      'Team player with excellent communication skills',
      'Good command of English'
    ],
    responsibilities: [
      'Develop web applications',
      'Write clean, maintainable code',
      'Collaborate with team members',
      'Participate in code reviews',
      'Troubleshoot and debug issues',
      'Stay updated with latest technologies'
    ]
  }
];

export default function CareersPage() {
  const t = useTranslations('Careers');

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <motion.h1 
          className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Team
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be part of a team that\'s shaping the future of technology
        </motion.p>
      </div>

      {/* Why Join Us Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Harezm?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <perk.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {position.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {position.responsibilities.map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Apply', description: 'Submit your application with your CV' },
            { step: '02', title: 'Review', description: 'We review your application and experience' },
            { step: '03', title: 'Interview', description: 'Technical and cultural fit interviews' },
            { step: '04', title: 'Offer', description: 'Receive and accept your offer to join us' }
          ].map((step, index) => (
            <Card key={step.step} className="relative">
              <CardHeader>
                <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.step}
                </span>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="text-muted-foreground mb-6">
          Take the first step towards an exciting career at Harezm.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
}
