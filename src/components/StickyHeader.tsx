'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface StickyHeaderProps {
  onMenuToggle: () => void
}

export default function StickyHeader({ onMenuToggle }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 100) // Show after scrolling 100px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 border-b border-yellow-400/20 dark:border-orange-400/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`} style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu Button - Far left */}
          <button
            onClick={onMenuToggle}
            className="p-2 bg-black/80 dark:bg-white/80 backdrop-blur-sm rounded-full text-white dark:text-black hover:bg-yellow-400/20 dark:hover:bg-orange-400/20 hover:text-yellow-400 dark:hover:text-orange-400 transition-all duration-300"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* LC Logo - Centered */}
          <img 
                src={theme === 'light' ? "/LC-Logo-White-Square.png" : "/LC-Logo-Balck-Square.png"}
            alt="LC Logo" 
            className="h-8 w-auto transition-opacity duration-500"
          />
          
          {/* Theme Toggle Button - Far right */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-black/80 dark:bg-white/80 backdrop-blur-sm rounded-full text-white dark:text-black hover:bg-yellow-400/20 dark:hover:bg-orange-400/20 hover:text-yellow-400 dark:hover:text-orange-400 transition-all duration-300"
          >
            <span className="sr-only">Toggle theme</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
