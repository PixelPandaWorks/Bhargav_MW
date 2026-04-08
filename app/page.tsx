 
import { Hero } from "@/components/hero"
import { Signature } from "@/components/signature"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { HorizontalScroll } from "@/components/horizontal-scroll"

export default function Home() {
  return (
    <main className="relative min-h-screen">
 
      <Hero />
      <HorizontalScroll ids={['', 'services', 'work', 'about', 'contact']}>
        <Signature />
        <Skills />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </HorizontalScroll>
    </main>
  )
}
