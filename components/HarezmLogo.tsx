"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface HarezmLogoProps {
  className?: string
}

export function HarezmLogo({ className }: HarezmLogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("relative h-8 w-[160px] mt-6 flex items-center gap-2", className)}>
        <Image
          src="/logo/zero.png"
          alt="Zero"
          width={28}
          height={28}
          className="object-contain"
          priority
        />
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
    <div className={cn("relative h-8 w-[160px] mt-6 flex items-center gap-2", className)}>
      <Image
        src={resolvedTheme === "dark" ? "/logo/zero_dark.png" : "/logo/zero.png"}
        alt="Zero"
        width={28}
        height={28}
        className="object-contain"
        priority
      />
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
