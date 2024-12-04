import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

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
    <header className={`fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-200 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Harezm</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6">
            <div className="relative group">
              <Button variant="ghost" className="h-8 gap-1">
                Products & Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Button>
              <div className="absolute left-0 top-full w-[500px] p-4 grid grid-cols-2 gap-4 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {products.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <h3 className="font-medium text-sm text-muted-foreground">{category.category}</h3>
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/careers" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Careers
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4" />
              </Button>
              <div className="absolute right-0 top-full w-32 py-2 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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

            <Button variant="default">Contact Us</Button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute inset-x-0 top-full bg-background border-b p-4 animate-in fade-in slide-in-from-top-2">
            <div className="container flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden animate-in slide-in-from-top">
            <nav className="container py-4">
              <div className="space-y-4">
                {/* Search in Mobile */}
                <div className="relative flex items-center px-4">
                  <Search className="h-4 w-4 absolute left-6 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full bg-muted/50 border-none rounded-md py-2 pl-10 pr-4 text-sm"
                  />
                </div>

                {/* Products & Services */}
                {products.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="font-medium px-4 text-sm text-muted-foreground">
                      {category.category}
                    </div>
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                ))}

                <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                  Blog
                </Link>
                <Link href="/careers" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                  Careers
                </Link>

                {/* Language Selector in Mobile */}
                <div className="px-4 py-2">
                  <div className="text-sm text-muted-foreground mb-2">Language</div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="text-sm py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground text-left"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-2">
                  <Button variant="default" className="w-full">Contact Us</Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
