import React from "react";
import { Minus, Plus, X, ShoppingBag, Trash2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
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
      duration:0.5,
      ease:[0.4, 0, 0.2, 1]
    }}
    className="fixed top-0 right-0 z-50 w-full sm:w-[450px] md:w-[500px] h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black backdrop-blur-2xl border-l border-white/10 shadow-2xl overflow-hidden">
      {/* Modern Header */}
      <div className="sticky top-0 bg-gradient-to-b from-gray-950/95 to-gray-950/90 backdrop-blur-2xl z-10 p-6 border-b border-white/10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Your Cart</h3>
              {cart.length > 0 && (
                <p className="text-gray-400 text-sm font-medium">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
              )}
            </div>
          </div>
          <button
            onClick={() => setShowCart(false)}
            className="group relative cursor-pointer p-3 bg-white/5 hover:bg-red-600 rounded-2xl transition-all duration-300 border border-white/10 hover:border-red-500">
            <X className='w-6 h-6 text-gray-300 group-hover:text-white group-hover:rotate-90 transition-all' />
          </button>
        </div>
      </div>
      
      {/* Cart Content */}
      <div className="h-[calc(100vh-10rem)] overflow-y-auto px-6 py-4">
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 backdrop-blur-xl">
                {/* Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  {/* Quantity badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs font-black rounded-full w-7 h-7 flex items-center justify-center shadow-lg border-2 border-gray-950">
                    {item.quantity}
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-base font-black text-white leading-tight">{item.name}</h4>
                    <button
                      onClick={() => removeItem(item)}
                      className="p-2 bg-white/5 hover:bg-red-600 rounded-xl transition-all duration-300 group/trash"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover/trash:text-white transition-colors" />
                    </button>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                      {item.currency}{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.currency}{item.price.toLocaleString()} each
                    </p>
                  </div>
                  
                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 w-fit border border-white/10">
                    <button
                      onClick={() => {
                        if (item.quantity === 1) {
                          removeItem(item);
                        } else {
                          subQuantity(item);
                        }
                      }}
                      className="p-2 bg-white/10 hover:bg-red-600 rounded-xl transition-all duration-300 hover:scale-110 group/btn"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-white w-8 text-center text-lg font-black tabular-nums">{item.quantity}</span>
                    <button
                      onClick={() => addQuantity(item)}
                      className="p-2 bg-gradient-to-br from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 px-6">
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-full border border-white/20">
              <ShoppingBag className="w-20 h-20 text-gray-600" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">Your cart is empty</h3>
          <p className="text-center text-gray-400 mb-8 leading-relaxed">Add some delicious Nigerian food to your cart!</p>
          <Link
            href="/#menu"
            onClick={() => setShowCart(false)}
            className="group relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white font-black py-4 px-10 rounded-2xl transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Browse Menu</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
      </div>

      {/* Bottom Checkout Section */}
      {cart.length > 0 && (
        <div className="sticky bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/95 to-transparent backdrop-blur-2xl p-6 border-t border-white/10">
          <Link
            href="/checkout"
            className="group relative block w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white py-5 rounded-2xl font-black text-lg transition-all duration-500 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 overflow-hidden"
          >
            <div className="flex items-center justify-center gap-3 relative z-10">
              <Sparkles className="w-5 h-5" />
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default Cart;