"use client"

import { useState } from "react"
import { motion } from "framer-motion"
 
import { Contact } from "@/components/contact"
import { Play, X, Eye, Heart, Instagram } from "lucide-react"

// Video Categories Data
const videoCategories = [
  {
    title: "Motion Graphics",
    aspect: "aspect-[4/5]",
    videos: [
      { id: "ai1", title: "AI Concept", src: "https://drive.google.com/file/d/1WVSMy2cY7OB9qwAwp7a6HSWsekBA16f7/preview", type: "iframe" },
      { id: "ai2", title: "Motion Sequence", src: "https://drive.google.com/file/d/16i6WOKHkI9NmTVGA3btiuH8fkW4PFBdn/preview", type: "iframe" },
    ]
  },
  {
    title: "Healthcare",
    aspect: "aspect-[4/5]",
    videos: [
      { id: "h1", title: "Healthcare Overview", src: "https://drive.google.com/file/d/1NOG04tj_JDDXRYLkOR-7fWnL_83EwO1Y/preview", type: "iframe" },
      { id: "h2", title: "Facility Showcase", src: "https://drive.google.com/file/d/1_YafE48IKFMN9SSEQ0c8AP_mBkXV5Wk-/preview", type: "iframe" },
      { id: "h3", title: "Patient Care", src: "https://drive.google.com/file/d/1q_WQQMzuQa9nwtZItt2N-L8YH4-zNqOV/preview", type: "iframe" },
      { id: "h4", title: "Medical Promo", src: "https://drive.google.com/file/d/1BZlYPzuUc_FYvKlmk6NnIR7h02Aa6zON/preview", type: "iframe" },
    ]
  },
  {
    title: "Real Estate and Interior",
    aspect: "aspect-[4/5]",
    videos: [
      { id: "re1", title: "Property Walkthrough", src: "https://drive.google.com/file/d/14nTCeScDY5fwVGNOVYOtQCctIs7UOOEQ/preview", type: "iframe" },
      { id: "re2", title: "Interior Design", src: "https://drive.google.com/file/d/1L8zEt3nP7vHzm1yY7XPFXIt0wMYWAOHB/preview", type: "iframe" },
      { id: "re3", title: "Luxury Apartment", src: "https://drive.google.com/file/d/1tjv2JXC1p3_5fQXEC3K8LRBY8nW3hQP5/preview", type: "iframe" },
    ]
  },
  {
    title: "Podcasts",
    aspect: "aspect-video",
    videos: [
      { id: "p1", title: "Podcast 1", src: "https://www.youtube.com/embed/OIfB2ESm0sc?si=5vCS9MMK6yMeb9xD", type: "iframe" },
      { id: "p2", title: "Podcast 2", src: "https://www.youtube.com/embed/EpL6Wfa2ejU?si=XJz3JY_kSkLIf3fg", type: "iframe" },
      { id: "p3", title: "Podcast 3", src: "https://www.youtube.com/embed/BkGNZ9vpFCM?si=IkQrevVjhie8xN47", type: "iframe" },
      { id: "p4", title: "Podcast 4", src: "https://www.youtube.com/embed/DiTxhCLSEPA?si=rzUTh38XjWx-_L9V", type: "iframe" },
    ]
  },
  {
    title: "Podcast Reels",
    aspect: "aspect-[9/16]",
    videos: [
      { id: "pr1", title: "Podcast Reel 1", src: "https://drive.google.com/file/d/1YAwC4EXtU7sQLEu1d1yrO8h6kAglXYnj/preview", type: "iframe" },
      { id: "pr2", title: "Podcast Reel 2", src: "https://drive.google.com/file/d/1BwqknBRdLZ2V0eyXtd69fr3Tb8QZFG2n/preview", type: "iframe" },
    ]
  },
  {
    title: "Educational",
    aspect: "aspect-[4/5]",
    videos: [
      { id: "e1", title: "Educational Video", src: "https://drive.google.com/file/d/1dk2lg4uJCaCLhtE7aFHqEYPQ_kb7BCIx/preview", type: "iframe" },
    ]
  },
  {
    title: "Business",
    aspect: "aspect-[4/5]",
    videos: [
      { id: "b1", title: "Business Promo", src: "https://drive.google.com/file/d/1XR1BpKmilHjqTcJb4HgyPplCg7aAksRR/preview", type: "iframe" },
      { id: "b2", title: "Corporate Video", src: "https://drive.google.com/file/d/1Q-7Q_HxYF0JhKc5prm8HdppGBJ16wjnz/preview", type: "iframe" },
    ]
  }
]

// Instagram Reels Data
const instagramReels = [
  {
    id: "r1",
    title: "Instagram Reel",
    url: "https://www.instagram.com/reel/DWa-XlJD204/",
    thumbnail: "/placeholder.svg",
    views: "5M",
    likes: "100K"
  },
  {
    id: "r2",
    title: "Instagram Reel",
    url: "https://www.instagram.com/reel/DWQXGFQjbAq/",
    thumbnail: "/placeholder.svg",
    views: "2.1M",
    likes: "45K"
  },
  {
    id: "r3",
    title: "Instagram Reel",
    url: "https://www.instagram.com/reel/DWJHWRODdKe/",
    thumbnail: "/placeholder.svg",
    views: "850K",
    likes: "32K"
  },
  {
    id: "r4",
    title: "Instagram Reel",
    url: "https://www.instagram.com/reel/DWjG2cJjESp/",
    thumbnail: "/placeholder.svg",
    views: "500K",
    likes: "15K"
  }
]

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string, isReel?: boolean } | null>(null)

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

      {/* Short Form / Reels */}
      <section className="pb-16 pt-12 px-6 container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-light flex items-center gap-3">
              <Instagram className="w-8 h-8 text-pink-500" />
              Reels & Shorts
            </h2>
            <div className="h-px bg-border flex-1 opacity-50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramReels.map((reel) => (
              <div 
                key={reel.id} 
                className="group relative w-full h-[580px] bg-muted/30 rounded-xl overflow-hidden shadow-lg flex flex-col border border-border/50 transition-all hover:border-primary/50"
              >
                <div className="flex-1 w-full relative bg-zinc-950">
                  <iframe 
                    src={`${reel.url}embed`}
                    className="absolute inset-0 w-full h-full border-none"
                    allowTransparency
                    allowFullScreen
                    scrolling="no"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {category.videos.map((video) => {
                if (video.type === "iframe" || video.type === "youtube") {
                  return (
                    <div key={video.id} className={`w-full ${category.aspect || "aspect-video"} rounded-lg overflow-hidden shadow-lg border border-border/50 bg-black`}>
                      <iframe 
                        src={video.src}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        loading="lazy"
                      />

                    </div>
                  );
                }

                return (
                  <div 
                    key={video.id} 
                    className={`group relative ${category.aspect || "aspect-video"} bg-muted/30 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all cursor-pointer`}
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
                )
              })}
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
          
          <div className={`w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 relative flex items-center justify-center ${
            selectedVideo.isReel ? "max-w-md aspect-[9/16] h-[80vh] md:h-[90vh]" : "max-w-5xl aspect-video"
          }`}>
             {selectedVideo.isReel ? (
               <iframe 
                 src={`${selectedVideo.src}embed`} 
                 className="w-full h-full border-none"
                 allowTransparency
                 allowFullScreen
               />
             ) : (
               <video 
                 src={selectedVideo.src} 
                 controls 
                 autoPlay 
                 className="w-full h-full object-contain"
               >
                 Your browser does not support the video tag.
               </video>
             )}
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
