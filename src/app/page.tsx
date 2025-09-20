'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import VideoGallery from '@/components/VideoGallery'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import StickyHeader from '@/components/StickyHeader'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-black dark:bg-white transition-colors duration-300">
        <Navigation isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        <StickyHeader onMenuToggle={handleMenuToggle} />
        <Hero />
        <About />
        <VideoGallery />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
