'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface NavigationProps {
  isMenuOpen: boolean
  onMenuToggle: () => void
}

export default function Navigation({ isMenuOpen, onMenuToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onMenuToggle()
  }

  return (
    <>
      {/* Hamburger Menu Button - Top Left */}
      <button
        onClick={onMenuToggle}
        className={`fixed top-4 left-6 z-50 p-3 bg-black/80 dark:bg-white/80 backdrop-blur-sm rounded-full text-white dark:text-black hover:bg-yellow-400/20 dark:hover:bg-orange-400/20 hover:text-yellow-400 dark:hover:text-orange-400 transition-all duration-500 ${isScrolled ? 'opacity-50' : 'opacity-100'}`}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 dark:bg-white/90 backdrop-blur-md transition-colors duration-300">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 dark:text-orange-400 mb-12 transition-colors duration-300">LONDON CLINGMAN</h1>
              
              <div className="space-y-6">
                <button
                  onClick={() => scrollToSection('stats')}
                  className="block text-2xl md:text-3xl font-medium text-white dark:text-black hover:text-yellow-400 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  STATS
                </button>
                <button
                  onClick={() => scrollToSection('videos')}
                  className="block text-2xl md:text-3xl font-medium text-white dark:text-black hover:text-yellow-400 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  VIDEOS
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-2xl md:text-3xl font-medium text-white dark:text-black hover:text-yellow-400 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-2xl md:text-3xl font-medium text-white dark:text-black hover:text-yellow-400 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
