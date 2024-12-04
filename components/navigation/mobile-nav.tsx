"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

interface MobileNavProps {
  products: {
    category: string
    items: {
      name: string
      href: string
      description: string
    }[]
  }[]
  languages: {
    code: string
    name: string
  }[]
}

export function MobileNav({ products, languages }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {/* Search in Mobile */}
            <div className="relative flex items-center pl-4 pr-6 pb-4">
              <Search className="h-4 w-4 absolute left-6 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-muted/50 border-none rounded-md py-2 pl-10 pr-4 text-sm"
              />
            </div>

            {/* Products & Services */}
            {products.map((section) => (
              <div key={section.category} className="flex flex-col space-y-3">
                <div className="text-sm font-medium text-muted-foreground px-4">
                  {section.category}
                </div>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm pl-4 pr-6 py-2 hover:bg-accent rounded-l-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium mb-1">{item.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/blog"
                  className="text-sm pl-4 pr-6 py-2 hover:bg-accent rounded-l-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/careers"
                  className="text-sm pl-4 pr-6 py-2 hover:bg-accent rounded-l-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Language Selector */}
            <div className="border-t pt-4 mt-4">
              <div className="text-sm font-medium text-muted-foreground px-4 mb-2">
                Language
              </div>
              <div className="grid grid-cols-2 gap-2 px-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="text-sm py-2 px-3 rounded-md hover:bg-accent text-left transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="border-t pt-4 mt-4 px-4">
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
