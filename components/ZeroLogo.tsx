"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ZeroLogoProps {
  className?: string
}

export function ZeroLogo({ className }: ZeroLogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("relative w-8 h-8", className)}>
        <Image
          src="/logo/zero.png"
          alt="Zero"
          width={32}
          height={32}
          priority
        />
      </div>
    )
  }
  
  return (
    <div className={cn("relative w-8 h-8", className)}>
      <Image
        src={resolvedTheme === "dark" ? "/logo/zero_dark.png" : "/logo/zero.png"}
        alt="Zero"
        width={32}
        height={32}
        priority
      />
    </div>
  )
}
