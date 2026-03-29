"use client"

import React from "react"
import { useScrollHover } from "@/hooks/use-scroll-hover"

interface ScrollHoverWrapperProps {
  children: React.ReactNode | ((isHovered: boolean) => React.ReactNode)
  className?: string
  activeClass?: string
  inactiveClass?: string
  threshold?: number
  staggerDelay?: number
  as?: any
}

export function ScrollHoverWrapper({
  children,
  className = "",
  activeClass = "",
  inactiveClass = "",
  threshold = 0.5,
  staggerDelay = 0,
  as: Component = "div"
}: ScrollHoverWrapperProps) {
  const { ref, isHovered, hoverProps } = useScrollHover<HTMLElement>({ threshold, staggerDelay })

  if (typeof children === "function") {
    return (
      <Component ref={ref} className={className} {...hoverProps}>
        {children(isHovered)}
      </Component>
    )
  }

  return (
    <Component 
      ref={ref} 
      className={`${className} ${isHovered ? activeClass : inactiveClass}`.trim()} 
      {...hoverProps}
    >
      {children}
    </Component>
  )
}
