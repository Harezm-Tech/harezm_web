"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface SimpleHarezmLogoProps {
  className?: string
}

export function SimpleHarezmLogo({ className }: SimpleHarezmLogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("relative h-8 w-[160px]", className)}>
        <Image
          src="/logo/harezm.png"
          alt="Harezm"
          width={160}
          height={28}
          className="object-contain"
          priority
        />
      </div>
    )
  }
  
  return (
    <div className={cn("relative h-8 w-[160px]", className)}>
      <Image
        src={resolvedTheme === "dark" ? "/logo/harezm_dark.png" : "/logo/harezm.png"}
        alt="Harezm"
        width={160}
        height={28}
        className="object-contain"
        priority
      />
    </div>
  )
}
