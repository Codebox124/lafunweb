import { Clock, MessageCircle, Phone, Users, Send, Mail, MapPin, Sparkles } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fromBottomToTop, fromLeftToRight, fromRightToLeft, others } from '../animations'
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        {/* Ultra-modern background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-green-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container-modern relative z-10">
          <motion.div
              initial={fromBottomToTop.initial}
                  whileInView={fromBottomToTop.whileInView}
                  transition={others.transition}
                  viewport={others.viewport}
          className="text-center mb-20 lg:mb-24">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-red-500/10 to-green-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-xl"
            >
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-base font-black tracking-wide">
                Contact Us
              </span>
              <Sparkles className="w-5 h-5 text-green-400" />
            </motion.div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 display-font tracking-tighter">
              Get in{' '}
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have questions or want to place a custom order? We're here to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left: Contact Info Cards */}
            <motion.div
                initial={fromLeftToRight.initial}
                    whileInView={fromLeftToRight.whileInView}
                    transition={others.transition}
                    viewport={others.viewport}
            className="space-y-6">
              <div className="mb-10">
                <h3 className="text-4xl font-black text-white mb-4">Let's Talk</h3>
                <p className="text-gray-400 text-lg">We're always happy to hear from you</p>
              </div>
              
              {/* Phone */}
              <a href="tel:09066165266" className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl hover:border-white/40 transition-all duration-500 hover:-translate-y-1 backdrop-blur-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Call Us</p>
                    <p className="text-white font-black text-xl">09066165266</p>
                  </div>
                </div>
              </a>
              
              {/* Email */}
              <a href="mailto:houseoflafun.co@gmail.com" className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl hover:border-white/40 transition-all duration-500 hover:-translate-y-1 backdrop-blur-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Email Us</p>
                    <p className="text-white font-black text-lg break-all">houseoflafun.co@gmail.com</p>
                  </div>
                </div>
              </a>
              
              {/* Hours */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl hover:border-white/40 transition-all duration-500 backdrop-blur-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Working Hours</p>
                    <p className="text-white font-black text-xl">24/7 Available</p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp */}
              <a href='https://wa.me/2349169360999?text=Hello%20LAFUN%2C%20I%20want%20to%20place%20an%20order' target='_blank' rel="noopener noreferrer" className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/40 rounded-3xl hover:border-green-500/60 transition-all duration-500 hover:-translate-y-1 backdrop-blur-2xl cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-green-500/50">
                    <BsWhatsapp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-green-400 mb-1 font-medium">WhatsApp</p>
                    <p className="text-white font-black text-xl">09169360999</p>
                  </div>
                </div>
              </a>
              
              {/* Instagram */}
              <a href='https://www.instagram.com/lafunofficial?igsh=MWJjZ2t1NnJhNmhiOA==' target='_blank' rel="noopener noreferrer" className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl hover:border-white/40 transition-all duration-500 hover:-translate-y-1 backdrop-blur-2xl cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <BsInstagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium">Follow Us</p>
                    <p className="text-white font-black text-xl">@lafunofficial</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
             initial={fromRightToLeft.initial}
                    whileInView={fromRightToLeft.whileInView}
                    transition={others.transition}
                    viewport={others.viewport}
            className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Form container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[3rem] p-10 border border-white/20 backdrop-blur-2xl">
                <div className="mb-10">
                  <h3 className="text-4xl font-black text-white mb-4">Send a Message</h3>
                  <p className="text-gray-400 text-lg">Fill out the form and we'll get back to you</p>
                </div>
                
                <form action="https://formsubmit.co/houseoflafun.co@gmail.com" method="POST" className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-white text-sm font-bold mb-3">Full Name</label>
                    <input
                      required
                      name='name'
                      type="text"
                      id="name"
                      className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-3">Email Address</label>
                    <input
                      required
                      name='email'
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  {/* Message Textarea */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-white text-sm font-bold mb-3">Your Message</label>
                    <textarea
                      required
                      name='message'
                      id="message"
                      rows="6"
                      className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all resize-none backdrop-blur-sm hover:border-white/30"
                      placeholder="Tell us what you need..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group/btn relative w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white py-5 rounded-2xl font-black text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  )
}

export default Contact