"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Globe, Search, ChevronDown } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/navigation/search-command"
import { MobileNav } from "@/components/navigation/mobile-nav"

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const products = [
    {
      category: "AI Solutions",
      items: [
        {
          name: "AI Assistant",
          href: "/products/ai-assistant",
          description: "Intelligent virtual assistance for your business",
        },
        {
          name: "Machine Learning",
          href: "/products/ml",
          description: "Custom ML models and solutions",
        },
      ]
    },
    {
      category: "Cloud Services",
      items: [
        {
          name: "Cloud Migration",
          href: "/services/cloud-migration",
          description: "Seamless transition to cloud infrastructure",
        },
        {
          name: "Cloud Security",
          href: "/services/cloud-security",
          description: "Advanced security solutions for cloud",
        },
      ]
    },
    {
      category: "Development",
      items: [
        {
          name: "Web Development",
          href: "/services/web-dev",
          description: "Custom web applications",
        },
        {
          name: "Mobile Apps",
          href: "/services/mobile-apps",
          description: "iOS and Android development",
        },
      ]
    }
  ]

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ]

  const searchCategories = [
    {
      category: "Popular Searches",
      items: [
        {
          name: "AI Solutions",
          href: "/products/ai",
          shortcut: "1",
        },
        {
          name: "Cloud Services",
          href: "/services/cloud",
          shortcut: "2",
        },
        {
          name: "Mobile Development",
          href: "/services/mobile",
          shortcut: "3",
        },
      ],
    },
    {
      category: "Recent Searches",
      items: [
        {
          name: "Web Development",
          href: "/services/web",
          shortcut: "4",
        },
        {
          name: "Machine Learning",
          href: "/products/ml",
          shortcut: "5",
        },
      ],
    },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Harezm</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <div className="relative group">
                <Button variant="ghost" className="h-8 gap-1">
                  Products & Services
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
                <div className="absolute left-0 top-full w-[500px] p-4 grid grid-cols-2 gap-4 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {products.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <h3 className="font-medium text-sm text-muted-foreground">
                        {category.category}
                      </h3>
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium transition-colors hover:text-foreground/80"
              >
                Careers
              </Link>
            </nav>
          </div>

          <MobileNav products={products} languages={languages} />

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="outline"
                className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                onClick={() => setOpen(true)}
              >
                <span className="hidden lg:inline-flex">
                  Search documentation...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative group">
                <Button variant="ghost" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
                <div className="absolute right-0 top-full w-40 py-2 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="grid grid-cols-1 gap-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="w-full px-4 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="default">Contact Us</Button>
            </div>
          </div>
        </div>
      </header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchCategories.map((category) => (
            <CommandGroup key={category.category} heading={category.category}>
              {category.items.map((item) => (
                <CommandItem key={item.href}>
                  <Link href={item.href} className="flex-1">
                    {item.name}
                  </Link>
                  <kbd className="ml-auto text-xs text-muted-foreground">
                    {item.shortcut}
                  </kbd>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
