import { Clock, MessageCircle, Phone, Users } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions or want to place a custom order? Reach out to us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="glass-morphism rounded-3xl p-8 shadow-xl shadow-black/30 border border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <p className="text-white text-lg sm:text-xl">+234 905 579 7913</p>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-red-500" />
                  <p className="text-white text-lg sm:text-xl">hello@lafun.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-red-500" />
                  <p className="text-white text-lg sm:text-xl">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-red-500" />
                  <p className="text-white text-lg sm:text-xl">Follow us on social media!</p>
                </div>
              </div>
            </div>

            <div className="glass-morphism rounded-3xl p-8 shadow-xl shadow-black/30 border border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-lg font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="enhanced-input w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-lg font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="enhanced-input w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-lg font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="enhanced-input w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:outline-none transition-all"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="enhanced-button w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Contact