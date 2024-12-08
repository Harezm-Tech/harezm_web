'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { Clock } from 'lucide-react';

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Clock className="mx-auto h-16 w-16 text-primary animate-pulse" />
        <h1 className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl font-bold">
          {t('comingSoon')}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[42rem] leading-normal">
          {t('comingSoonDescription')}
        </p>
      </motion.div>
    </div>
  );
}