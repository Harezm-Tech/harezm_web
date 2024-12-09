"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname?.startsWith("/tr") ? "tr" : "en"

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "tr" : "en"
    const newPathname = pathname?.replace(/^\/(en|tr)/, `/${newLocale}`) ?? `/${newLocale}`
    router.push(newPathname)
  }

  return (
    <div className="flex items-center gap-1 rounded-full border p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => currentLocale !== "en" && toggleLanguage()}
        className={cn(
          "h-6 rounded-full px-2 text-xs font-medium",
          currentLocale === "en"
            ? "bg-foreground text-background"
            : "text-foreground hover:bg-muted"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => currentLocale !== "tr" && toggleLanguage()}
        className={cn(
          "h-6 rounded-full px-2 text-xs font-medium",
          currentLocale === "tr"
            ? "bg-foreground text-background"
            : "text-foreground hover:bg-muted"
        )}
      >
        TR
      </Button>
    </div>
  )
}
