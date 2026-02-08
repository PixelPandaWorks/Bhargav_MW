"use client"

import { motion } from "framer-motion"
import { Quote, Star, Zap, Heart, Shield, Terminal, User } from "lucide-react"
import { cn } from "@/lib/utils"

function Card({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 md:p-8 bg-muted/30 border border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300 overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  )
}

export function Signature() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Identity Profile
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-light">
            The <span className="italic font-serif">Signature</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Main Intro - Large Card */}
          <Card className="md:col-span-8 md:row-span-2 flex flex-col justify-center min-h-[300px]" delay={0.1}>
            <div className="absolute top-4 right-4 text-foreground/10">
              <User className="w-12 h-12" />
            </div>
            <h3 className="text-2xl md:text-4xl font-light leading-tight mb-6">
              Bombastic Bhargav &rarr; <span className="text-muted-foreground">Calm by nature, sharp by mind, and strong by character.</span>
            </h3>
            <div className="h-px w-24 bg-foreground/20 mb-6" />
            <p className="text-lg text-muted-foreground font-light italic">
              "The quiet one who always gets things done."
            </p>
          </Card>

          {/* Star Sign - Tall Card */}
          <Card className="md:col-span-4 md:row-span-2 flex flex-col justify-between bg-zinc-900/50 text-white border-zinc-800" delay={0.2}>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono tracking-widest uppercase opacity-70">Star Sign</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path d="M3 4a2 2 0 0 1 2 2v9" />
                  <path d="M5 6a2 2 0 0 1 4 0v9" />
                  <path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3-3m0 6l3-3" />
                </svg>
              </div>
              <h4 className="text-3xl font-serif mb-2">Scorpio</h4>
              <p className="text-sm opacity-70 leading-relaxed">
                Deep thinker by nature, and powerful in presence. A water sign defined by determination.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-full opacity-80" />
                 </div>)}
              </div>
            </div>
          </Card>

          {/* Personality */}
          <Card className="md:col-span-4" delay={0.3}>
            <div className="flex items-center gap-3 mb-4 text-foreground/80">
              <Zap className="w-5 h-5" />
              <h4 className="font-medium tracking-wide">Personality</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quiet yet social, smart in approach, and always respectful in attitude.
            </p>
          </Card>

          {/* Nature */}
          <Card className="md:col-span-4" delay={0.4}>
            <div className="flex items-center gap-3 mb-4 text-foreground/80">
              <Heart className="w-5 h-5" />
              <h4 className="font-medium tracking-wide">Nature</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Polite, helpful, and chilled out — the person everyone’s comfortable around.
            </p>
          </Card>

          {/* Strengths */}
          <Card className="md:col-span-4" delay={0.5}>
            <div className="flex items-center gap-3 mb-4 text-foreground/80">
              <Shield className="w-5 h-5" />
              <h4 className="font-medium tracking-wide">Strengths</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I don’t speak the loudest, but I add value where it matters most.
            </p>
          </Card>

          {/* Slogan - Wide Card */}
          <Card className="md:col-span-12 bg-foreground text-background hover:text-foreground" delay={0.6}>
             <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
                <div className="shrink-0 p-4 bg-background/10 rounded-full">
                    <Quote className="w-8 h-8" />
                </div>
                <div>
                   <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-60 block mb-3">My Commitment</span>
                   <p className="text-xl md:text-2xl font-light leading-normal">
                     "To stay humble, support my team, and bring positive energy — <span className="font-medium">every single time</span>."
                   </p>
                </div>
             </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
