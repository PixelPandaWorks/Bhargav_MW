"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import { Play, X } from "lucide-react"

// Video Categories Data
const videoCategories = [
  {
    title: "Healthcare",
    videos: [
      { id: 1, title: "Healthcare Promo", src: "/videos/healthcare-promo.mp4", thumbnail: "/placeholder.svg" },
      { id: 2, title: "Medical Facility Tour", src: "/videos/medical-facility.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Real Estate",
    videos: [
      { id: 3, title: "Luxury Apartment Walkthrough", src: "/videos/luxury-apartment.mp4", thumbnail: "/placeholder.svg" },
      { id: 4, title: "Property Showcase", src: "/videos/property-showcase.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Podcasts",
    videos: [
      { id: 5, title: "Tech Talk Ep. 1", src: "/videos/podcast-ep1.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Vlogs",
    videos: [
      { id: 6, title: "Day in the Life", src: "/videos/vlog-day-1.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Business Products",
    videos: [
      { id: 7, title: "Product Launch", src: "/videos/product-launch.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Schools",
    videos: [
      { id: 8, title: "School Annual Day", src: "/videos/school-annual-day.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Events",
    videos: [
      { id: 9, title: "Corporate Event", src: "/videos/corporate-event.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
  {
    title: "Motion Graphics",
    videos: [
      { id: 10, title: "Logo Animation", src: "/videos/logo-animation.mp4", thumbnail: "/placeholder.svg" },
    ]
  },
]

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null)

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0 z-0 bg-muted/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/50 to-background opacity-70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-heading font-light mb-6 tracking-tight"
          >
            Video <span className="italic text-primary/80">Gallery.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Capabilities across industries.
          </motion.p>
        </div>
      </section>

      {/* Categories & Videos */}
      <section className="pb-24 px-6 container mx-auto space-y-24">
        {videoCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-light">{category.title}</h2>
              <div className="h-px bg-border flex-1 opacity-50" />
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative aspect-video bg-muted/30 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setSelectedVideo({ src: video.src, title: video.title })}
                >
                  {/* Thumbnail / Placeholder */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>

                  {/* Video Title */}
                  <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-medium text-lg">{video.title}</h3>
                  </div>

                  {/* Would be an Image component in real scenario */}
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
                    {/* Placeholder for thumbnail */}
                    Video Thumbnail
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Video Lightbox */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 relative">
             <video 
               src={selectedVideo.src} 
               controls 
               autoPlay 
               className="w-full h-full object-contain"
             >
               Your browser does not support the video tag.
             </video>
          </div>
          
          <div className="absolute bottom-8 left-0 w-full text-center">
            <h3 className="text-white text-xl font-light tracking-wide">{selectedVideo.title}</h3>
          </div>
        </div>
      )}

      <Contact />
    </main>
  )
}
