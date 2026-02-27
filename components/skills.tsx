"use client"

import { motion } from "framer-motion"

const skills = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "TAILWIND",
  "PREMIERE PRO",
  "AFTER EFFECTS",
  "PHOTOSHOP",
  "ILLUSTRATOR",
  "NODE.JS",
  "PYTHON",
  "OPENAI",
  "SEO",
  "UX/UI",
  "MOTION GRAPHICS",
  "VIDEO EDITING"]

export function Skills() {
  return (
    <section className="h-screen w-screen flex flex-col justify-center border-r border-border overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
          Technological Proficiency
        </h2>
      </div>

      {/* Monochrome Marquee */}
      <div className="flex gap-12 whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 40, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="text-4xl md:text-5xl lg:text-8xl font-heading font-light text-foreground/20 hover:text-foreground/60 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
