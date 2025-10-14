import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function FixedOrderButton({handlePlaceOrder, total, setShowDrinkModal, showDrinkModal}) {
  return (
    <motion.div 
     initial={{
      right:"-100vw"
    }}
    animate={{
      right:0
    }}
    exit={{
      right:"-100vw"
    }}
    transition={{
      duration:0.7,
      ease:"backInOut"
    }}
    className="fixed bottom-6 right-6 z-100">
          {/*<button
            onClick={()=>{showDrinkModal?handlePlaceOrder():setShowDrinkModal(true)}}
            className="enhanced-floating-button cursor-pointer enhanced-button bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-6 py-4 rounded-full font-bold shadow-2xl shadow-red-600/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Order Now (₦{total/*.toLocaleString()*})
          </button>*/}
          <Link
          href="/checkout"
            className="flex items-center justify-center enhanced-floating-button cursor-pointer enhanced-button bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-6 py-4 rounded-full font-bold shadow-2xl shadow-red-600/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Order Now (₦{total})
          </Link>
     
        </motion.div>
  )
}

export default FixedOrderButton