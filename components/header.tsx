"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { create } from "zustand"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import {
  Home,
  Briefcase,
  FileCode,
  BookOpen,
  UserPlus,
  Mail,
  Menu,
  Globe,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface ScrollStore {
  isScrolled: boolean
  setIsScrolled: (value: boolean) => void
}

const useScrollStore = create<ScrollStore>((set) => ({
  isScrolled: false,
  setIsScrolled: (value) => set({ isScrolled: value }),
}))

const navigation = [
  { name: "Ana Sayfa", href: "/", icon: Home },
  { name: "Hizmetler ve Çözümler", href: "/services", icon: Briefcase },
  { name: "Ürünler", href: "/products", icon: FileCode },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Kariyer", href: "/careers", icon: UserPlus },
  { name: "İletişim", href: "/contact", icon: Mail },
]

export function Header() {
  const pathname = usePathname()
  const { isScrolled, setIsScrolled } = useScrollStore()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setIsScrolled])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b",
      "transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
        : "bg-transparent"
    )}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <motion.div 
              className="relative flex items-start"
              initial={false}
            >
              <motion.div
                className={cn(
                  "relative",
                  "after:absolute after:inset-0 after:bg-shimmer after:bg-[length:200%_100%]",
                  "after:animate-shimmer after:rounded-full"
                )}
                animate={{
                  width: isScrolled ? "40px" : "45px",
                  height: isScrolled ? "40px" : "45px",
                  opacity: isScrolled ? 0.95 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/logo/Group 1 (1).svg"
                  alt="Harezm Logo Symbol"
                  width={45}
                  height={45}
                  className={cn(
                    "transition-transform duration-500 group-hover:scale-105",
                    isScrolled ? "scale-95" : "scale-100"
                  )}
                  priority
                />
              </motion.div>
              
              <motion.div
                className="ml-4 mt-[22px]"
                animate={{
                  x: isScrolled ? -5 : 0,
                  y: isScrolled ? -2 : 0,
                  scale: isScrolled ? 0.95 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className={cn(
                  "relative",
                  "after:absolute after:inset-0 after:bg-shimmer after:bg-[length:200%_100%]",
                  "after:animate-shimmer"
                )}>
                  <Image
                    src="/logo/Layer_1.svg"
                    alt="Harezm Technology"
                    width={160}
                    height={35}
                    className="transition-transform group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              aria-label="Switch Language"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  size="icon"
                  aria-label="Open Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
