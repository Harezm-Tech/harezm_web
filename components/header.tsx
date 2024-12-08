'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HarezmLogo } from "./HarezmLogo";
import { Link } from '@/src/i18n/routing';
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t('navigation.services'), href: "/services" },
    { name: t('navigation.careers'), href: "/careers" },
    { name: t('navigation.contact'), href: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <Link href="/">
            <HarezmLogo />
          </Link>
        </motion.div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground/80",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
