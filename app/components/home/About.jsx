import { Award, ChefHat, Heart, Truck } from 'lucide-react'
import React from 'react'

function About() {
  return (
     <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
              Why Choose LÀFÙN?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Authentic Nigerian cuisine delivered with love and tradition
            </p>
          </div>

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
        </div>
      </section>
  )
}

export default About