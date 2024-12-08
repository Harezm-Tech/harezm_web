"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Logo({ className = "", showText = true }) {
  const { theme } = useTheme()
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative w-8 h-8">
        <Image
          src={theme === "dark" ? "/logo/zero-dark.svg" : "/logo/zero.svg"}
          alt="Zero"
          width={32}
          height={32}
          priority
        />
      </div>
      {showText && (
        <div className="relative h-8 w-[120px]">
          <Image
            src={theme === "dark" ? "/logo/harezm-dark.svg" : "/logo/harezm.svg"}
            alt="Harezm"
            width={120}
            height={32}
            priority
          />
        </div>
      )}
    </div>
  )
}
