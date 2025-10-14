import { Star, Quote, Verified, Sparkles } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromBottomToTop, others } from '../animations'

function Testimonials() {
  const testimonials = [
    {
      name: "Aisha B.",
      image: "/aishab.jpg",
      rating: 5,
      text: "LÁFÚN is simply the best! The taste takes me right back to Nigeria. The Abula combo is a must-try!",
      delay: 0
    },
    {
      name: "Roqeeb R.",
      image: "/rajiroqeeb.jpg",
      rating: 4,
      text: "I've tried many Nigerian restaurants, but LÁFÚN stands out. The goat meat is incredibly tender and flavorful.",
      delay: 0.1
    },
    {
      name: "Chidinma O.",
      image: "/chidinmao.jpg",
      rating: 5,
      text: "The delivery was fast, and the food was still hot! The LÁFÚN without Gbègìrì is my new favorite. Highly recommend!",
      delay: 0.2
    }
  ]

  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Ultra-modern background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        
        <div className="container-modern relative z-10">
          {/* Header */}
          <motion.div
              initial={fromBottomToTop.initial}
                  whileInView={fromBottomToTop.whileInView}
                  transition={others.transition}
                  viewport={others.viewport}
          className="text-center mb-20 lg:mb-24">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/30 rounded-full mb-8 backdrop-blur-xl"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 text-base font-black tracking-wide">
                Testimonials
              </span>
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 display-font tracking-tighter">
              What Our{' '}
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real stories from real people who love the authentic taste of LÁFÚN
            </p>
          </motion.div>

          {/* Testimonial Cards - Ultra Modern */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={fromBottomToTop.initial}
                whileInView={fromBottomToTop.whileInView}
                transition={{...others.transition, delay: testimonial.delay}}
                viewport={others.viewport}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-2xl h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Quote className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600 fill-gray-600'
                        } transition-all duration-300 group-hover:scale-110`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow font-light">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                  
                  {/* Customer info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {/* Image glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white/30 group-hover:border-white/60 transition-all"
                      />
                      
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-900 group-hover:scale-110 transition-transform"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-white text-lg">{testimonial.name}</p>
                        <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                      </div>
                      <p className="text-sm text-gray-400 font-medium">Verified Customer</p>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-6">Join hundreds of satisfied customers</p>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <p className="text-white font-bold text-2xl mt-4">5.0 Average Rating</p>
          </motion.div>
        </div>
      </section>
  )
}

export default Testimonials