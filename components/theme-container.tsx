"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface ThemeContainerProps {
  children: React.ReactNode
}

export function ThemeContainer({ children }: ThemeContainerProps) {
  const [mounted, setMounted] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" })
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme transition effect
  useEffect(() => {
    if (!mounted) return;

    const handleThemeChange = () => {
      setTransitioning(true)
      setTimeout(() => setTransitioning(false), 500)
    }

    // Listen for theme changes
    window.addEventListener("themeChange", handleThemeChange)
    return () => window.removeEventListener("themeChange", handleThemeChange)
  }, [mounted])

  // Track mouse position for radial effect
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: `${(e.clientX / window.innerWidth) * 100}%`,
        y: `${(e.clientY / window.innerHeight) * 100}%`,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  if (!mounted) {
    return <div className="contents">{children}</div>
  }

  return (
    <div
      className="min-h-screen bg-background font-sans antialiased theme-transition"
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      } as React.CSSProperties}
      data-transitioning={transitioning}
    >
      <div className={`relative flex min-h-screen flex-col ${transitioning ? "transitioning" : ""}`}>
        {children}
      </div>
    </div>
  )
}
