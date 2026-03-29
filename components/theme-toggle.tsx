"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm hover:bg-muted/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-5 transition-all text-foreground" />
      ) : (
        <Moon className="size-5 transition-all text-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
