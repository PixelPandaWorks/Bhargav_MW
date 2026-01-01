"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Video", "Design", "Web", "AI", "Events"]

const projects = [
  {
    title: "Cinematic Narrative",
    category: "Video",
    image: "/cinematic-video-production.jpg",
    tags: ["EDITING", "GRADING"],
  },
  {
    title: "Minimal Identity",
    category: "Design",
    image: "/minimalist-brand-design.jpg",
    tags: ["BRANDING", "UI"],
  },
  {
    title: "Digital Platform",
    category: "Web",
    image: "/modern-website-interface.jpg",
    tags: ["NEXT.JS", "REACT"],
  },
  {
    title: "Neural Interface",
    category: "AI",
    image: "/artificial-intelligence-interface.jpg",
    tags: ["AUTOMATION", "LLM"],
  },
  {
    title: "Sonic Experience",
    category: "Events",
    image: "/concert-event-management.jpg",
    tags: ["LOGISTICS", "MOTION"],
  },
  {
    title: "Motion Systems",
    category: "Video",
    image: "/abstract-motion-graphics.jpg",
    tags: ["3D", "AE"],
  },
]

export function Portfolio() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = projects.filter((p) => filter === "All" || p.category === filter)

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-light mb-12"
          >
            Curated <span className="italic">Projects.</span>
          </motion.h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b transition-all ${
                  filter === cat ? "border-foreground text-foreground" : "border-transparent text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-muted grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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
                <div className="mt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-heading font-light mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold tracking-widest text-muted-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
