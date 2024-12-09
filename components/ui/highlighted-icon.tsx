import * as React from "react"
import { cn } from "@/lib/utils"

export interface HighlightedIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "1" | "2" | "3" | "4"
  glowEffect?: boolean
}

const HighlightedIcon = React.forwardRef<HTMLDivElement, HighlightedIconProps>(
  ({ className, children, variant = "1", glowEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center transition-colors",
          {
            "hover:text-[hsl(var(--icon-highlight-1))]": variant === "1",
            "hover:text-[hsl(var(--icon-highlight-2))]": variant === "2",
            "hover:text-[hsl(var(--icon-highlight-3))]": variant === "3",
            "hover:text-[hsl(var(--icon-highlight-4))]": variant === "4",
            "after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-[hsl(var(--icon-glow))] after:blur-md after:transition-opacity after:opacity-0 hover:after:opacity-20":
              glowEffect,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
HighlightedIcon.displayName = "HighlightedIcon"

export { HighlightedIcon }
