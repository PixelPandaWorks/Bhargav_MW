"use client"

import { motion } from "framer-motion"
import { Award, Zap, Users, GraduationCap, Briefcase, Code, ScrollText, Globe } from "lucide-react"
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

export function About({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-32 bg-background border-t border-border">
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
                alt="Bhargav Waghela"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-32">
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

        {/* Resume / Details Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left Column: Experience & Education */}
            <div className="space-y-16">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Briefcase className="size-5 text-muted-foreground" />
                  <h3 className="text-2xl font-heading font-light">Experience</h3>
                </div>
                <div className="pl-2 border-l border-border hover:border-foreground/50 transition-colors duration-300">
                  <div className="pl-6 relative">
                    <div className="absolute -left-[5px] top-2 size-2.5 bg-background border border-foreground rounded-full" />
                    <h4 className="text-lg font-medium">Digital Marketing Manager</h4>
                    <span className="text-sm text-muted-foreground block mb-4">The Divine Digital | Aug 2024 – Oct 2025</span>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 font-light leading-relaxed">
                      <li>Managed WordPress websites for responsive design and user experience.</li>
                      <li>Edited videos and designed posts for social media, generating 100k+ views across multiple platforms.</li>
                      <li>Handled performance marketing tasks, leveraging Gen AI tools and industry trends.</li>
                    </ul>
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
                  <GraduationCap className="size-5 text-muted-foreground" />
                  <h3 className="text-2xl font-heading font-light">Education</h3>
                </div>
                <div className="pl-2 border-l border-border hover:border-foreground/50 transition-colors duration-300">
                  <div className="pl-6 relative">
                    <div className="absolute -left-[5px] top-2 size-2.5 bg-background border border-foreground rounded-full" />
                    <h4 className="text-lg font-medium">Ajeenkya DY Patil University</h4>
                    <p className="text-sm text-foreground/80 mt-1">B.Tech in Cloud Technology & Information Security</p>
                    <span className="text-xs text-muted-foreground block mt-2 tracking-widest uppercase">Pune, India | May 2025</span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">CGPA: 7.77</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Skills & Certifications */}
            <div className="space-y-16">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Code className="size-5 text-muted-foreground" />
                  <h3 className="text-2xl font-heading font-light">Technical Skills</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Web & Languages</h4>
                    <div className="flex flex-wrap gap-2">
                       {["HTML", "CSS", "Javascript", "Node.js", "Next.js", "Python", "Typescript"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-muted/50 border border-border text-xs font-medium rounded-full">{skill}</span>
                       ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                       {["GitHub", "AWS", "Docker", "Linux Administration", "Gen AI tools", "MySQL","DaVinci Resolve","Photoshop"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-muted/50 border border-border text-xs font-medium rounded-full">{skill}</span>
                       ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <ScrollText className="size-5 text-muted-foreground" />
                  <h3 className="text-2xl font-heading font-light">Certifications</h3>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Web development Bootcamp",
                    "Database and SQL for Data Science (Python)",
                    "AWS Fundamentals",
                    "IT Fundamentals for Cyber Security",
                    "Japanese Language Proficiency Test - N5",
                    "Course on Computer concepts"
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <span className="mt-1.5 size-1.5 rounded-full bg-foreground/20 shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Globe className="size-5 text-muted-foreground" />
                  <h3 className="text-2xl font-heading font-light">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-light">
                   <span>English</span>
                   <span>Hindi</span>
                   <span>Japanese (JLPT-N5)</span>
                   <span>Gujarati</span>
                   <span>Marathi</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
