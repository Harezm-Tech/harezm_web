'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Link } from '@/src/i18n/routing';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users2, Trophy, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Users2,
    title: 'Customer Focus',
    description: 'We put our customers first, understanding their needs and delivering solutions that exceed expectations.'
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to customer service.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We embrace new technologies and methodologies to stay ahead in the ever-evolving tech landscape.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'We approach challenges with creativity and determination, finding effective solutions for complex problems.'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '3', label: 'Global Offices' }
];

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="mx-auto max-w-[58rem] text-center mb-20">
        <motion.h1 
          className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Harezm
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Leading the way in technological innovation and digital transformation
        </motion.p>
      </div>

      {/* Mission Statement */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At Harezm, we are dedicated to empowering businesses through innovative technology solutions. 
            Our mission is to bridge the gap between complex technological challenges and elegant, 
            efficient solutions that drive business growth.
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px]"
        >
          <Image
            src="/images/about-mission.jpg"
            alt="Harezm Mission"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Company Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-muted py-16 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
