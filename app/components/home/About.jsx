import { Award, ChefHat, Heart, Truck } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromBottomToTop, others } from '../animations'

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div 
          initial={fromBottomToTop.initial}
              whileInView={fromBottomToTop.whileInView}
              transition={others.transition}
              viewport={others.viewport}
      className="max-w-7xl mx-auto px-4 sm:px-6">
       

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 sm:w-24 sm:h-24 enhanced-icon-container rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Authentic Nigerian</h3>
            <p className="text-sm sm:text-base text-gray-400">Traditional recipes passed down through generations</p>
          </div>

          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 sm:w-24 sm:h-24 enhanced-icon-container rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">We Deliver</h3>
            <p className="text-sm sm:text-base text-gray-400">Stay at home, we will come to you. Hot and fresh!</p>
          </div>

          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 sm:w-24 sm:h-24 enhanced-icon-container rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Premium Quality</h3>
            <p className="text-sm sm:text-base text-gray-400">Only the finest ingredients for authentic taste</p>
          </div>

          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 sm:w-24 sm:h-24 enhanced-icon-container rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Made with Love</h3>
            <p className="text-sm sm:text-base text-gray-400">Every dish crafted with passion and care</p>
          </div>
        </div>
         <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
            Why Choose LÁFÚN ?
          </h2>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <img
              src="/about.jpg"
              alt="Traditional Nigerian food preparation showcasing LÁFÚN's authentic cooking process"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl object-cover h-48 sm:h-64 lg:h-80"
            />
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mt-10">
            LÁFÚN brings you the true taste of tradition, crafted from the most authentic roots. <em>Proudly ÍbÍlè, Purely LÁFÚN</em>, loved for its nostalgic flavor and unforgettable experience. NA WHEN YOU CHOP AM, YOU GO KNOW!
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About