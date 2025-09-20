'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage or default to light for first-time visitors
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme
      if (savedTheme) {
        return savedTheme
      }
      // Check if user has visited before by looking for any theme preference
      const hasVisited = localStorage.getItem('hasVisited')
      if (!hasVisited) {
        // First time visitor - default to light mode
        localStorage.setItem('hasVisited', 'true')
        return 'light'
      }
      return 'light' // Default to light mode
    }
    return 'light'
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme)
    // Mark that user has visited and made a choice
    localStorage.setItem('hasVisited', 'true')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
