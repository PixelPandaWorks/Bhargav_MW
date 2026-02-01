"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import Image from "next/image"
import { CheckCircle2, MapPin, Calendar, Camera, ChevronLeft, ChevronRight, X, Play } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

// Mock Data
const events = [
  {
    id: 1,
    name: "VH1 Supersonic",
    brief: "A high-energy, 3-day music and culture festival where sound, lights, art, and people collide. I was part of the Design & Décor Team, working behind the scenes to transform an open venue into a visually immersive festival experience. While thousands came for the artists, we worked to build the world they stepped into. From one week before the gates opened, I collaborated with the crew on stage aesthetics, installations, spatial layouts, and on-ground visual elements that shaped the entire vibe of VH1 Supersonic.",
    date: "Feb, 2023",
    location: "Mahalaxmi Lawns, Pune",
    experienceNotes: [
      "Contributed to large-scale stage and venue décor setups before the event.",
      "Helped execute creative installations across multiple zones of the festival.",
      "Worked alongside production teams under tight timelines and real event pressure.",
      "Experienced the real workflow of how a massive concert environment is built from scratch.",
      "Got the opportunity to meet and interact with several well-known artists during the event.",
      "Played a role in shaping the visual atmosphere for thousands of attendees.",
      "This experience gave me a deep appreciation for event design, teamwork under pressure, and transforming creative ideas into real-world environments at festival scale.",
    ],
    gallery: [
      { type: "video", src: "/major-laser-vh1-supersonic-event-concert.mp4" },
      { type: "image", src: "/hanuman-kind-concert.jpg" },
      { type: "image", src: "/naezy-the-baa-concert.jpg" },
      { type: "image", src: "/Ritviz-concert.jpg" },
      { type: "image", src: "/concert-event-decore-vh1-supersonic.jpeg" },
      { type: "image", src: "/concert-event-vh1-supersonic.jpeg" },
      { type: "image", src: "/event-concert-vh1-supersonic.jpeg" },
    ],
  },
  {
    id: 2,
    name: "Hashtag 2022",
    brief: "Hashtag 2022 was a vibrant blend of culture, creativity, and competition — bringing together multiple cultural performances and high-energy sports events under one festival. I served as a Managing Committee Member for both the cultural and sports segments, helping ensure everything ran smoothly from preparation to execution. From coordinating stage arrangements for dance, music, and open-mic performances to organizing and managing equipment for sports like football, cricket, basketball, and volleyball — I worked across teams to keep the event flow seamless.",
    date: "Feb, 2022",
    location: "Ajeenkya DY Patil University, Pune",
    experienceNotes: [
      "Managed stage setup and coordination for cultural performances.",
      "Organized and handled sports equipment logistics for multiple games.",
      "Worked closely with different teams to ensure smooth event execution.",
      "Gained hands-on experience in event coordination, planning, and on-ground management.",
      "Helped create an engaging and energetic environment for participants and attendees.",
      "This experience strengthened my skills in team coordination, event operations, and multitasking across diverse event setups.",
    ],
    gallery: [
      { type: "image", src: "/placeholder.svg" },
      { type: "image", src: "/placeholder.svg" },
    ],
  },
]

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<{ eventIndex: number; imageIndex: number } | null>(null)

  const handleNext = useCallback(() => {
    if (!selectedImage) return
    const event = events[selectedImage.eventIndex]
    const nextIndex = (selectedImage.imageIndex + 1) % event.gallery.length
    setSelectedImage({ ...selectedImage, imageIndex: nextIndex })
  }, [selectedImage])

  const handlePrev = useCallback(() => {
    if (!selectedImage) return
    const event = events[selectedImage.eventIndex]
    const prevIndex = (selectedImage.imageIndex - 1 + event.gallery.length) % event.gallery.length
    setSelectedImage({ ...selectedImage, imageIndex: prevIndex })
  }, [selectedImage])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, handleNext, handlePrev])

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0 z-0 bg-muted/20">
             {/* Abstract Background or Image Placement */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background/50 to-background opacity-70" />
            
            {/* Optional: Add a real image here if available */}
             <Image
                src="/concert-event-management.jpg"
                alt="Events Hero Background"
                fill
                className="object-cover opacity-10 mix-blend-overlay"
                priority
             />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-heading font-light mb-8 tracking-tight"
          >
            Global <span className="italic text-primary/80">Events.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Immersive experiences that define the future of interaction.
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="pb-24 px-6">
        <div className="container mx-auto space-y-32">
          {events.map((event, eventIndex) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              {/* Event Header */}
              <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16 mb-12">
                <div>
                   <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4" />
                       <span>{event.date}</span>
                    </div>
                     <div className="flex items-center gap-2">
                       <MapPin className="w-4 h-4" />
                       <span>{event.location}</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-light mb-6">{event.name}</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {event.brief}
                  </p>
                </div>

                {/* Experience Notes */}
                <div className="bg-muted/30 border border-border/50 p-8 rounded-lg relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                      <CheckCircle2 className="w-32 h-32" />
                   </div>
                   <h3 className="text-xl font-heading font-light mb-6 flex items-center gap-2">
                    Experience Notes
                    <div className="h-px w-8 bg-border flex-1 ml-2" />
                   </h3>
                   <ul className="space-y-4">
                      {event.experienceNotes.map((note, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="font-light">{note}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Visual Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                  {event.gallery.map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage({ eventIndex, imageIndex: i })}
                      className={`relative overflow-hidden rounded-md border border-border/50 group-hover:border-primary/20 transition-colors duration-500 cursor-pointer ${
                        i === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                      }`}
                    >
                      {item.type === "video" ? (
                         <div className="relative w-full h-full bg-black">
                            <video 
                               src={item.src}
                               muted
                               loop
                               playsInline
                               autoPlay
                               className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                               <Play className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
                            </div>
                         </div>
                      ) : (
                         <Image
                           src={item.src}
                           alt={`${event.name} gallery image ${i + 1}`}
                           fill
                           className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                         />
                      )}
                      
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Divider */}
             {eventIndex !== events.length - 1 && (
                <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
             )}

            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 border-none bg-black/95 flex items-center justify-center">
             <DialogClose className="absolute top-4 right-4 z-50 text-white hover:text-white/70">
                <X className="w-8 h-8" />
             </DialogClose>
             
             {selectedImage && (
               <div className="relative w-full h-full flex items-center justify-center">
                  <button 
                    onClick={handlePrev}
                    className="absolute left-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <div className="relative w-full h-full max-h-[85vh] max-w-[85vw] flex items-center justify-center">
                     {events[selectedImage.eventIndex].gallery[selectedImage.imageIndex].type === "video" ? (
                        <video 
                           src={events[selectedImage.eventIndex].gallery[selectedImage.imageIndex].src}
                           controls
                           autoPlay
                           className="max-h-[85vh] max-w-[85vw] outline-none"
                        />
                     ) : (
                         <Image
                           src={events[selectedImage.eventIndex].gallery[selectedImage.imageIndex].src}
                           alt="Gallery Fullscreen"
                           fill
                           className="object-contain"
                           priority
                         />
                     )}
                  </div>

                  <button 
                    onClick={handleNext}
                    className="absolute right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  <div className="absolute bottom-4 left-0 w-full text-center text-white/80 text-sm">
                    {selectedImage.imageIndex + 1} / {events[selectedImage.eventIndex].gallery.length}
                  </div>
               </div>
             )}
        </DialogContent>
      </Dialog>;

      <Contact />
    </main>
  )
}
