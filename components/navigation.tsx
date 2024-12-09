'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { HighlightedIcon } from "@/components/ui/highlighted-icon"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const products = [
    {
      category: "AI Solutions",
      items: [
        { name: "AI Assistant", href: "/products/ai-assistant", description: "Intelligent virtual assistance for your business" },
        { name: "Machine Learning", href: "/products/ml", description: "Custom ML models and solutions" },
      ]
    },
    {
      category: "Cloud Services",
      items: [
        { name: "Cloud Migration", href: "/services/cloud-migration", description: "Seamless transition to cloud infrastructure" },
        { name: "Cloud Security", href: "/services/cloud-security", description: "Advanced security solutions for cloud" },
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Web Development", href: "/services/web-dev", description: "Custom web applications" },
        { name: "Mobile Apps", href: "/services/mobile-apps", description: "iOS and Android development" },
      ]
    }
  ]

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ru', name: 'Русский' }
  ]

  return (
    <nav className={cn(`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md' : 'bg-transparent'}`)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                {mounted && theme === 'dark' && (
                  <div className="absolute -inset-1">
                    <div className="absolute inset-0 bg-[#00ffd5] opacity-20 blur-md rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/30 to-transparent"></div>
                  </div>
                )}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  {mounted ? (
                    <Image
                      src={theme === 'dark' ? "/logo/harezm_icon_white.svg" : "/logo/Layer_1 (2).png"}
                      alt="Harezm Tech Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 relative"
                      priority
                    />
                  ) : (
                    // Fallback for pre-mount
                    <Image
                      src="/logo/Layer_1 (2).png"
                      alt="Harezm Tech Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 relative"
                      priority
                    />
                  )}
                </div>
              </div>
              <div className="relative">
                {mounted && theme === 'dark' && (
                  <div className="absolute -inset-1">
                    <div className="absolute inset-0 bg-[#00ffd5] opacity-20 blur-md rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/30 to-transparent"></div>
                  </div>
                )}
                <span className="text-foreground font-bold text-xl relative">Harezm</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {products.map((category) => (
              <div key={category.category} className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1">
                  <div className="absolute inset-0 bg-[#00ffd5] opacity-20 blur-md rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/30 to-transparent"></div>
                  <span>{category.category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown content */}
                <div className="absolute left-0 mt-2 w-screen max-w-md hidden group-hover:block">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-zinc-900/90 backdrop-blur-md">
                    <div className="relative grid gap-6 p-6">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-zinc-800/50 transition ease-in-out duration-150"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-white">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Language Selector */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Language</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 hidden group-hover:block">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-zinc-900/90 backdrop-blur-md">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-800/50 hover:text-white"
                      >
                        {lang.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="relative"
                aria-label="Search"
              >
                <HighlightedIcon variant="1" glowEffect>
                  <Search className="h-5 w-5" />
                </HighlightedIcon>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Language"
              >
                <HighlightedIcon variant="2" glowEffect>
                  <Globe className="h-5 w-5" />
                </HighlightedIcon>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="md:hidden"
                aria-label="Menu"
              >
                <HighlightedIcon variant="3" glowEffect>
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </HighlightedIcon>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {products.map((category) => (
              <div key={category.category}>
                <div className="absolute inset-0 bg-[#00ffd5] opacity-20 blur-md rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd5]/30 to-transparent"></div>
                <span className="block px-3 py-2 text-base font-medium">{category.category}</span>
                <div className="pl-4">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-800/50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
