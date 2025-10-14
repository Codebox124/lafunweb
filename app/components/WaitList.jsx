import { Bell, CheckCircle } from 'lucide-react'
import React from 'react'
import { MdClose } from "react-icons/md";
import { useOverContext } from '../OverContext';
import Link from 'next/link';

function WaitList({waitlistSubmitted, /*waitlistEmail,*/ setShowWaitlist, setWaitlistEmail, handleWaitlistSubmit, }) {
  const {formData, setFormData} = useOverContext()
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 max-w-md w-full border border-red-500/30 shadow-2xl shadow-red-600/20">
            <MdClose className='absolute right-6 w-[25px] h-[25px] cursor-pointer' onClick={()=>{setShowWaitlist(false)}} />
            <div className="text-center">
              {!waitlistSubmitted ? (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Join Our Waitlist</h3>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                    Be the first to know about new menu items, special offers, and exclusive LÁFÚN  experiences!
                  </p>
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4 sm:space-y-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email:e.target.value}) /*setWaitlistEmail(e.target.value)*/}
                      className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all text-sm sm:text-base"
                      required
                    />
                    <div className="flex gap-3 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setShowWaitlist(false)}
                        className="flex-1 px-4 py-3 sm:px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-bold transition-all text-sm sm:text-base"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-3 sm:px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full font-bold transition-all text-sm sm:text-base"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">You're In!</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">
                    Welcome to the LÁFÚN  family! Kindly place an order to finalise your registration. {/*We'll keep you updated on all the delicious happenings.*/}
                  </p>
                  {/*<p className="text-red-400 font-bold">E se! 🙏</p>*/}
                   <Link
                   onClick={()=>{setShowWaitlist(false)}}
            href="/#menu"
            className="mt-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Browse Menu
          </Link>
                </>
              )}
            </div>
          </div>
        </div>
  )
}

export default WaitList