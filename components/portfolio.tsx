"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



export function Portfolio() {
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
      href: "/web",
      image: "/modern-website-interface.jpg",
      description: "Digital Platforms",
    },
    {
      title: "AI",
      href: "/ai",
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

  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-light mb-12"
          >
            Curated <span className="italic">Work.</span>
          </motion.h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories.map((category) => (
                <CarouselItem key={category.title} className="basis-1/2 pl-4">
                  <Link href={category.href} className="group block relative h-full">
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted grayscale filter transition-all duration-700 ease-in-out border border-border">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-heading font-light mb-1">{category.title}</h3>
                      <p className="text-[10px] text-muted-foreground font-light tracking-wide uppercase">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block relative">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-border">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6">
                    <div className="size-10 rounded-full bg-background border border-border flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center md:text-left">
                  <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
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
          ))}
        </div>
      </div>
    </section>
  )
}
