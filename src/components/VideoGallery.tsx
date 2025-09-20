'use client'

import { useState } from 'react'

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(0)

  // Video data - these would be replaced with actual YouTube/Vimeo video IDs
  const videos = [
    {
      id: '1',
      title: '2024 Season Highlights',
      description: 'Top plays, goals, and assists from London\'s 2024 season with Calgary Fire',
      thumbnail: '/3823040932616092287.JPG.jpeg',
      videoId: 'PLACEHOLDER_VIDEO_1', // Replace with actual YouTube ID
      type: 'youtube'
    },
    {
      id: '2',
      title: 'Skills & Training',
      description: 'London demonstrating advanced hockey skills, stickhandling, and shooting techniques',
      thumbnail: '/7448011728692255749.JPG.jpeg',
      videoId: 'PLACEHOLDER_VIDEO_2', // Replace with actual YouTube ID
      type: 'youtube'
    },
    {
      id: '3',
      title: 'Championship Game',
      description: 'Key moments from the championship game including the game-winning goal',
      thumbnail: '/7459671353910135796.jpeg',
      videoId: 'PLACEHOLDER_VIDEO_3', // Replace with actual YouTube ID
      type: 'youtube'
    },
    {
      id: '4',
      title: 'Team Leadership',
      description: 'London\'s leadership on and off the ice, team huddles, and mentorship',
      thumbnail: '/7757821833311002603.jpeg',
      videoId: 'PLACEHOLDER_VIDEO_4', // Replace with actual YouTube ID
      type: 'youtube'
    }
  ]

  const getEmbedUrl = (videoId: string, type: string) => {
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }
    return ''
  }

  return (
    <section id="videos" className="py-20 bg-black dark:bg-white relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-400 dark:text-orange-400 mb-6 animate-slide-up transition-colors duration-300">
            VIDEO HIGHLIGHTS
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto animate-slide-up transition-colors duration-300" style={{animationDelay: '0.2s'}}>
            Watch London's best moments on the ice
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="bg-glass rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <div className="aspect-video">
              <iframe
                src={getEmbedUrl(videos[selectedVideo].videoId, videos[selectedVideo].type)}
                title={videos[selectedVideo].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-white dark:text-black mb-3 transition-colors duration-300">
              {videos[selectedVideo].title}
            </h3>
            <p className="text-gray-300 dark:text-gray-600 text-lg transition-colors duration-300">
              {videos[selectedVideo].description}
            </p>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(index)}
              className={`cursor-pointer rounded-2xl overflow-hidden bg-glass hover-lift transition-all duration-300 animate-slide-up ${
                selectedVideo === index
                  ? 'ring-4 ring-cyan-400 transform scale-105 hover-glow'
                  : 'hover:shadow-xl hover:scale-105'
              }`}
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
            >
              <div className="aspect-video bg-gray-800 relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <div className="w-16 h-16 bg-neon-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {selectedVideo === index && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h4 className="font-bold text-white dark:text-black text-lg mb-2 transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-gray-300 dark:text-gray-600 text-sm transition-colors duration-300">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '1s'}}>
          <p className="text-gray-300 dark:text-gray-600 mb-6 text-lg transition-colors duration-300">
            Want to see more highlights? Check out the full channel:
          </p>
          <a
            href="https://youtube.com/@londonclingman" // Placeholder - would be actual YouTube channel
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-glass border-2 border-red-500 text-red-400 px-8 py-4 rounded-full font-bold text-lg hover-lift hover-glow transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            VIEW FULL CHANNEL
          </a>
        </div>
      </div>
    </section>
  )
}
