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
    <div className="min-h-screen bg-black dark:bg-white transition-colors duration-300">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[90vh]">
        {/* Left Hero Section - 2/3 width on desktop */}
        <div className="w-2/3 h-full relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-white transition-colors duration-300">
          {/* Background Image - London in hockey gear */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('/1191934606088320375.JPG.jpeg')`
            }}
          ></div>
          
          {/* LC Logo - Top Middle - Fades out on scroll */}
          <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-4xl font-light text-white dark:text-black transition-colors duration-300" style={{fontFamily: 'serif', fontStyle: 'italic'}}>LC</span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
            {/* LONDON CLINGMAN Title */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300">
                LONDON
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300">
                CLINGMAN
              </h1>
            </div>

            {/* Stats Table */}
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-4 gap-8 text-center mb-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">15</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GOALS</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">3.8</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GPA</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">8</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">YEARS</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">100%</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">DEDICATION</div>
                </div>
              </div>
              
              {/* AFHL Player Stats Button */}
              <div className="text-center">
                <button className="px-8 py-3 rounded-lg font-bold text-lg border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  AFHL PLAYER STATS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 1/3 width with two boxes */}
        <div className="w-1/3 h-full flex flex-col">
          {/* MEET LONDON Box - Top 50% */}
          <div className="h-1/2 bg-gray-800 dark:bg-gray-100 p-6 flex flex-col justify-start overflow-y-auto transition-colors duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-4 transition-colors duration-300">MEET LONDON</h2>
            
            <div className="space-y-2 text-white dark:text-black transition-colors duration-300 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Birth Year:</span>
                <span className="font-semibold">2008</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Grad Year:</span>
                <span className="font-semibold">2026</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Position:</span>
                <span className="font-semibold">Forward</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Shot:</span>
                <span className="font-semibold">Right</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Height:</span>
                <span className="font-semibold">5'8"</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Weight:</span>
                <span className="font-semibold">140 lbs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Hometown:</span>
                <span className="font-semibold">Okotoks, AB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Current Team:</span>
                <span className="font-semibold">Calgary Fire</span>
              </div>
            </div>
            
            <button className="mt-4 border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
              LEARN MORE →
            </button>
          </div>

          {/* WATCH Box - Bottom 50% */}
          <div className="h-1/2 bg-gray-900 dark:bg-gray-200 p-3 flex flex-col transition-colors duration-300">
            <h2 className="text-lg font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">WATCH</h2>
            
            {/* Video Placeholder */}
            <div className="flex-1 bg-gray-700 dark:bg-gray-300 rounded-lg flex items-center justify-center transition-colors duration-300 mb-3">
              <div className="text-center">
                <div className="w-8 h-8 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors duration-300">
                  <svg className="w-4 h-4 text-black dark:text-white ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-300 dark:text-gray-600 text-xs transition-colors duration-300">London's Latest Highlights</p>
              </div>
            </div>
            
            <button className="border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 px-3 py-2 rounded-lg font-bold text-xs hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
              MORE VIDEOS →
            </button>
          </div>
        </div>
      </div>

      {/* Second Row - Two Boxes with Reversed Widths */}
      <div className="hidden lg:flex h-96">
        {/* Left Box - 33.33% width */}
        <div 
          className="w-1/3 p-6 flex flex-col justify-end transition-colors duration-300 relative border-r border-yellow-400/30 dark:border-orange-400/30"
          style={{
            backgroundImage: `url('/1621583464374619681.JPG.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-white/40 transition-colors duration-300"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">QUICK STATS</h3>
            <p className="text-white dark:text-black text-sm transition-colors duration-300">Key Performance Metrics</p>
          </div>
        </div>
        
        {/* Right Box - 66.67% width */}
        <div 
          className="w-2/3 p-6 flex flex-col justify-end transition-colors duration-300 relative"
          style={{
            backgroundImage: `url('/3823040932616092287.JPG.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-white/40 transition-colors duration-300"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">LATEST ACHIEVEMENTS</h3>
            <p className="text-white dark:text-black text-sm transition-colors duration-300">Recent Highlights & Recognition</p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Hero Section */}
        <div className="h-[70vh] relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-white transition-colors duration-300">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('/1191934606088320375.JPG.jpeg')`
            }}
          ></div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
            {/* LONDON CLINGMAN Title */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-black text-white dark:text-black leading-none transition-colors duration-300">
                LONDON
              </h1>
              <h1 className="text-4xl sm:text-5xl font-black text-white dark:text-black leading-none transition-colors duration-300">
                CLINGMAN
              </h1>
            </div>

            {/* Stats Table */}
            <div className="w-full max-w-sm">
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-1 transition-colors duration-300">15</div>
                  <div className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GOALS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-1 transition-colors duration-300">3.8</div>
                  <div className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-1 transition-colors duration-300">8</div>
                  <div className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">YEARS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-1 transition-colors duration-300">100%</div>
                  <div className="text-xs text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">DEDICATION</div>
                </div>
              </div>
              
              {/* AFHL Player Stats Button */}
              <div className="text-center">
                <button className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  AFHL PLAYER STATS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Info Sections */}
        <div className="px-6 py-8 space-y-6">
          {/* MEET LONDON Mobile Box */}
          <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-4 transition-colors duration-300">MEET LONDON</h2>
            
            <div className="grid grid-cols-2 gap-3 text-white dark:text-black transition-colors duration-300">
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Birth Year:</span>
                <span className="font-semibold text-sm">2008</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Grad Year:</span>
                <span className="font-semibold text-sm">2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Position:</span>
                <span className="font-semibold text-sm">Forward</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Shot:</span>
                <span className="font-semibold text-sm">Right</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Height:</span>
                <span className="font-semibold text-sm">5'8"</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Weight:</span>
                <span className="font-semibold text-sm">140 lbs</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Hometown:</span>
                <span className="font-semibold text-sm">Okotoks, AB</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">Current Team:</span>
                <span className="font-semibold text-sm">Calgary Fire</span>
              </div>
            </div>
            
            <button className="mt-6 w-full border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
              LEARN MORE →
            </button>
          </div>

          {/* WATCH Mobile Box */}
          <div className="bg-gray-900 dark:bg-gray-200 p-6 rounded-lg transition-colors duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-4 transition-colors duration-300">WATCH</h2>
            
            {/* Video Placeholder */}
            <div className="aspect-video bg-gray-700 dark:bg-gray-300 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                  <svg className="w-6 h-6 text-black dark:text-white ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">London's Latest Highlights</p>
              </div>
            </div>
            
            <button className="w-full border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300">
              MORE VIDEOS →
            </button>
          </div>
        </div>

        {/* Mobile Second Row - Two Boxes */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Quick Stats Mobile Box */}
            <div 
              className="p-6 transition-colors duration-300 min-h-[200px] flex flex-col justify-end relative"
              style={{
                backgroundImage: `url('/1621583464374619681.JPG.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/40 dark:bg-white/40 transition-colors duration-300"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">QUICK STATS</h3>
                <p className="text-white dark:text-black text-sm transition-colors duration-300">Key Performance Metrics</p>
              </div>
            </div>
            
            {/* Latest Achievements Mobile Box */}
            <div 
              className="p-6 transition-colors duration-300 min-h-[200px] flex flex-col justify-end relative"
              style={{
                backgroundImage: `url('/3823040932616092287.JPG.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/40 dark:bg-white/40 transition-colors duration-300"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">LATEST ACHIEVEMENTS</h3>
                <p className="text-white dark:text-black text-sm transition-colors duration-300">Recent Highlights & Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}