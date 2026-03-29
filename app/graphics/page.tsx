"use client"

import { useState } from "react"
import { motion } from "framer-motion"
 
import { Contact } from "@/components/contact"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

// Graphic Categories Data
const graphicCategories = [
  {
    title: "Logos",
    items: [
      { id: 1, title: "Brand Identity Logo", src: "/placeholder.svg", alt: "Logo Design 1" },
      { id: 2, title: "Tech Startup Logo", src: "/placeholder.svg", alt: "Logo Design 2" },
      { id: 3, title: "Minimalist Logo", src: "/placeholder.svg", alt: "Logo Design 3" },
    ]
  },
  {
    title: "Thumbnails",
    items: [
      { id: 4, title: "YouTube Thumbnail Gaming", src: "/placeholder.svg", alt: "Thumbnail 1" },
      { id: 5, title: "Podcast Thumbnail", src: "/placeholder.svg", alt: "Thumbnail 2" },
    ]
  },
  {
    title: "Social Media Posts",
    items: [
      { id: 6, title: "Instagram Carousel", src: "/placeholder.svg", alt: "Social Media Post 1" },
      { id: 7, title: "Twitter Graphic", src: "/placeholder.svg", alt: "Social Media Post 2" },
    ]
  },
  {
    title: "Banners",
    items: [
      { id: 8, title: "Website Hero Banner", src: "/placeholder.svg", alt: "Banner Design 1" },
      { id: 9, title: "LinkedIn Cover", src: "/placeholder.svg", alt: "Banner Design 2" },
    ]
  },
  {
    title: "Posters",
    items: [
      { id: 10, title: "Event Poster", src: "/placeholder.svg", alt: "Poster Design 1" },
      { id: 11, title: "Movie Poster Concept", src: "/placeholder.svg", alt: "Poster Design 2" },
    ]
  },
]

export default function GraphicsPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  return (
    <main className="relative min-h-screen bg-background">
 

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
           Graphic <span className="italic text-primary/80">Design.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Branding collaterals and visual storytelling.
          </motion.p>
        </div>
      </section>

      {/* Categories & Graphics */}
      <section className="pb-24 px-6 container mx-auto space-y-24">
        {graphicCategories.map((category, index) => (
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

            {/* Graphics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative aspect-square bg-muted/30 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                >
                   {/* Image */}
                   <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                   />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                  
                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <Image
               src={selectedImage.src}
               alt={selectedImage.title}
               fill
               className="object-contain"
               priority
             />
          </div>
          
          <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
            <h3 className="text-white text-xl font-light tracking-wide bg-black/50 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}

      <Contact />
    </main>
  )
}
