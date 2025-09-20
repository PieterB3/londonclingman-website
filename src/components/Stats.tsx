'use client'

import { useEffect, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats')
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="stats" className="py-20 bg-black dark:bg-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - STATS Title */}
            <div className="lg:col-span-1 flex items-center">
              <h2 className="text-8xl font-black text-yellow-400 dark:text-orange-400 transform -rotate-90 lg:rotate-0 transition-colors duration-300">
                STATS
              </h2>
            </div>

            {/* Right Column - Stats Data */}
            <div className="lg:col-span-2">
              {/* Main Stats Row */}
              <div className="grid grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">15</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GOALS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">22</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">ASSISTS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">3.8</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 dark:text-orange-400 mb-2 transition-colors duration-300">8</div>
                  <div className="text-sm text-gray-300 dark:text-gray-600 uppercase tracking-wider transition-colors duration-300">YEARS</div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-yellow-400 dark:border-orange-400 mb-8 transition-colors duration-300"></div>

              {/* Detailed Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-black mb-4 transition-colors duration-300">GOALS</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Even Strength:</span>
                      <span className="text-white dark:text-black font-semibold transition-colors duration-300">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Power Play:</span>
                      <span className="text-white dark:text-black font-semibold transition-colors duration-300">3</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-black mb-4 transition-colors duration-300">ASSISTS</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Primary:</span>
                      <span className="text-white dark:text-black font-semibold transition-colors duration-300">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Secondary:</span>
                      <span className="text-white dark:text-black font-semibold transition-colors duration-300">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="bg-gray-900 dark:bg-white rounded-lg p-8 transition-colors duration-300">
            <h3 className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-8 text-center transition-colors duration-300">
              SEASON HIGHLIGHTS
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">+15</div>
                <div className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Plus/Minus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">85%</div>
                <div className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Faceoff Win %</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">24</div>
                <div className="text-gray-300 dark:text-gray-600 transition-colors duration-300">Games Played</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
