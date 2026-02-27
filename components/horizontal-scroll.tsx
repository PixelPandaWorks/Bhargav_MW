"use client"

import { useRef, Children, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HorizontalScroll({ 
  children,
  ids = []
}: { 
  children: React.ReactNode
  ids?: string[]
}) {
  const targetRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [offsets, setOffsets] = useState<number[]>([])

  useEffect(() => {
    const updateSize = () => {
      if (contentRef.current) {
        setScrollRange(contentRef.current.scrollWidth - window.innerWidth)
        const childNodes = Array.from(contentRef.current.children)
        setOffsets(childNodes.map(child => (child as HTMLElement).offsetLeft))
      }
    }
    updateSize()
    // Small delay to ensure fonts/images are loaded which could affect layout
    const timeout = setTimeout(updateSize, 100)
    window.addEventListener("resize", updateSize)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", updateSize)
    }
  }, [children])

  const { scrollYProgress } = useScroll({ target: targetRef })
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollRange)])

  return (
    <section ref={targetRef} className="relative z-10 bg-background" style={{ height: `calc(100vh + ${scrollRange}px)` }}>
      {/* Invisible anchor markers for smooth hash navigation */}
      {ids.map((id, index) => id ? (
         <div key={id} id={id} className="absolute w-full pointer-events-none h-screen" style={{ top: `${offsets[index] || 0}px` }} />
      ) : null)}

      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-background">
        <motion.div ref={contentRef} style={{ x }} className="flex h-full w-max items-center">
          {Children.map(children, (child, i) => (
            <div key={i} className="h-screen w-max shrink-0 flex items-center">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
