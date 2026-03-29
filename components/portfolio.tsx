"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollHover } from "@/hooks/use-scroll-hover"

const categories = [
  {
    title: "Video",
    href: "/videos",
    image: "/cinematic-video-production.jpg",
    description: "Narrative & Commercial",
  },
  {
    title: "Graphics",
    href: "/graphics",
    image: "/minimalist-brand-design.jpg",
    description: "Brand Identity & UI",
  },
  {
    title: "Web",
    href: "https://github.com/PixelPandaWorks",
    image: "/modern-website-interface.jpg",
    description: "Digital Platforms",
  },
  {
    title: "AI",
    href: "https://github.com/PixelPandaWorks",
    image: "/artificial-intelligence-interface.jpg",
    description: "Automation & LLMs",
  },
  {
    title: "Events",
    href: "/events",
    image: "/concert-event-management.jpg",
    description: "Logistics & Motion",
  },
]

function PortfolioCard({ category, index }: { category: typeof categories[0], index: number }) {
  const { ref, isHovered, hoverProps } = useScrollHover<HTMLDivElement>({ threshold: 0.5, staggerDelay: 0 })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="w-[85vw] md:w-[400px] shrink-0 h-full"
      ref={ref}
      {...hoverProps}
    >
      <Link href={category.href} className="flex flex-col h-full relative">
        <div className={`flex-1 w-full relative overflow-hidden transition-all duration-300 ease-in-out border border-border ${
           isHovered ? 'grayscale-0' : 'bg-muted grayscale'
        }`}>
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
          />
          <div className={`absolute inset-0 bg-background/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          <div className="absolute top-6 right-6">
             <div className={`size-10 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-300 ${
               isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
             }`}>
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-left shrink-0">
          <div className="flex items-center gap-4 mb-4 justify-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Explore
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h3 className="text-3xl font-heading font-light mb-2">{category.title}</h3>
          <p className="text-sm text-muted-foreground font-light tracking-wide uppercase">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export function Portfolio({ id }: { id?: string }) {
  return (
    <section id={id} className="h-screen w-max bg-background relative flex items-center border-r border-border snap-center overflow-hidden">
      <div className="flex flex-row items-center gap-16 px-10 md:px-24 h-full py-24">
        
        {/* Title Area */}
        <div className="w-[85vw] md:w-[300px] shrink-0 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-light mb-12"
          >
            Curated <span className="italic">Work.</span>
          </motion.h2>
        </div>

        {/* Portfolio Horizontal Feed */}
        <div className="flex flex-row gap-12 h-full max-h-[600px] shrink-0">
          {categories.map((category, index) => (
            <PortfolioCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
