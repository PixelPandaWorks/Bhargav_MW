"use client"

import { motion } from "framer-motion"
import { Award, Zap, Users } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    title: "Artistic Vision",
    description: "Developing visual identities that align with long-term strategic objectives.",
    icon: Zap,
  },
  {
    title: "Technical Rigor",
    description: "Building robust, performance-optimized digital platforms using modern tech stacks.",
    icon: Award,
  },
  {
    title: "Operational Flow",
    description: "Custom AI integrations and automated workflows to optimize operational efficiency.",
    icon: Users,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-light mb-12 leading-tight">
              Creative <span className="italic">Philosophy.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed font-light max-w-2xl mx-auto">
              Bridging the gap between conceptual design and technical execution. My approach is rooted in minimalism,
              precision, and a commitment to creating digital experiences that are as functional as they are beautiful.
            </p>

            <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto mb-16 md:mb-24 overflow-hidden grayscale group border border-border">
              <Image
                src="/my_image.jpg"
                alt="Creative Expert Profile"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-12 bg-background flex flex-col items-center text-center group hover:bg-muted/50 transition-colors"
            >
              <div className="size-10 border border-border flex items-center justify-center mb-8">
                <reason.icon className="size-4 text-foreground/50" />
              </div>
              <h3 className="text-xl font-heading font-light mb-4">{reason.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
