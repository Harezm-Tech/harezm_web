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
  Bot,
  Brain,
  Cloud,
  Shield,
  Code2,
  Smartphone,
  Check,
  ArrowRight
} from 'lucide-react';

const products = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Intelligent virtual assistance powered by advanced AI',
    features: [
      'Natural language processing',
      'Contextual understanding',
      'Multi-language support',
      'Custom training capabilities'
    ],
    href: '/products/ai-assistant'
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for your specific needs',
    features: [
      'Predictive analytics',
      'Pattern recognition',
      'Data classification',
      'Anomaly detection'
    ],
    href: '/products/ml'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Data transfer',
      'Post-migration support'
    ],
    href: '/services/cloud-migration'
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    description: 'Advanced security solutions for cloud',
    features: [
      'Threat detection',
      'Access management',
      'Compliance monitoring',
      'Security audits'
    ],
    href: '/services/cloud-security'
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications for your business',
    features: [
      'Responsive design',
      'Modern frameworks',
      'API integration',
      'Performance optimization'
    ],
    href: '/services/web-dev'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    features: [
      'iOS development',
      'Android development',
      'Cross-platform apps',
      'App store deployment'
    ],
    href: '/services/mobile-apps'
  }
];

export default function ProductsPage() {
  const t = useTranslations('Products');

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
          Our Products
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative solutions designed to transform your business
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full group">
                  <Link href={product.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6">
          We can help you build the perfect solution for your specific needs.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
