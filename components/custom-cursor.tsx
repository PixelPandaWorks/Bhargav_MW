"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Use springs for smooth following movement
  const springConfig = { damping: 25, stiffness: 300 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null,
      )
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Main monochrome dot */}
        <div className="h-3 w-3 rounded-full bg-black dark:bg-white" />

        {/* Outer subtle ring */}
        <motion.div
          className="absolute h-8 w-8 rounded-full border border-black/20 dark:border-white/20"
          animate={{
            scale: isPointer ? 1.2 : 1,
            opacity: isPointer ? 0.5 : 1,
          }}
        />
      </div>
    </motion.div>
  )
}
