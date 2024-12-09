"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HighlightedIcon } from "@/components/ui/highlighted-icon"

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
          "h-6 rounded-full px-2 text-xs font-medium transition-colors",
          currentLocale === "en"
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "text-foreground hover:text-[hsl(var(--icon-highlight-1))]"
        )}
      >
        <HighlightedIcon variant="1" className={currentLocale === "en" ? "" : "px-0.5"}>
          EN
        </HighlightedIcon>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => currentLocale !== "tr" && toggleLanguage()}
        className={cn(
          "h-6 rounded-full px-2 text-xs font-medium transition-colors",
          currentLocale === "tr"
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "text-foreground hover:text-[hsl(var(--icon-highlight-2))]"
        )}
      >
        <HighlightedIcon variant="2" className={currentLocale === "tr" ? "" : "px-0.5"}>
          TR
        </HighlightedIcon>
      </Button>
    </div>
  )
}
