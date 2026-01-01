"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-transparent data-[scroll=true]:border-border"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-background border border-border px-8 py-3 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium hover:text-muted-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pl-6 border-l border-border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full h-8 w-8 hover:bg-muted"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 text-[10px] uppercase tracking-widest font-bold h-8"
            >
              Hire
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex w-full items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background absolute top-full left-0 w-full p-8 border-b border-border flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-heading font-light tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-4 bg-foreground text-background uppercase tracking-widest text-xs h-12 font-bold">
            Hire Me
          </Button>
        </motion.div>
      )}
    </motion.header>
  )
}
