"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isOpen, setIsOpen] = React.useState(false)

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const links = [
    { href: "/videos", label: "Videos" },
    { href: "/graphics", label: "Graphics" },
    { href: "/events", label: "Events" },
    { href: "https://github.com/PixelPandaWorks", label: "Projects" },
    
  ]

  if (!isHome) {
    return (
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm hover:bg-muted/50 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Go back to home"
      >
        <ArrowLeft className="w-5 h-5 text-foreground" />
      </Link>
    )
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm hover:bg-muted/50 transition-all duration-300 hover:scale-105 active:scale-95 text-foreground"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-background/80 hover:bg-muted transition-colors text-foreground shadow-sm border border-border/50"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-5xl font-heading font-light hover:text-primary transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-12 text-sm text-muted-foreground font-light"
            >
              Bhargav_MW Creative Expertise
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
