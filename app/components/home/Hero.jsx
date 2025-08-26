import { Bell } from 'lucide-react'
import React from 'react'

function Hero({setShowWaitlist}) {
  return (
     <section
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden enhanced-hero"
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 leading-none">
            <span className="enhanced-gradient-text enhanced-text-shadow drop-shadow-2xl">
              LÁFÚN 
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold mb-6 sm:mb-8 text-white enhanced-text-shadow">
            PROUDLY ÌBÍLÈ. PURELY LÀFÚN.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed enhanced-text-shadow">
            "Babes, If your dream is steamy, stretchy, and smells like gbęgìrì...it's not real! wake up!. it's hunger"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a href="#menu" className="enhanced-button bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50 backdrop-blur-sm">
              Order Now 🍲
            </a>
            <button
              onClick={() => setShowWaitlist(true)}
              className="enhanced-button bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-3"
            >
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

  )
}

export default Hero