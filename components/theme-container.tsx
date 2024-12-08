"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface ThemeContainerProps {
  children: React.ReactNode
}

export function ThemeContainer({ children }: ThemeContainerProps) {
  const [transitioning, setTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" })
  const { theme } = useTheme()

  // Handle theme transition effect
  useEffect(() => {
    const handleThemeChange = () => {
      setTransitioning(true)
      setTimeout(() => setTransitioning(false), 500)
    }

    // Listen for theme changes
    window.addEventListener("themeChange", handleThemeChange)
    return () => window.removeEventListener("themeChange", handleThemeChange)
  }, [])

  // Track mouse position for radial effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: `${(e.clientX / window.innerWidth) * 100}%`,
        y: `${(e.clientY / window.innerHeight) * 100}%`,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
