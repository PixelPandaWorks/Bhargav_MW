"use client"

import { motion } from "framer-motion"
import { Mail, Github, Twitter, Linkedin, ArrowUpRight, Instagram } from "lucide-react"
import { ScrollHoverWrapper } from "@/components/scroll-hover-wrapper"

export function Contact({ id }: { id?: string }) {
  return (
    <section id={id} className="h-screen w-max bg-background relative flex items-center snap-center overflow-hidden">
      <div className="flex flex-row items-center gap-20 px-10 md:px-24 h-full py-24">
          
        {/* Resume Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-[85vw] md:w-[450px] shrink-0"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-left">
            Resume
          </h2>
          <ScrollHoverWrapper>
            {(isHovered) => (
              <div className={`relative aspect-[4/3] w-full bg-muted/30 rounded-xl border transition-colors p-6 md:p-8 flex items-center justify-center overflow-hidden ${isHovered ? 'border-white/20' : 'border-white/10'}`}>
                 <div className="text-center space-y-4">
                    <div className="text-3xl font-heading font-light">Creative Expert</div>
                    <div className="text-muted-foreground text-sm uppercase tracking-widest">Portfolio 2026</div>
                    <div className={`text-blue-400 transition-opacity flex items-center justify-center gap-2 mt-4 font-medium ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                       View Resume <ArrowUpRight className="size-4" />
                    </div>
                 </div>
                 <a href="/BhargavMW_Resume__.pdf" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="View Resume"></a>
              </div>
            )}
          </ScrollHoverWrapper>
        </motion.div>

        {/* Connect Column */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} 
           whileInView={{ opacity: 1, scale: 1 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="w-[85vw] md:w-[600px] shrink-0"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-light text-left">
              Lets Connect
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light text-left">
            Open to exciting opportunities in DevRel, Blockchain Development, and Entrepreneurship. 
            Let's build something amazing together!
          </p>

          <div className="grid grid-cols-2 gap-4">
            
            {/* Email */}
            <ScrollHoverWrapper>
              {(isHovered) => (
                <a href="mailto:contact@minimalist.expert" className={`p-6 rounded-xl border border-white/10 transition-all flex items-start justify-between ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg transition-colors ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                      <Mail className="size-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Email</div>
                      <div className={`text-xs transition-colors flex items-center gap-1 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Open <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </ScrollHoverWrapper>

            {/* Twitter / X */}
            <ScrollHoverWrapper>
              {(isHovered) => (
                <a href="https://x.com/bhargavmwaghela" className={`p-6 rounded-xl border border-white/10 transition-all flex items-start justify-between ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                  <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-lg transition-colors ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                      <Twitter className="size-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Twitter / X</div>
                      <div className={`text-xs transition-colors flex items-center gap-1 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Open <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </ScrollHoverWrapper>

            {/* LinkedIn */}
            <ScrollHoverWrapper>
              {(isHovered) => (
                <a href="https://www.linkedin.com/in/bhargav-waghela-a00821394" className={`p-6 rounded-xl border border-white/10 transition-all flex items-start justify-between ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                   <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-lg transition-colors ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                      <Linkedin className="size-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">LinkedIn</div>
                      <div className={`text-xs transition-colors flex items-center gap-1 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Open <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </ScrollHoverWrapper>

            {/* GitHub */}
            <ScrollHoverWrapper>
              {(isHovered) => (
                <a href="https://github.com/PixelPandaWorks" className={`p-6 rounded-xl border border-white/10 transition-all flex items-start justify-between ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                   <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-lg transition-colors ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                      <Github className="size-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">GitHub</div>
                      <div className={`text-xs transition-colors flex items-center gap-1 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Open <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </ScrollHoverWrapper>

             {/* Instagram */}
            <ScrollHoverWrapper>
              {(isHovered) => (
                <a href="https://instagram.com/bhaargaav_" className={`col-span-2 p-6 rounded-xl border border-white/10 transition-all flex items-start justify-between ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                   <div className="flex items-center gap-4">
                     <div className={`p-3 rounded-lg transition-colors ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
                      <Instagram className="size-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Instagram</div>
                      <div className={`text-xs transition-colors flex items-center gap-1 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Open <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </ScrollHoverWrapper>

          </div>
        </motion.div>

        {/* Footer Sidebar */}
        <footer className="w-[85vw] md:w-[300px] shrink-0 h-full flex flex-col justify-end pb-12 border-l border-border pl-12 ml-4">
          <div className="flex flex-col gap-8">
            <p className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase leading-relaxed">
            &copy; 2025 Creative Technologist <br/><br/> REFINED CRAFT WITH THE USE OF AI & TECH 
            </p>
            <div className="flex flex-col gap-6 mt-8">
              <a
                href="#"
                className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}
