"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { HighlightedIcon } from "@/components/ui/highlighted-icon"

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    document.documentElement.style.transition = "background-color 0.5s ease-in-out"
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="relative w-9 h-9">
        <span className="h-5 w-5" />
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9"
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentTheme === "light" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <HighlightedIcon variant="2" glowEffect>
              <Sun className="h-5 w-5" />
            </HighlightedIcon>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <HighlightedIcon variant="4" glowEffect>
              <Moon className="h-5 w-5" />
            </HighlightedIcon>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
