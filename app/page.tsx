import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Signature } from "@/components/signature"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Signature />
      <Skills />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}
