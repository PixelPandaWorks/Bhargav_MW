"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollHoverWrapper } from "@/components/scroll-hover-wrapper"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* <span className="inline-block py-1.5 px-4 rounded-full bg-muted text-foreground text-[10px] font-bold tracking-[0.3em] uppercase mb-10 border border-border">
              Available for Freelance
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-heading font-light leading-[1.1] mb-24 md:mb-40 text-foreground"
          >
            Creative <span className="italic">Expert</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            I&apos;m Bhargav Waghela. Bridging the gap between Cloud Technology, Information Security, and Digital Marketing with a focus on secure and creative digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-20 flex flex-wrap gap-6 justify-center"
          >
            <Link href="#work">
              <ScrollHoverWrapper>
                {(isHovered) => (
                  <Button
                    size="lg"
                    className={`h-14 px-10 rounded-none bg-foreground text-background uppercase tracking-widest text-xs font-bold transition-all ${isHovered ? 'bg-foreground/90' : ''}`}
                  >
                    Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </ScrollHoverWrapper>
            </Link>
            <Link href="#about">
              <ScrollHoverWrapper>
                {(isHovered) => (
                  <Button
                    size="lg"
                    variant="outline"
                    className={`h-14 px-10 rounded-none border-foreground/20 uppercase tracking-widest text-xs font-bold bg-transparent transition-all ${isHovered ? 'border-foreground' : ''}`}
                  >
                    About Me
                  </Button>
                )}
              </ScrollHoverWrapper>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.1 },
            scale: { duration: 0.8, delay: 0.1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" },
          }}
        >
          <Image
            src="/hero_image.png"
            alt="Creative Expert Hero"
            width={300}
            height={400}
            className="object-contain w-[200px] sm:w-[280px] md:w-[350px] grayscale"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
