'use client'

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden transition-colors duration-300">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-400 dark:text-orange-400 mb-6 animate-slide-up transition-colors duration-300">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto animate-slide-up transition-colors duration-300" style={{animationDelay: '0.2s'}}>
            Interested in learning more about London? Contact us for more information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-12 text-center transition-colors duration-300">
              CONTACT INFORMATION
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">EMAIL</h4>
                <a href="mailto:londonclingman@gmail.com" className="text-yellow-400 dark:text-orange-400 text-lg hover:underline transition-colors duration-300">
                  londonclingman@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">PHONE</h4>
                <a href="tel:+14036011620" className="text-yellow-400 dark:text-orange-400 text-lg hover:underline transition-colors duration-300">
                  (403) 601-1620
                </a>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white dark:text-black mb-2 transition-colors duration-300">LOCATION</h4>
                <p className="text-yellow-400 dark:text-orange-400 text-lg transition-colors duration-300">Okotoks, Alberta, Canada</p>
              </div>
            </div>

            <div className="bg-glass rounded-2xl p-8 hover-lift">
              <h4 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-6 flex items-center justify-center transition-colors duration-300">
                <span className="text-3xl mr-3">🎯</span>
                FOR SCOUTS & RECRUITERS
              </h4>
              <p className="text-gray-300 dark:text-gray-600 mb-6 text-lg text-center transition-colors duration-300">
                London is actively seeking opportunities to play at the next level. 
                We welcome inquiries from college coaches, scouts, and recruiters.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/20 dark:from-orange-400/20 to-yellow-600/20 dark:to-orange-600/20 p-6 rounded-xl border border-yellow-400/30 dark:border-orange-400/30 transition-colors duration-300">
                <p className="text-yellow-300 dark:text-orange-300 text-lg text-center transition-colors duration-300">
                  <strong className="text-white dark:text-black">Available for:</strong> College visits, interviews, additional video footage, 
                  academic transcripts, and references upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
