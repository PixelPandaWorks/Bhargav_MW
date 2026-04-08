"use client"

import { motion } from "framer-motion"
import { Award, Zap, Users, GraduationCap, Briefcase, Code, ScrollText, Globe } from "lucide-react"
import Image from "next/image"
import { ScrollHoverWrapper } from "@/components/scroll-hover-wrapper"

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

export function About({ id }: { id?: string }) {
  return (
    <section id={id} className="h-screen w-max bg-background relative flex items-center border-r border-border snap-center overflow-hidden">
      <div className="flex flex-row items-center gap-20 px-10 md:px-24 h-full py-24">
        
        {/* Title Area */}
        <div className="w-[85vw] md:w-[500px] shrink-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-light mb-12 leading-tight">
              Creative <span className="italic">Philosophy.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Bridging the gap between conceptual design and technical execution. My approach is rooted in minimalism,
              precision, and a commitment to creating digital experiences that are as functional as they are beautiful.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <ScrollHoverWrapper
          className="w-[85vw] md:w-[600px] shrink-0 h-full max-h-[600px] relative overflow-hidden border border-border transition-all duration-300"
          activeClass="grayscale-0"
          inactiveClass="grayscale"
        >
          {(isHovered: boolean) => (
            <Image
              src="/my_image.jpg"
              alt="Bhargav Waghela"
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
            />
          )}
        </ScrollHoverWrapper>

        {/* Philosophy Grid */}
        <div className="flex flex-row gap-px bg-border border border-border h-full max-h-[600px] shrink-0">
          {reasons.map((reason, index) => (
            <ScrollHoverWrapper
              key={reason.title}
              as={motion.div}
              {...({ 
                 initial: { opacity: 0, scale: 0.95 },
                 whileInView: { opacity: 1, scale: 1 },
                 viewport: { once: true },
                 transition: { delay: index * 0.1 }
              } as any)}
              className="w-[80vw] md:w-[350px] p-8 md:p-12 flex flex-col justify-center items-center text-center transition-colors shrink-0 h-full"
              activeClass="bg-muted/30"
              inactiveClass="bg-background"
            >
              {(isHovered: boolean) => (
                <>
                  <div className="size-10 border border-border flex items-center justify-center mb-8">
                    <reason.icon className={`size-4 transition-colors ${isHovered ? 'text-foreground' : 'text-foreground/50'}`} />
                  </div>
                  <h3 className="text-xl font-heading font-light mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{reason.description}</p>
                </>
              )}
            </ScrollHoverWrapper>
          ))}
        </div>

        {/* Experience & Education */}
        <div className="w-[85vw] md:w-[450px] shrink-0 flex flex-col justify-center h-full max-h-[600px] space-y-12 pr-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="size-5 text-muted-foreground" />
              <h3 className="text-2xl font-heading font-light">Experience</h3>
            </div>
            <ScrollHoverWrapper
              className="pl-2 border-l transition-colors duration-200"
              activeClass="border-foreground/50"
              inactiveClass="border-border"
            >
              <div className="pl-6 relative mb-8">
                <div className="absolute -left-[5px] top-2 size-2.5 bg-background border border-foreground rounded-full" />
                <h4 className="text-lg font-medium">Digital Marketing Executive</h4>
                <span className="text-sm text-muted-foreground block mb-4">Digikraf | Dec 2025 – Present</span>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 font-light leading-relaxed">
                  <li>Automated internal workflows using AI tools and optimized server-side logic for CRM systems.</li>
                  <li>Designed high-performance UX interfaces for digital platforms with AI-driven design principles.</li>
                  <li>Managed creative production by leveraging AI tools for video editing, graphic design, and branding collaterals, optimizing speed and quality of output.</li>
                  <li>Spearheaded server administration and automated technical system management.</li>
                  <li>Partnered with clients to deliver efficient, tech-driven project execution and scalable solutions.</li>
                </ul>
              </div>

              <div className="pl-6 relative">
                <div className="absolute -left-[5px] top-2 size-2.5 bg-background border border-foreground rounded-full" />
                <h4 className="text-lg font-medium">Founder’s Office</h4>
                <span className="text-sm text-muted-foreground block mb-4">The Divine Digital | Aug 2024 – Oct 2025</span>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 font-light leading-relaxed">
                  <li>Engineered responsive WordPress architectures focusing on user experience and technical reliability.</li>
                  <li>Developed high-impact digital content and video assets, achieving 100k+ views for multi-platform clients.</li>
                  <li>Executed performance marketing by leveraging Gen AI tools and data analytics to optimize digital growth.</li>
                </ul>
              </div>
            </ScrollHoverWrapper>
          </motion.div>


        </div>

        {/* Skills & Certifications */}
        <div className="w-[85vw] md:w-[450px] shrink-0 flex flex-col justify-center h-full max-h-[600px] space-y-12 pr-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Code className="size-5 text-muted-foreground" />
              <h3 className="text-2xl font-heading font-light">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Web & Languages</h4>
                <div className="flex flex-wrap gap-2">
                   {["HTML", "CSS", "Javascript", "Node.js", "Next.js", "Python", "Typescript"].map(skill => (
                     <ScrollHoverWrapper key={skill} className="px-3 py-1 border border-border text-xs font-medium rounded-full transition-colors" activeClass="bg-muted/100 border-foreground/30" inactiveClass="bg-muted/50">
                       {skill}
                     </ScrollHoverWrapper>
                   ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                   {["GitHub", "AWS", "Docker", "Linux Admin", "Gen AI", "MySQL","DaVinci Resolve","Photoshop"].map(skill => (
                     <ScrollHoverWrapper key={skill} className="px-3 py-1 border border-border text-xs font-medium rounded-full transition-colors" activeClass="bg-muted/100 border-foreground/30" inactiveClass="bg-muted/50">
                       {skill}
                     </ScrollHoverWrapper>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <ScrollText className="size-5 text-muted-foreground" />
              <h3 className="text-2xl font-heading font-light">Certifications & Languages</h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 mb-6">
              {[
                "Web development Bootcamp",
                "Database & SQL for Data Science",
                "AWS Fundamentals",
                "Cyber Security IT Fundamentals"
              ].map((cert) => (
                <ScrollHoverWrapper as="li" key={cert} className="flex items-start gap-3 text-sm text-muted-foreground font-light transition-colors" activeClass="text-foreground">
                   {/* render-prop just to grab hover states! */}
                   {(isHovered: boolean) => (
                      <>
                         <span className={`mt-1.5 size-1.5 rounded-full shrink-0 transition-colors ${isHovered ? 'bg-foreground' : 'bg-foreground/20'}`} />
                         {cert}
                      </>
                   )}
                </ScrollHoverWrapper>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground font-light">
               <span>English</span>
               <span>Hindi</span>
               <span>Japanese</span>
               <span>Gujarati</span>
               <span>Marathi</span>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="size-5 text-muted-foreground" />
              <h3 className="text-2xl font-heading font-light">Education</h3>
            </div>
            <ScrollHoverWrapper 
              className="pl-2 border-l transition-colors duration-200"
              activeClass="border-foreground/50"
              inactiveClass="border-border"
            >
              <div className="pl-6 relative">
                <div className="absolute -left-[5px] top-2 size-2.5 bg-background border border-foreground rounded-full" />
                {/* <h4 className="text-lg font-medium">Ajeenkya DY Patil University</h4> */}
                <p className="text-sm text-foreground/80 mt-1">B.Tech in Cloud Technology & Information Security</p>
                <span className="text-xs text-muted-foreground block mt-2 tracking-widest uppercase">Pune, India | May 2025</span>
                <p className="text-sm text-muted-foreground mt-2 font-medium">CGPA: 7.77</p>
              </div>
            </ScrollHoverWrapper>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
