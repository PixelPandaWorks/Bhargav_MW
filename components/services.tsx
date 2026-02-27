"use client"

import { motion } from "framer-motion"
import { Video, Palette, Code, Cpu, Search, Calendar, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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

export function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="h-screen w-max bg-background relative flex items-center border-r border-border snap-center overflow-hidden">
      <div className="flex flex-row items-center gap-16 px-10 md:px-24 h-full py-24">
        
        {/* Title Area */}
        <div className="w-[85vw] md:w-[400px] shrink-0 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-light mb-8"
          >
            Strategic <span className="italic">Expertise.</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg font-light mb-12">
            A refined approach to digital creation, blending artistic vision with technical precision.
          </p>
          <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/60 hover:text-foreground transition-colors group">
            <Plus className="size-3 group-hover:rotate-90 transition-transform" />
            Full Scope of Capabilities
          </button>
        </div>

        {/* Services Horizontal Feed */}
        <div className="flex flex-row gap-px bg-border border border-border h-full max-h-[600px] shrink-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[80vw] md:w-[350px] shrink-0 h-full"
            >
              <Card className="h-full border-0 bg-background rounded-none hover:bg-muted/30 transition-colors group">
                <CardContent className="p-8 md:p-12 flex flex-col h-full justify-between">
                  <div>
                    <div className="size-10 flex items-center justify-center mb-10 border border-border">
                      <service.icon className="size-4 text-foreground/70" />
                    </div>
                    <h3 className="text-2xl font-heading font-light mb-6 group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
