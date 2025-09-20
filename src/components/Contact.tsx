'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    scout: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '', scout: false })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-black dark:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-400 dark:text-orange-400 mb-6 animate-slide-up transition-colors duration-300">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto animate-slide-up transition-colors duration-300" style={{animationDelay: '0.2s'}}>
            Interested in learning more about London? Contact us for more information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h3 className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-8 transition-colors duration-300">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white dark:text-black transition-colors duration-300">EMAIL</h4>
                  <p className="text-yellow-400 dark:text-orange-400 text-lg transition-colors duration-300">contact@londonclingman.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white dark:text-black transition-colors duration-300">PHONE</h4>
                  <p className="text-yellow-400 dark:text-orange-400 text-lg transition-colors duration-300">(403) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:animate-pulse transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white dark:text-black transition-colors duration-300">LOCATION</h4>
                  <p className="text-yellow-400 dark:text-orange-400 text-lg transition-colors duration-300">Okotoks, Alberta, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-glass rounded-2xl p-8 hover-lift">
              <h4 className="text-2xl font-bold text-yellow-400 dark:text-orange-400 mb-6 flex items-center transition-colors duration-300">
                <span className="text-3xl mr-3">🎯</span>
                FOR SCOUTS & RECRUITERS
              </h4>
              <p className="text-gray-300 dark:text-gray-600 mb-6 text-lg transition-colors duration-300">
                London is actively seeking opportunities to play at the next level. 
                We welcome inquiries from college coaches, scouts, and recruiters.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/20 dark:from-orange-400/20 to-yellow-600/20 dark:to-orange-600/20 p-6 rounded-xl border border-yellow-400/30 dark:border-orange-400/30 transition-colors duration-300">
                <p className="text-yellow-300 dark:text-orange-300 text-lg transition-colors duration-300">
                  <strong className="text-white dark:text-black">Available for:</strong> College visits, interviews, additional video footage, 
                  academic transcripts, and references upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <h3 className="text-3xl font-bold text-yellow-400 dark:text-orange-400 mb-8">
              SEND A MESSAGE
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-white dark:text-black mb-3 transition-colors duration-300">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-glass border border-yellow-400/30 dark:border-orange-400/30 rounded-xl text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-orange-400 focus:border-yellow-400 dark:focus:border-orange-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-white dark:text-black mb-3 transition-colors duration-300">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-glass border border-yellow-400/30 dark:border-orange-400/30 rounded-xl text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-orange-400 focus:border-yellow-400 dark:focus:border-orange-400 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="scout"
                  name="scout"
                  checked={formData.scout}
                  onChange={handleChange}
                  className="h-6 w-6 text-yellow-400 dark:text-orange-400 focus:ring-yellow-400 dark:focus:ring-orange-400 border-yellow-400 dark:border-orange-400 rounded bg-glass"
                />
                <label htmlFor="scout" className="ml-4 block text-lg text-white dark:text-black transition-colors duration-300">
                  I am a scout/recruiter
                </label>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-white dark:text-black mb-3 transition-colors duration-300">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-glass border border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in London..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 dark:bg-orange-400 text-black dark:text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-yellow-300 dark:hover:bg-orange-300 hover-lift hover-glow focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-orange-400 transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
