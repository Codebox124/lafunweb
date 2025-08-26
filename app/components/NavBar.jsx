import { Bell, ShoppingCart } from 'lucide-react'
import React from 'react'

function NavBar({setShowWaitlist, itemCount, total, scrollY, setShowCart, showCart, cart}) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 enhanced-nav ${((scrollY > 50) || showCart) ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-red-600/20' : 'bg-transparent'}
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div>
              <img className='md:w-[150px] w-[90px]' src='/logo.png' alt="LÁFÚN  Logo" />
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-300">
                <a href="#about" className="hover:text-red-400 transition-colors text-sm xl:text-base">About</a>
                <a href="#menu" className="hover:text-red-400 transition-colors text-sm xl:text-base">Menu</a>
                <a href="#contact" className="hover:text-red-400 transition-colors text-sm xl:text-base">Contact</a>
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="hover:text-red-400 transition-colors flex items-center gap-2 text-sm xl:text-base"
                >
                  <Bell className="w-4 h-4" />
                  Waitlist
                </button>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div onClick={()=>{setShowCart(!showCart)}} className="relative cursor-pointer">
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">
                      {cart.length}
                    </span>
                  )}
                </div>
                <span className="text-sm sm:text-lg md:text-xl font-bold text-red-400">₦{total/*.toLocaleString()*/}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar