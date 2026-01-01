"use client"

import { motion } from "framer-motion"
import { Mail, Github, Twitter, Linkedin, ArrowUpRight, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column: Resume */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-center lg:text-left">
              Resume
            </h2>
            <div className="group relative aspect-[4/3] w-full bg-muted/30 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors p-8 flex items-center justify-center">
               {/* Resume Placeholder / Content */}
               <div className="text-center space-y-4">
                  <div className="text-3xl font-heading font-light">Creative Expert</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-widest">Portfolio 2026</div>
                  <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 mt-4 font-medium">
                     View Resume <ArrowUpRight className="size-4" />
                  </div>
               </div>
               {/* Link to resume if available */}
               <a href="#" className="absolute inset-0 z-10" aria-label="View Resume"></a>
            </div>
          </motion.div>

          {/* Right Column: Lets Connect */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-center lg:text-left">
              Lets Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light text-center lg:text-left">
              Open to exciting opportunities in DevRel, Blockchain Development, and Entrepreneurship. 
              Let's build something amazing together!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email */}
              <a href="mailto:contact@minimalist.expert" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="size-6 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">Email</div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      Open <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Twitter / X */}
              <a href="#" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between">
                <div className="flex items-center gap-4">
                   <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Twitter className="size-6 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">Twitter / X</div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      Open <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="#" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between">
                 <div className="flex items-center gap-4">
                   <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Linkedin className="size-6 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">LinkedIn</div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      Open <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a href="#" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between">
                 <div className="flex items-center gap-4">
                   <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Github className="size-6 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">GitHub</div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      Open <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>

               {/* Telegram */}
              <a href="#" className="col-span-1 sm:col-span-2 group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between">
                 <div className="flex items-center gap-4">
                   <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Send className="size-6 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">Telegram</div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      Open <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </motion.div>
        </div>

        <div className="max-w-xl mx-auto text-center mb-0">
             <p className="text-sm text-muted-foreground">Prefer a direct message? Reach out on <a href="#" className="underline hover:text-foreground">Twitter</a> or <a href="#" className="underline hover:text-foreground">LinkedIn</a></p>
        </div>

      </div>

      <footer className="mt-24 py-16 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase">
            &copy; 2025 MINIMALIST.EXPERT — REFINED CRAFT
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
