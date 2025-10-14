import { Bell, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromBottomToTop, others } from '../animations'

function Hero({setShowWaitlist}) {
  return (
     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Ultra-modern animated mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-red-500/30 via-orange-500/20 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-red-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-pink-500/30 via-red-500/20 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Modern grid pattern with perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="container-modern relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh]">
            {/* Left Content - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Premium badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/30 rounded-full backdrop-blur-xl shadow-lg shadow-red-500/10"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-red-500 to-orange-500"></span>
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 text-sm font-bold tracking-wide">
                  Authentic Nigerian Cuisine
                </span>
                <Sparkles className="w-4 h-4 text-orange-400" />
              </motion.div>

              {/* Main heading with advanced typography */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-7xl sm:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
                >
                  <span className="inline-block bg-gradient-to-br from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent display-font drop-shadow-2xl">
                    LÁFÚN
                  </span>
                </motion.h1>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                >
                  <span className="text-white/95">Proudly Ìbílè.</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                    Purely LÁFÚN.
                  </span>
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-xl font-light"
              >
                Experience the authentic taste of tradition. If your dream is steamy, stretchy, and smells like gbęgìrì... 
                <span className="text-white font-semibold"> wake up, it's hunger calling!</span>
              </motion.p>
              
              {/* CTA Buttons - Ultra modern */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a 
                  href="#menu" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Order Now</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="group inline-flex items-center justify-center gap-3 bg-white/5 border-2 border-white/20 hover:border-red-500/50 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 backdrop-blur-xl hover:scale-105"
                >
                  <Bell className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Join Waitlist</span>
                </button>
              </motion.div>

              {/* Stats - Modern card design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    <div className="text-3xl font-black text-white">100+</div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Happy Customers</div>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⭐</span>
                    <div className="text-3xl font-black text-white">5.0</div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Rating</div>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <div className="text-3xl font-black text-white">Fast</div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Delivery</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image - Ultra modern presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-orange-600/30 to-pink-600/20 rounded-[3rem] blur-3xl scale-105 animate-pulse-slow"></div>
              
              {/* Main image container with modern styling */}
              <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 p-2">
                <div className="rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/hero.png"
                    alt="Delicious Nigerian Food"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating badges - Modern cards */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-red-600 via-orange-600 to-red-600 p-8 rounded-3xl shadow-2xl border-2 border-white/30 backdrop-blur-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="text-white text-lg font-black">100% Authentic</div>
                </div>
                <div className="text-white/90 text-sm font-medium">Traditional Nigerian</div>
              </motion.div>
              
              {/* Additional floating element */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-bold text-lg">Fresh Today</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          .bg-size-200 {
            background-size: 200%;
          }
          .hover\\:bg-right-bottom:hover {
            background-position: right bottom;
          }
        `}</style>
      </section>
  )
}

export default Hero