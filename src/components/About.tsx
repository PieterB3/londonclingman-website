export default function About() {
  return (
    <section id="about" className="py-20 bg-black dark:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-400 dark:text-orange-400 mb-6 animate-slide-up transition-colors duration-300">
            ABOUT LONDON
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
                  <div className="absolute inset-2 bg-black dark:bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/1621583464374619681.JPG.jpeg" 
                      alt="London Clingman" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">LONDON CLINGMAN</h4>
                <p className="text-yellow-400 dark:text-orange-400 text-lg font-medium transition-colors duration-300">Student Athlete</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 dark:bg-orange-400 rounded-full animate-pulse transition-colors duration-300"></div>
                  <div className="w-2 h-2 bg-yellow-500 dark:bg-orange-500 rounded-full animate-pulse transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-yellow-600 dark:bg-orange-600 rounded-full animate-pulse transition-colors duration-300" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
