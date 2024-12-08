'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
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
  Boxes,
  Building2,
  Laptop,
  Users2,
} from 'lucide-react';

const services = [
  {
    icon: Boxes,
    key: 'sap',
    features: ['core', 'cloud', 'financial', 'consulting']
  },
  {
    icon: Building2,
    key: 'digital',
    features: ['web', 'mobile', 'ecommerce', 'integration']
  },
  {
    icon: Users2,
    key: 'consulting',
    features: ['process', 'technical', 'training']
  }
];

export default function ServicesPage() {
  const t = useTranslations('Services');

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
          {t('title')}
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('description')}
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t(`${service.key}.title`)}</CardTitle>
                <CardDescription>{t(`${service.key}.description`)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground">
                      • {t(`${service.key}.features.${feature}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">{t('learn_more')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-xl text-muted-foreground mb-8">{t('cta.description')}</p>
        <Button asChild size="lg">
          <Link href="/contact">{t('cta.button')}</Link>
        </Button>
      </motion.div>
    </div>
  );
}
