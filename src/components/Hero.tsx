'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[90vh]">
        {/* Left Hero Section - 2/3 width on desktop */}
        <div className="w-2/3 h-full relative bg-transparent transition-colors duration-300">
        {/* Background Image - London in hockey gear */}
        <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('/7757821833311002603.jpeg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
          }}
        ></div>
        
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-white/60 transition-colors duration-300"></div>

          {/* LC Logo - Top Center of Full Page */}
          <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <img 
              src={theme === 'light' ? "/LC-Logo-White-Square.png" : "/LC-Logo-Balck-Square.png"} 
              alt="LC Logo" 
              className="h-16 w-auto transition-colors duration-300"
            />
          </div>

          {/* Theme Toggle - Top right before scroll */}
          <div className={`fixed top-8 right-8 z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <button
              onClick={toggleTheme}
              className="p-3 bg-black/80 dark:bg-white/80 backdrop-blur-sm rounded-full text-white dark:text-black hover:bg-yellow-400/20 dark:hover:bg-orange-400/20 hover:text-yellow-400 dark:hover:text-orange-400 transition-all duration-300"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Sun icon for light theme, Moon icon for dark theme */}
                {theme === 'light' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>
        </div>

          {/* Main Content - Bottom Left */}
          <div className="absolute bottom-8 left-8 z-10">
          {/* LONDON CLINGMAN Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-5xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>
              LONDON
            </h1>
              <h1 className="text-6xl md:text-5xl lg:text-9xl font-black text-white dark:text-black leading-none transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>
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
                <a 
                  href="https://www.u18femaleaa.ca/stats/player/5367/171/london-clingman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg font-bold text-lg border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300 inline-block"
                >
                  AFHL PLAYER STATS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - 1/3 width with two boxes */}
        <div className="w-1/3 h-full flex flex-col">
          {/* PLAYER INFO Box - Top 50% */}
          <div 
            className="h-1/2 relative bg-cover bg-no-repeat transition-colors duration-300"
            style={{
              backgroundImage: `url('/london-clingman.jpg')`,
              backgroundPosition: 'center top',
              backgroundSize: 'cover'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-white/60 transition-colors duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div>
                <h2 className="text-5xl font-black text-yellow-400 dark:text-orange-400 leading-none mb-4 transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>STUDENT ATHLETE</h2>
                
                <div className="text-white dark:text-black text-xs leading-relaxed mb-4 transition-colors duration-300 space-y-2">
                  <div><strong>Full name:</strong> London Clingman</div>
                  <div><strong>Born:</strong> November 7, 2009</div>
                  <div><strong>Position:</strong> Defence</div>
                  <div><strong>Shoots:</strong> Right</div>
                  <div><strong>Height & Weight:</strong> Approximately 5′7″ and 145 lbs</div>
                  <div><strong>Team(s):</strong> Rocky Mountain Raiders (Alberta Female Hockey League or related divisions: U15 AA, U18 AA, U18 AAA)</div>
                  <div><strong>Home town:</strong> Okotoks, Alberta</div>
                  <div className="pt-2 border-t border-yellow-400/30 dark:border-orange-400/30">
                    <div><strong>Strengths:</strong> Playmaking, Vision, Right Shot Defense, Coachable</div>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300 self-start">
                MEET LONDON →
              </button>
            </div>
          </div>

          {/* NEWS Box - Bottom 50% */}
          <div className="h-1/2 relative bg-black dark:bg-black transition-colors duration-300">
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
              {/* Video Thumbnail with Play Button */}
              <div className="w-full max-w-lg mb-6 relative group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                <div className="relative aspect-video bg-gray-900 dark:bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/7459671353910135796.jpeg" 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 dark:bg-white/40 flex items-center justify-center group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-colors duration-300">
                    <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* VIEW MORE Button */}
              <button 
                onClick={() => {
                  const videoSection = document.getElementById('videos');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                VIEW MORE →
              </button>
            </div>
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
        <div className="h-[70vh] relative bg-transparent transition-colors duration-300">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('/7757821833311002603.jpeg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 dark:bg-white/60 transition-colors duration-300"></div>

          {/* LC Logo - Top Center of Full Page */}
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
            <img 
              src={theme === 'light' ? "/LC-Logo-White-Square.png" : "/LC-Logo-Balck-Square.png"} 
              alt="LC Logo" 
              className="h-12 w-auto transition-colors duration-300"
            />
          </div>

          {/* Theme Toggle - Top right before scroll */}
          <div className="fixed top-6 right-6 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 bg-black/80 dark:bg-white/80 backdrop-blur-sm rounded-full text-white dark:text-black hover:bg-yellow-400/20 dark:hover:bg-orange-400/20 hover:text-yellow-400 dark:hover:text-orange-400 transition-all duration-300"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Sun icon for light theme, Moon icon for dark theme */}
                {theme === 'light' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Main Content - Bottom Left */}
          <div className="absolute bottom-6 left-6 z-10">
            {/* LONDON CLINGMAN Title */}
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl font-black text-white dark:text-black leading-none transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>
                LONDON
              </h1>
              <h1 className="text-5xl sm:text-6xl font-black text-white dark:text-black leading-none transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>
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
              <a 
                href="https://www.u18femaleaa.ca/stats/player/5367/171/london-clingman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300 inline-block"
              >
                AFHL PLAYER STATS
              </a>
              </div>
            </div>
            </div>
            </div>

        {/* Mobile Info Sections */}
        <div className="px-6 py-8 space-y-6">
          {/* PLAYER INFO Mobile Box */}
          <div 
            className="relative bg-cover bg-no-repeat rounded-lg transition-colors duration-300 min-h-[200px]"
            style={{
              backgroundImage: `url('/london-clingman.jpg')`,
              backgroundPosition: 'center top',
              backgroundSize: 'cover'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-white/60 rounded-lg transition-colors duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div>
                <h2 className="text-4xl font-black text-yellow-400 dark:text-orange-400 leading-none mb-4 transition-colors duration-300" style={{fontFamily: 'Arial, sans-serif'}}>STUDENT ATHLETE</h2>
                
                <div className="text-white dark:text-black text-xs leading-relaxed mb-4 transition-colors duration-300 space-y-1">
                  <div><strong>Full name:</strong> London Clingman</div>
                  <div><strong>Born:</strong> November 7, 2009</div>
                  <div><strong>Position:</strong> Defence</div>
                  <div><strong>Shoots:</strong> Right</div>
                  <div><strong>Height & Weight:</strong> Approximately 5′7″ and 145 lbs</div>
                  <div><strong>Team(s):</strong> Rocky Mountain Raiders (Alberta Female Hockey League or related divisions: U15 AA, U18 AA, U18 AAA)</div>
                  <div><strong>Home town:</strong> Okotoks, Alberta</div>
                  <div className="pt-2 border-t border-yellow-400/30 dark:border-orange-400/30">
                    <div><strong>Strengths:</strong> Playmaking, Vision, Right Shot Defense, Coachable</div>
            </div>
            </div>
            </div>
              
              <button className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300 self-start">
                MEET LONDON →
              </button>
            </div>
          </div>
          
          {/* NEWS Mobile Box */}
          <div className="relative bg-black dark:bg-black rounded-lg transition-colors duration-300 min-h-[200px]">
            
            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center">
              {/* Video Thumbnail with Play Button */}
              <div className="w-full max-w-lg mb-6 relative group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                <div className="relative aspect-video bg-gray-900 dark:bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/7459671353910135796.jpeg" 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 dark:bg-white/40 flex items-center justify-center group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-colors duration-300">
                    <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* VIEW MORE Button */}
              <button 
                onClick={() => {
                  const videoSection = document.getElementById('videos');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 rounded-lg font-bold text-sm border-2 border-yellow-400 dark:border-orange-400 text-yellow-400 dark:text-orange-400 hover:bg-yellow-400 dark:hover:bg-orange-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                VIEW MORE →
          </button>
            </div>
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

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 dark:bg-white/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-gray-900 dark:bg-gray-900 rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 dark:bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white dark:text-black hover:bg-black/70 dark:hover:bg-white/70 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&autoplay=1"
              title="London Clingman Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}