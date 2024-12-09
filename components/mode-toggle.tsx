"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    // Dispatch custom event for theme change
    window.dispatchEvent(new Event("themeChange"))
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-10 w-10 p-0 rounded-full"
      onClick={toggleTheme}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
