import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

function Cart({ cart, setCart, addQuantity, subQuantity, removeItem, setShowCart }) {
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
    className="fixed top-[80px] right-0 z-50 w-full sm:w-80 md:w-96 h-[calc(100vh-80px)] sm:h-[400px] bg-black/95 p-4 sm:p-5 rounded-lg shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <button
                onClick={() => setShowCart(false)}
                className="absolute cursor-pointer top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <CgClose className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
      </button>
      {cart.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Your Cart</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-full overflow-hidden"
            >
              <img
                className="w-14 h-14 sm:w-16 sm:h-16 max-w-16 object-cover rounded-md bg-white/90 flex-shrink-0"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-medium text-white truncate">{item.name}</h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {item.currency}
                  {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <button
                  onClick={() => {
                    if (item.quantity === 1) {
                      removeItem(item);
                    } else {
                      subQuantity(item);
                    }
                  }}
                  className="text-gray-300 hover:text-red-500 focus:text-red-500 transition-colors duration-200"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <AiOutlineMinusCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-white w-6 sm:w-8 text-center text-xs sm:text-sm">{item.quantity}</span>
                <button
                  onClick={() => addQuantity(item)}
                  className="text-gray-300 hover:text-red-500 focus:text-red-500 transition-colors duration-200"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <LuCirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
          <Link
            href="/checkout"
            className="block w-full text-center bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-2 sm:py-3 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Proceed to Checkout
          </Link>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-400">
          <MdOutlineShoppingCart className="w-8 sm:w-10 h-8 sm:h-10 mb-4" />
          <p className="text-base sm:text-lg font-medium">Your cart is empty</p>
          <Link
            href="/#menu"
            className="mt-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Browse Menu
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default Cart;