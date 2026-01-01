import type React from "react"
import type { Metadata } from "next"
// Replacing Space Grotesk with Cormorant Garamond for light serif headings
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"

// Using light weight (300) Cormorant Garamond for elegant, thin serif headings
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Freelance Creative Expert | Portfolio",
  description:
    "Multi-disciplinary creative professional specializing in Video Editing, Web Development, and AI Automation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} font-body antialiased selection:bg-muted md:cursor-none`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CustomCursor />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
