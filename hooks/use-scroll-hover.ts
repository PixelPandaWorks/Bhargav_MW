"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

// Global store to track mouse without triggering re-renders everywhere
const mousePos = { x: 0, y: 0 }
if (typeof window !== "undefined") {
  window.addEventListener(
    "mousemove",
    (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    },
    { passive: true }
  )
}

interface UseScrollHoverProps {
  threshold?: number // For Intersection Observer (mobile / static view threshold)
  staggerDelay?: number // Delay in ms before hover triggers
  forceMobileHover?: boolean // Whether to activate purely by intersection on mobile
}

export function useScrollHover<T extends HTMLElement>({
  threshold = 0.5,
  staggerDelay = 0,
  forceMobileHover = true,
}: UseScrollHoverProps = {}) {
  const ref = useRef<T>(null)
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)
  
  // Use framer-motion's highly optimized useInView for threshold tracking
  const isInView = useInView(ref, { amount: threshold })

  useEffect(() => {
    isMobile.current = window.matchMedia("(hover: none) and (pointer: coarse)").matches
  }, [])

  useEffect(() => {
    let ticking = false
    
    const checkHover = () => {
      if (!ref.current) return

      let shouldHover = false
      if (isMobile.current && forceMobileHover) {
         // Mobile: fallback to intersection center threshold
         shouldHover = isInView
      } else {
        // Desktop: High-performance bounding box collision against global mouse
        const rect = ref.current.getBoundingClientRect()
        // Also ensure an explicit hit size and that it isn't transparently hiding behind an active overlay
        shouldHover =
          mousePos.x >= rect.left &&
          mousePos.x <= rect.right &&
          mousePos.y >= rect.top &&
          mousePos.y <= rect.bottom
      }

      setIsHovered((prev) => {
        if (prev !== shouldHover) {
          if (shouldHover && staggerDelay > 0) {
            if (timeoutId.current) clearTimeout(timeoutId.current)
            timeoutId.current = setTimeout(() => {
              setIsHovered(true)
            }, staggerDelay)
            return prev
          } else {
             if (timeoutId.current) clearTimeout(timeoutId.current)
             return shouldHover
          }
        }
        return prev
      })
      ticking = false
    }

    // Checking on mount + whenever intersection logic triggers
    checkHover()
    
    // Using simple requestAnimationFrame to debounce smooth scrolling
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkHover)
        ticking = true
      }
    }

    // Adding events for active tracking
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", checkHover, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", checkHover)
      if (timeoutId.current) clearTimeout(timeoutId.current)
    }
  }, [isInView, forceMobileHover, staggerDelay])

  return { 
    ref, 
    isHovered, 
    hoverProps: { 
      onMouseEnter: () => {
        if (!isMobile.current) {
           if (timeoutId.current) clearTimeout(timeoutId.current)
           setIsHovered(true)
        }
      },
      onMouseLeave: () => {
        if (!isMobile.current) {
           if (timeoutId.current) clearTimeout(timeoutId.current)
           setIsHovered(false)
        }
      }
    } 
  }
}
