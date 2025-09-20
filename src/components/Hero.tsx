'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="h-[90vh] bg-black dark:bg-white flex flex-col lg:flex-row transition-colors duration-300">
      {/* Left Hero Section - 2/3 width on desktop, full width on mobile/tablet */}
      <div className="w-full lg:w-2/3 h-full lg:h-full relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-white transition-colors duration-300">
        {/* Background Image - London in hockey gear */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/1191934606088320375.JPG.jpeg')`
          }}
        ></div>
        
        {/* LC Logo - Top Middle - Fades out on scroll */}
        <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-4xl font-light text-white dark:text-black transition-colors duration-300" style={{fontFamily: 'serif', fontStyle: 'italic'}}>LC</span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
          {/* LONDON CLINGMAN Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300">
              LONDON
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300">
              CLINGMAN
            </h1>
          </div>

          {/* Stats Table */}
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center mb-6 md:mb-8">
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">15</div>
                <div className="text-xs md:text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GOALS</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">3.8</div>
                <div className="text-xs md:text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GPA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">8</div>
                <div className="text-xs md:text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">YEARS</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">100%</div>
                <div className="text-xs md:text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">DEDICATION</div>
              </div>
            </div>
            
            {/* AFHL Player Stats Button */}
            <div className="text-center">
              <button className="px-4 md:px-8 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg bg-yellow-400 dark:bg-orange-400 text-black dark:text-white hover:bg-yellow-300 dark:hover:bg-orange-300 transition-colors duration-300">
                AFHL PLAYER STATS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - 1/3 width with two boxes - Hidden on mobile/tablet */}
      <div className="hidden lg:flex w-1/3 h-full flex-col">
        {/* MEET LONDON Box - Top 50% */}
        <div className="h-1/2 bg-gray-800 dark:bg-white p-8 flex flex-col justify-center transition-colors duration-300">
          <h2 className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-6 transition-colors duration-300">MEET LONDON</h2>
          
          <div className="space-y-3 text-white dark:text-black transition-colors duration-300">
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Birth Year:</span>
              <span className="font-semibold">2008</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Grad Year:</span>
              <span className="font-semibold">2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Position:</span>
              <span className="font-semibold">Forward</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Shot:</span>
              <span className="font-semibold">Right</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Height:</span>
              <span className="font-semibold">5'8"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Weight:</span>
              <span className="font-semibold">140 lbs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Hometown:</span>
              <span className="font-semibold">Okotoks, AB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Current Team:</span>
              <span className="font-semibold">Calgary Fire</span>
            </div>
          </div>
          
          <button className="mt-8 bg-yellow-400 dark:bg-orange-400 text-black dark:text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 dark:hover:bg-orange-300 transition-colors duration-300">
            LEARN MORE →
          </button>
        </div>

        {/* WATCH Box - Bottom 50% */}
        <div className="h-1/2 bg-gray-900 dark:bg-white p-8 flex flex-col justify-center transition-colors duration-300">
          <h2 className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-6 transition-colors duration-300">WATCH</h2>
          
          {/* Video Placeholder */}
          <div className="aspect-video bg-gray-700 dark:bg-gray-200 rounded-lg mb-6 flex items-center justify-center transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <svg className="w-8 h-8 text-black dark:text-white ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-300 dark:text-gray-600 transition-colors duration-300">London's Latest Highlights</p>
            </div>
          </div>
          
          <button className="bg-yellow-400 dark:bg-orange-400 text-black dark:text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 dark:hover:bg-orange-300 transition-colors duration-300">
            MORE VIDEOS →
          </button>
        </div>
      </div>
    </div>
  )
}