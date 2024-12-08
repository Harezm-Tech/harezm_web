"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { ModeToggle } from "./mode-toggle"
import { LanguageToggle } from "./language-toggle"

export function Navbar() {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Harezm
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={pathname === "/" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              {t("navigation.home")}
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              {t("navigation.services")}
            </Link>
            <Link
              href="/blog"
              className={pathname === "/blog" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              {t("navigation.blog")}
            </Link>
            <Link
              href="/careers"
              className={pathname === "/careers" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              {t("navigation.careers")}
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-foreground" : "text-foreground/60 transition-colors hover:text-foreground"}
            >
              {t("navigation.contact")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            <LanguageToggle />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
