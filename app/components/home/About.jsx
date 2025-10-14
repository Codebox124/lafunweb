import { Award, ChefHat, Heart, Truck, Sparkles, Star, Clock, Flame } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromBottomToTop, others } from '../animations'

function About() {
  const features = [
    {
      icon: ChefHat,
      title: "Authentic Nigerian",
      description: "Traditional recipes passed down through generations",
      color: "from-red-500 to-orange-500",
      delay: 0
    },
    {
      icon: Truck,
      title: "We Deliver",
      description: "Stay at home, we will come to you. Hot and fresh!",
      color: "from-orange-500 to-yellow-500",
      delay: 0.1
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients for authentic taste",
      color: "from-yellow-500 to-red-500",
      delay: 0.2
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and care",
      color: "from-pink-500 to-red-500",
      delay: 0.3
    }
  ]

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Ultra-modern background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <motion.div 
          initial={fromBottomToTop.initial}
              whileInView={fromBottomToTop.whileInView}
              transition={others.transition}
              viewport={others.viewport}
      className="container-modern relative z-10">
       
        {/* Feature Cards - Ultra Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-all duration-500`}></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                  {/* Icon container with modern design */}
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-black mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            )
          })}
        </div>

         {/* Our Story Section - Modern Layout */}
         <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-xl">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 text-base font-black tracking-wide">
                Our Story
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 display-font tracking-tighter">
              Why Choose{' '}
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                LÁFÚN?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're not just serving food, we're preserving culture and delivering authentic experiences
            </p>
          </motion.div>

          {/* Hero Image with modern presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group mb-16"
          >
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-600/30 to-red-600/40 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Image container */}
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-2xl">
              <img
                src="/about.jpg"
                alt="Traditional Nigerian food preparation"
                className="relative w-full object-cover h-80 lg:h-[32rem] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Floating info cards on image */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-white font-bold text-lg">24/7</div>
                    <div className="text-gray-300 text-xs">Available</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="text-white font-bold text-lg">Fresh</div>
                    <div className="text-gray-300 text-xs">Daily</div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-bold text-lg">5.0</div>
                    <div className="text-gray-300 text-xs">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Modern Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              LÁFÚN brings you the true taste of tradition, crafted from the most authentic roots.
            </p>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-2xl"></div>
              <p className="relative text-3xl sm:text-4xl lg:text-5xl font-black text-white px-8 py-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Proudly ÍbÍlè.
                </span>
                {' '}Purely LÁFÚN.
              </p>
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Loved for its nostalgic flavor and unforgettable experience. Every bite tells a story of tradition, 
              passion, and authentic Nigerian culinary heritage.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About