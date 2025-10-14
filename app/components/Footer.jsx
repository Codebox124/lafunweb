import React from 'react'
import { Heart, Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-950 py-16 border-t border-white/10 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="flex flex-col items-center gap-8">
            {/* Logo with glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/logo.png" 
                alt="LÁFÚN" 
                className="w-40 relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-2xl" 
              />
            </div>
            
            {/* Tagline with gradient */}
            <div className="text-center space-y-3">
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400">
                Proudly Ìbílè. Purely LÁFÚN.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span>in Nigeria</span>
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-gray-500 text-sm font-medium">
                &copy; {new Date().getFullYear()} LÁFÚN. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Authentic Nigerian Cuisine • Fresh • Delicious
              </p>
            </div>

            {/* Social links - can be added here */}
            <div className="flex items-center gap-6 mt-4">
              <a 
                href="https://www.instagram.com/lafunofficial?igsh=MWJjZ2t1NnJhNmhiOA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-semibold"
              >
                Instagram
              </a>
              <span className="text-gray-700">•</span>
              <a 
                href="https://wa.me/2349169360999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-semibold"
              >
                WhatsApp
              </a>
              <span className="text-gray-700">•</span>
              <a 
                href="#contact"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer