import { Star } from 'lucide-react'
import React from 'react'

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our happy customers who love the authentic taste of LÀFÙN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="enhanced-testimonial rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/30 border border-gray-700">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Customer 1"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-red-500"
                />
                <div>
                  <p className="font-bold text-white text-lg sm:text-xl">Aisha B.</p>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                "LÀFÙN is simply the best! The taste takes me right back to Nigeria. The Abula combo is a must-try!"
              </p>
            </div>

            <div className="enhanced-testimonial rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/30 border border-gray-700">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="Customer 2"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-red-500"
                />
                <div>
                  <p className="font-bold text-white text-lg sm:text-xl">Kunle A.</p>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star size={16} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                "I've tried many Nigerian restaurants, but LÀFÙN stands out. The goat meat is incredibly tender and flavorful."
              </p>
            </div>

            <div className="enhanced-testimonial rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/30 border border-gray-700">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Customer 3"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-red-500"
                />
                <div>
                  <p className="font-bold text-white text-lg sm:text-xl">Chidinma O.</p>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                "The delivery was fast, and the food was still hot! The LÀFÙN without Gbègìrì is my new favorite. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials