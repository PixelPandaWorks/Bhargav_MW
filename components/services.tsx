"use client"

import { motion } from "framer-motion"
import { Video, Palette, Code, Cpu, Search, Calendar, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const services = [
  {
    title: "Cinematography",
    description: "High-end post-production and motion graphics for narrative and commercial projects.",
    icon: Video,
  },
  {
    title: "Brand Architecture",
    description: "Developing visual identities that align with long-term strategic objectives.",
    icon: Palette,
  },
  {
    title: "Engineering",
    description: "Building robust, performance-optimized digital platforms using modern tech stacks.",
    icon: Code,
  },
  {
    title: "Intelligence",
    description: "Custom AI integrations and automated workflows to optimize operational efficiency.",
    icon: Cpu,
  },
  {
    title: "Optimization",
    description: "Data-driven growth strategies to enhance search visibility and engagement.",
    icon: Search,
  },
  {
    title: "Directing",
    description: "Conceptualization and management for large-scale creative events and productions.",
    icon: Calendar,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-light mb-8"
            >
              Strategic <span className="italic">Expertise.</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg font-light max-w-lg mx-auto">
              A refined approach to digital creation, blending artistic vision with technical precision.
            </p>
          </div>
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
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="basis-1/2 pl-4">
                  <div className="h-full border border-border bg-background p-6 flex flex-col justify-between">
                    <div>
                      <div className="size-10 flex items-center justify-center mb-6 border border-border">
                        <service.icon className="size-4 text-foreground/70" />
                      </div>
                      <h3 className="text-xl font-heading font-light mb-4">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light text-xs">{service.description}</p>
                  </div>
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
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-background rounded-none hover:bg-muted/50 transition-colors group">
                <CardContent className="p-8 md:p-12">
                  <div className="size-10 flex items-center justify-center mb-10 border border-border">
                    <service.icon className="size-4 text-foreground/70" />
                  </div>
                  <h3 className="text-2xl font-heading font-light mb-6 group-hover:translate-x-1 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 hover:text-foreground transition-colors group">
            <Plus className="size-3 group-hover:rotate-90 transition-transform" />
            Full Scope of Capabilities
          </button>
        </div>
      </div>
    </section>
  )
}
