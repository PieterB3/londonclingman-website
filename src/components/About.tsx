'use client'

import { useState, useEffect } from 'react'

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/london-clingman-portrait.jpg',
      title: 'THE ATHLETE',
      description: 'A dedicated hockey player with exceptional defensive skills, vision, and playmaking ability. London brings intensity and leadership to every game.'
    },
    {
      image: '/1621583464374619681.JPG.jpeg',
      title: 'THE STUDENT',
      description: 'Balancing academic excellence with athletic performance, London maintains high standards in both the classroom and on the ice.'
    },
    {
      image: '/7757821833311002603.jpeg',
      title: 'THE PERSON',
      description: 'A determined young athlete from Okotoks who fell in love with hockey and became a dedicated student-athlete with strong character.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden transition-colors duration-300">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-400 dark:text-orange-400 mb-6 animate-slide-up transition-colors duration-300">
            MEET LONDON
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto animate-slide-up transition-colors duration-300" style={{animationDelay: '0.2s'}}>
            Discover the journey of a dedicated student-athlete
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-8 transition-colors duration-300">
              <span className="text-yellow-400 dark:text-orange-400">STUDENT & ATHLETE</span>
            </h3>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-8 leading-relaxed transition-colors duration-300">
              London is a dedicated student-athlete who balances academic excellence with athletic performance. 
              With a strong work ethic and commitment to both studies and hockey, London represents the ideal 
              combination of intellectual curiosity and athletic prowess.
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-8 leading-relaxed transition-colors duration-300">
              On the ice, London demonstrates exceptional skill, leadership, and sportsmanship. Off the ice, 
              London maintains high academic standards and is actively involved in school and community activities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-yellow-400 dark:bg-orange-400 rounded-full mr-4 group-hover:animate-pulse transition-colors duration-300"></div>
                <span className="text-white dark:text-black text-lg transition-colors duration-300">Strong academic performance</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-yellow-400 dark:bg-orange-400 rounded-full mr-4 group-hover:animate-pulse transition-colors duration-300"></div>
                <span className="text-white dark:text-black text-lg transition-colors duration-300">Dedicated hockey player</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-yellow-400 dark:bg-orange-400 rounded-full mr-4 group-hover:animate-pulse transition-colors duration-300"></div>
                <span className="text-white dark:text-black text-lg transition-colors duration-300">Team leadership qualities</span>
              </div>
              <div className="flex items-center group">
                <div className="w-3 h-3 bg-yellow-400 dark:bg-orange-400 rounded-full mr-4 group-hover:animate-pulse transition-colors duration-300"></div>
                <span className="text-white dark:text-black text-lg transition-colors duration-300">Community involvement</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-right">
            <div className="relative">
              <div className="bg-glass rounded-2xl p-8 text-center hover-lift">
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <div className="absolute inset-0 bg-yellow-400 dark:bg-orange-400 rounded-full animate-pulse-slow transition-colors duration-300"></div>
                  <div className="absolute inset-2 bg-black dark:bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={slides[currentSlide].image} 
                      alt="London Clingman" 
                      className="w-full h-full object-cover rounded-full transition-opacity duration-500"
                    />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">{slides[currentSlide].title}</h4>
                <p className="text-yellow-400 dark:text-orange-400 text-lg font-medium transition-colors duration-300 mb-4">Student Athlete</p>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed transition-colors duration-300">{slides[currentSlide].description}</p>
                <div className="mt-6 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide 
                          ? 'bg-yellow-400 dark:bg-orange-400' 
                          : 'bg-yellow-400/30 dark:bg-orange-400/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Strengths Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-yellow-400 dark:text-orange-400 mb-6 transition-colors duration-300">
              HOCKEY STRENGTHS
            </h3>
            <p className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Key attributes that make London a standout player
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Vision & Anticipation
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Sees the ice well, reads plays before they unfold, positions herself to intercept or disrupt opponent's plans.
                </p>
              </div>

              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Playmaking from Defense
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Strong playmaker from the back end — good at initiating breakout, setting up teammates, and transitioning from defence to offence.
                </p>
              </div>

              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Right-Shot Advantage
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Right-shot defence with reliable puck movement — very valuable because right-shot defenders are rarer; good at making clean passes under pressure.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Defensive Instincts
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Solid gap control and defensive instincts — able to judge when to step up, when to hold back, challenge vs contain.
                </p>
              </div>

              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Composure Under Pressure
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Calm under pressure — keeps composure even when opponents are forechecking hard; makes smart decisions rather than rushed ones.
                </p>
              </div>

              <div className="bg-glass rounded-xl p-6 hover-lift">
                <h4 className="text-xl font-bold text-yellow-400 dark:text-orange-400 mb-3 transition-colors duration-300">
                  Physical Readiness
                </h4>
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed transition-colors duration-300">
                  Physical readiness + agility — able to skate well, pivot, maintain balance and strength in board battles or defensive zone scrambles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
