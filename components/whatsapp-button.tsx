'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const phoneNumber = '+905332388975';
  const message = encodeURIComponent('Hello! I would like to learn more about Harezm.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center",
          "w-14 h-14 rounded-full",
          "bg-[#25D366] hover:bg-[#20BD5B]",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300",
          "group"
        )}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className={cn(
          "w-7 h-7 text-white",
          "transform transition-transform duration-300",
          "group-hover:scale-110"
        )} />
      </a>
    </motion.div>
  );
}
