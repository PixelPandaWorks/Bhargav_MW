"use client"

import { useRef, Children } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HorizontalScroll({ 
  children,
  ids = []
}: { 
  children: React.ReactNode
  ids?: string[]
}) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  
  // We want the total vertical scroll required to match the horizontal content width.
  // Using 100vh per section will make the scroll feel 1:1.
  const childrenArray = Children.toArray(children)
  const numSections = childrenArray.length

  const x = useTransform(scrollYProgress, (pos) => `calc(-${pos * 100}% + ${pos * 100}vw)`)

  return (
    <section ref={targetRef} className="relative z-10 bg-background" style={{ height: `${numSections * 100}vh` }}>
      {/* Invisible anchor markers for smooth hash navigation */}
      {ids.map((id, index) => id ? (
         <div key={id} id={id} className="absolute w-full pointer-events-none" style={{ top: `${index * 100}vh`, height: '100vh' }} />
      ) : null)}

      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-background">
        <motion.div style={{ x }} className="flex h-full w-max items-start">
          {childrenArray.map((child, i) => (
            <div 
              key={i} 
              className="w-screen h-full shrink-0 overflow-y-auto overflow-x-hidden scrollbar-hide grid place-items-center"
            >
              <div className="w-full">
                {child}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
