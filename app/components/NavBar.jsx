import { Bell, ShoppingCart, Sparkles } from 'lucide-react'
import React from 'react'

function NavBar({setShowWaitlist, itemCount, total, scrollY, setShowCart, showCart, cart}) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      ((scrollY > 50) || showCart) 
        ? 'bg-gray-950/80 backdrop-blur-2xl shadow-2xl shadow-black/40 border-b border-white/10' 
        : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-md'
    }`}>
        <div className="container-modern py-4 sm:py-5">
          <div className="flex justify-between items-center">
            {/* Logo with modern glow effect */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                className='md:w-[150px] w-[100px] relative z-10 transition-all duration-500 hover:scale-110 drop-shadow-2xl' 
                src='/logo.png' 
                alt="LÁFÚN Logo" 
              />
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                <a href="#about" className="relative text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold group px-2 py-1">
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#menu" className="relative text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold group px-2 py-1">
                  <span className="relative z-10">Menu</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="relative text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold group px-2 py-1">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Waitlist Button - Premium */}
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/20 hover:border-red-500/50 text-white rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-bold backdrop-blur-xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Bell className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Waitlist</span>
                </button>
              </div>

              {/* Cart & Total - Ultra Modern */}
              <div className="flex items-center gap-3">
                {/* Cart Button with modern badge */}
                <button 
                  onClick={()=>{setShowCart(!showCart)}} 
                  className="relative cursor-pointer group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 p-3 rounded-2xl transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-red-500/50 hover:scale-110 shadow-lg hover:shadow-red-500/20"
                >
                  <ShoppingCart className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 text-white text-xs font-black rounded-full min-w-[1.5rem] h-6 px-2 flex items-center justify-center shadow-xl shadow-red-500/50 border-2 border-white/20 animate-pulse">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* Total Badge - Premium Design */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 px-5 py-3 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="text-base sm:text-lg font-black text-white tracking-tight">
                        ₦{total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Hint - can be expanded later if needed */}
        <div className="lg:hidden px-6 pb-4">
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors font-semibold">About</a>
            <span className="text-gray-700">•</span>
            <a href="#menu" className="text-gray-400 hover:text-white transition-colors font-semibold">Menu</a>
            <span className="text-gray-700">•</span>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors font-semibold">Contact</a>
            <span className="text-gray-700">•</span>
            <button onClick={() => setShowWaitlist(true)} className="text-red-400 hover:text-red-300 transition-colors font-bold">
              Waitlist
            </button>
          </div>
        </div>
      </nav>
  )
}

export default NavBar